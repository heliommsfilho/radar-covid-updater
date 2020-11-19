import { expect } from "chai";
import { ApplicationDatabase } from "../../src/database/application-database";
import { ActiveModel, ConfirmedModel, DeadModel, RecoveredModel, SuspectModel } from "../../src/database/case.model";

describe('Application Repository should:', () => {
    it('connect successfully', () => {
        const datasetLength = 0;
        const applicationRepository = new ApplicationDatabase();
        applicationRepository.updateDatabase();
    });
});