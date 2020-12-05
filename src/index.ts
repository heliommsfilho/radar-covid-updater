import * as dotenv from "dotenv";

import { CronJob } from "cron";
import { ApplicationDatabase } from "./database/application-database";

(() => {
    dotenv.config();

    if (!process.env.CRON_SCHEDULING) {
        throw new Error('Cron job scheduling not defined');
    }

    const job = new CronJob(process.env.CRON_SCHEDULING, () => {
        const applicationRepository = new ApplicationDatabase();
        applicationRepository.updateDatabase();
        console.log('Cases updated successfully!');
    }, null, true, 'Europe/Lisbon');

    job.start();
})();