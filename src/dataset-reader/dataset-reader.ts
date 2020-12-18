import Axios from "axios";
import * as dotenv from "dotenv";

export class DatasetReader {

    constructor() {
        dotenv.config();

        if (!process.env.COVID_API_URL) {
            throw new Error('Official COVID-19 API URL not defined');
        }
    }

    public static downloadDataset(): Promise<any> {
        dotenv.config();
        const covidApiUrl = process.env.COVID_API_URL ? process.env.COVID_API_URL : 'Empty URL!';
        console.log(`Downloading dataset from '${covidApiUrl}'`);

        return Axios.get(covidApiUrl)
                    .then(dataset => {
                        console.info('Dataset gotten successfully');
                        return dataset.data;
                    })
                    .catch(error => console.error('Error when getting data from https://covid19-api.vost.pt', error));
    }
}