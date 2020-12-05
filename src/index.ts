import * as dotenv from "dotenv";

import { CronJob } from "cron";
import { ApplicationDatabase } from "./database/application-database";

(() => {
    dotenv.config();

    if (!process.env.CRON_SCHEDULING) {
        throw new Error('Cron job scheduling not defined');
    }

    console.log('Covid Updater started successfully!');

    const job = new CronJob(process.env.CRON_SCHEDULING, async () => {
        const applicationRepository = new ApplicationDatabase();
        await applicationRepository.updateDatabase();
        console.log('Cases updated successfully!');
    }, null, true, 'Europe/Lisbon');

    job.start();
    console.log(`Next execution at: ${job.nextDates().toString()}`);
})();