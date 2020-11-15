import moment from 'moment';
import {Dataset} from "./dataset";
import {Active, Confirmed, Control, Dead, Recovered, Suspect} from "./category-enum";
import { ActiveCase } from './case-types/case-active';
import { SuspectCase } from './case-types/case-suspect';
import { ConfirmedCase } from './case-types/case-confirmed';
import { DeadCase } from './case-types/case-dead';
import { RecoveredCase } from './case-types/case-recovered';

export class DatasetParser {

    pandemicDays: any;
    allDays: any;

    constructor() {
        this.pandemicDays = Dataset.getDataset()[Control.DATE];
        this.allDays = Object.keys(this.pandemicDays).map(key => this.parseDate(this.pandemicDays[key]));
    }

    public transformActive(): Map<string, ActiveCase> {
        const data = this.getCases(Active.ALL);
        const activeAll = new Map<string, ActiveCase>();

        data.forEach((value, key) => {
            activeAll.set(key, { all: value });
        });

        return activeAll;
    }

    public transformSuspect(): Map<string, SuspectCase> {
        const data = this.getCases(Suspect.ALL);
        const suspectAll = new Map<string, SuspectCase>();

        data.forEach((value, key) => {
            suspectAll.set(key, { all: value });
        });

        return suspectAll;
    }

    public transformConfirmed(): Map<string, ConfirmedCase> {
        const confirmedMap = new Map<string, ConfirmedCase>();

        const all = this.getCases(Confirmed.ALL);
        const north = this.getCases(Confirmed.NORTH);
        const center = this.getCases(Confirmed.CENTER);
        const lvt = this.getCases(Confirmed.LVT);
        const alentejo = this.getCases(Confirmed.ALENTEJO);
        const algarve = this.getCases(Confirmed.ALGARVE);
        const acores = this.getCases(Confirmed.ACORES);
        const madeira = this.getCases(Confirmed.MADEIRA);

        this.allDays.forEach((day: string) => {

            const confirmed: ConfirmedCase = {
                all: all.get(day),
                north: north.get(day),
                center: center.get(day),
                lvt: lvt.get(day),
                alentejo: alentejo.get(day),
                algarve: algarve.get(day),
                acores: acores.get(day),
                madeira: madeira.get(day)
            };

            confirmedMap.set(day, confirmed);
        });

        return confirmedMap;
    }

    public transformDead(): Map<string, DeadCase> {
        const deadMap = new Map<string, DeadCase>();

        const all = this.getCases(Dead.ALL);
        const north = this.getCases(Dead.NORTH);
        const center = this.getCases(Dead.CENTER);
        const lvt = this.getCases(Dead.LVT);
        const alentejo = this.getCases(Dead.ALENTEJO);
        const algarve = this.getCases(Dead.ALGARVE);
        const acores = this.getCases(Dead.ACORES);
        const madeira = this.getCases(Dead.MADEIRA);

        this.allDays.forEach((day: string) => {

            const confirmed: ConfirmedCase = {
                all: all.get(day),
                north: north.get(day),
                center: center.get(day),
                lvt: lvt.get(day),
                alentejo: alentejo.get(day),
                algarve: algarve.get(day),
                acores: acores.get(day),
                madeira: madeira.get(day)
            };

            deadMap.set(day, confirmed);
        });

        return deadMap;
    }

    public transformRecovered(): Map<string, RecoveredCase> {
        const deadMap = new Map<string, RecoveredCase>();

        const all = this.getCases(Recovered.ALL);
        const north = this.getCases(Recovered.NORTH);
        const center = this.getCases(Recovered.CENTER);
        const lvt = this.getCases(Recovered.LVT);
        const alentejo = this.getCases(Recovered.ALENTEJO);
        const algarve = this.getCases(Recovered.ALGARVE);
        const acores = this.getCases(Recovered.ACORES);
        const madeira = this.getCases(Recovered.MADEIRA);

        this.allDays.forEach((day: string) => {

            const confirmed: ConfirmedCase = {
                all: all.get(day),
                north: north.get(day),
                center: center.get(day),
                lvt: lvt.get(day),
                alentejo: alentejo.get(day),
                algarve: algarve.get(day),
                acores: acores.get(day),
                madeira: madeira.get(day)
            };

            deadMap.set(day, confirmed);
        });

        return deadMap;
    }

    public getCases(incidenType: string): Map<string, number> {
        const data = Dataset.getDataset()[incidenType];
        const outputDataMap = new Map();

        Object.keys(data).forEach(key => {
            const day = this.pandemicDays[key];
            const mapKey = this.parseDate(day);
            outputDataMap.set(mapKey, data[key]);
        });

        return outputDataMap;
    }

    private parseDate(inputDate: string): string {
        return moment(inputDate, 'DD-MM-YYYY').format('YYYY_MM_DD');
    }
}