import Axios from "axios";

export class DatasetReader {

    public static downloadDataset(): Promise<any> {
        return Axios.get('https://covid19-api.vost.pt/Requests/get_full_dataset')
                    .then(dataset => {
                        console.info('Dataset gotten successfully');
                        return dataset.data;
                    })
                    .catch(error => console.error('Error when getting data from https://covid19-api.vost.pt', error));
    }
}