import moment from 'moment';
import { DatasetReader } from '../dataset-reader/dataset-reader';
import { Control } from "./case-types/case-incidence.type";
import { CaseType } from './case-types/case.type';

/**
 * Parser to transform raw COVID-19 API data.
 *
 * @author Hélio Márcio Filho <heliommsfilho@gmail.com>
 * @since 1.0.0
 */
export class DatasetParser {

    fullDataset: any;
    pandemicDays: any;
    parsedDayList: any;

    protected constructor(fullDataset: any) {
        this.fullDataset = fullDataset;
        this.pandemicDays = this.fullDataset[Control.DATE];
        this.parsedDayList = Object.keys(this.pandemicDays).map(key => this.parseDate(this.pandemicDays[key]));
    }

    public static async getInstance() {
        const fullDataset = await DatasetReader.downloadDataset();
        return new DatasetParser(fullDataset);
    }

    /***
     * Transforms a specific case type raw information to the format ready to be saved.
     *
     * @param caseType type of the case (Active, Suspect, Confirmed...).
     *
     * @returns map containing transformed data.
     */
    public transform(caseType: CaseType): Map<string, any> {
        const outputMap = new Map<string, any>();

        const all       = this.getCases(caseType.all);
        const north     = this.getCases(caseType.north);
        const center    = this.getCases(caseType.center);
        const lvt       = this.getCases(caseType.lvt);
        const alentejo  = this.getCases(caseType.alentejo);
        const algarve   = this.getCases(caseType.algarve);
        const acores    = this.getCases(caseType.acores);
        const madeira   = this.getCases(caseType.madeira);

        this.parsedDayList.forEach((day: string) => outputMap.set(day, { all: all.get(day), north: north.get(day), center: center.get(day), lvt: lvt.get(day),
                                                                         alentejo: alentejo.get(day), algarve: algarve.get(day), acores: acores.get(day),
                                                                         madeira: madeira.get(day) }));

        return outputMap;
    }

    /**
     * Transforms a specific type of incidence data case into a map which the key is the date int YYYY_MM_DD format.
     *
     * @param incidenType type of the incidence case.
     *
     * @returns map containing number of cases by date (the key is day).
     */
    public getCases(incidenType: string | undefined): Map<string, number> {
        const outputDataMap = new Map();

        if (incidenType) {
            const data = this.fullDataset[incidenType];

            Object.keys(data).forEach(key => {
                const day = this.pandemicDays[key];
                const mapKey = this.parseDate(day);
                outputDataMap.set(mapKey, data[key]);
            });
        }

        return outputDataMap;
    }

    /**
     * Converts a date to YYYY_MM_DD format.
     *
     * @param inputDate date in DD-MM-YYYY format.
     *
     * @returns converted date in YYYY_MM_DD format.
     */
    private parseDate(inputDate: string): string {
        return moment(inputDate, 'DD-MM-YYYY').format('YYYY_MM_DD');
    }
}