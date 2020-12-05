import { CronJob } from "cron";
import { ApplicationDatabase } from "./database/application-database";

(() => {
    const job = new CronJob('1 * * * * *', () => {
        const applicationRepository = new ApplicationDatabase();
        applicationRepository.updateDatabase();
        console.log('Cases updated successfully!');
    }, null, true, 'Europe/Lisbon');

    job.start();
})();