import { expect } from "chai";
import { CronJob } from "cron";
import { ApplicationDatabase } from "../../src/database/application-database";
import { ActiveModel, ConfirmedModel, DeadModel, RecoveredModel, SuspectModel } from "../../src/database/case.model";
import { DatasetReader } from "../../src/dataset-reader/dataset-reader";

describe('Application Repository should:', () => {

    it('save dataset into MongoDB', async () => {
        const currentDataset = await DatasetReader.downloadDataset();
        const datasetLength = Object.keys(currentDataset.data).length;
        const applicationRepository = new ApplicationDatabase();

        applicationRepository.updateDatabase();


        const daysSuspect = (await SuspectModel.find()).length;
        expect(daysSuspect).to.equal(datasetLength);

        const daysConfirmed = (await ConfirmedModel.find()).length;
        expect(daysConfirmed).to.equal(datasetLength);

        const daysDead = (await DeadModel.find()).length;
        expect(daysDead).to.equal(datasetLength);

        const daysRecovered = (await RecoveredModel.find()).length;
        expect(daysRecovered).to.equal(datasetLength);
    });
});