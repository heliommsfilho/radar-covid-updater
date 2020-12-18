import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Active, Suspect, Confirmed, Dead, Recovered } from "../dataset-parser/case-types/case-incidence.type";
import { DatasetParser } from "../dataset-parser/dataset-parser";
import { ActiveModel, ConfirmedModel, DeadModel, RecoveredModel, SuspectModel } from "./case.model";

export class ApplicationDatabase {

    public async updateDatabase() {
        dotenv.config();

        if (!process.env.MONGO_URL) {
            throw new Error('MongoDB connection URL not defined');
        }

        this.connect();
        const datasetParser = await DatasetParser.getInstance();

        const active    = this.getDatabaseObject(datasetParser.transform({ all: Active.ALL }), false);
        const suspect   = this.getDatabaseObject(datasetParser.transform({ all: Suspect.ALL }), false);
        const confirmed = this.getDatabaseObject(datasetParser.transform({ all: Confirmed.ALL, north: Confirmed.NORTH, center: Confirmed.CENTER, lvt: Confirmed.LVT, alentejo: Confirmed.ALENTEJO, algarve: Confirmed.ALGARVE, acores: Confirmed.ACORES, madeira: Confirmed.MADEIRA }), true);
        const dead      = this.getDatabaseObject(datasetParser.transform({ all: Dead.ALL, north: Dead.NORTH, center: Dead.CENTER, lvt: Dead.LVT, alentejo: Dead.ALENTEJO, algarve: Dead.ALGARVE, acores: Dead.ACORES, madeira: Dead.MADEIRA }), true);
        const recovered = this.getDatabaseObject(datasetParser.transform({ all: Recovered.ALL, north: Recovered.NORTH, center: Recovered.CENTER, lvt: Recovered.LVT, alentejo: Recovered.ALENTEJO, algarve: Recovered.ALGARVE, acores: Recovered.ACORES, madeira: Recovered.MADEIRA }), true);


        this.clearCollections();
        await ActiveModel.insertMany(active);
        await SuspectModel.insertMany(suspect);
        await ConfirmedModel.insertMany(confirmed);
        await DeadModel.insertMany(dead);
        await RecoveredModel.insertMany(recovered);

        this.disconnect();
    }

    private connect() {
        const mongoUrl = process.env.MONGO_URL ? process.env.MONGO_URL : '';

        mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err: any) => {
            if (err)  {
                console.log(err.message);
            } else {
                console.info('Connected sucessfully')
            }
        });
    }

    private disconnect() {
        mongoose.disconnect();
    }

    private clearCollections() {
        ActiveModel.deleteMany({}, () => console.info('Removed all from actives'));
        SuspectModel.deleteMany({}, () => console.info('Removed all from suspects'));
        ConfirmedModel.deleteMany({}, () => console.info('Removed all from confirmeds'));
        DeadModel.deleteMany({}, () => console.info('Removed all from deads'));
        RecoveredModel.deleteMany({}, () => console.info('Removed all from recovereds'));
    }

    private getDatabaseObject(casesByDay: Map<number, any>, byRegion: boolean): any[] {
        const outputCases: any[] = [];

        casesByDay.forEach((cases, day) => {
            const casesMap = new Map<string, number>();
            casesMap.set('all', cases.all);

            if (byRegion) {
                casesMap.set('north', cases.north);
                casesMap.set('center', cases.center);
                casesMap.set('lvt', cases.lvt);
                casesMap.set('alentejo', cases.alentejo);
                casesMap.set('algarve', cases.algarve);
                casesMap.set('acores', cases.acores);
                casesMap.set('madeira', cases.madeira);
            }

            outputCases.push( { date: day, cases: casesMap });
        });

        return outputCases;
    }
}