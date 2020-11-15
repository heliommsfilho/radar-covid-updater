import moment from 'moment';
import { Dataset } from "./dataset";
import { Control } from "./case-types/case-incidence";
import { CaseNumber } from './case-types/case-number';
import { CaseType } from './case-types/case-type';

export class DatasetParser {

    pandemicDays: any;
    parsedDayList: any;

    constructor() {
        this.pandemicDays = Dataset.getDataset()[Control.DATE];
        this.parsedDayList = Object.keys(this.pandemicDays).map(key => this.parseDate(this.pandemicDays[key]));
    }

    public transform(caseType: CaseType): Map<string, CaseNumber> {
        const outputMap = new Map<string, CaseNumber>();

        const all       = this.getCases(caseType.all);
        const north     = caseType.north    ? this.getCases(caseType.north)     : undefined;
        const center    = caseType.center   ? this.getCases(caseType.center)    : undefined;
        const lvt       = caseType.lvt      ? this.getCases(caseType.lvt)       : undefined;
        const alentejo  = caseType.alentejo ? this.getCases(caseType.alentejo)  : undefined;
        const algarve   = caseType.algarve  ? this.getCases(caseType.algarve)   : undefined;
        const acores    = caseType.acores   ? this.getCases(caseType.acores)    : undefined;
        const madeira   = caseType.madeira  ? this.getCases(caseType.madeira)   : undefined;

        this.parsedDayList.forEach((day: string) => outputMap.set(day, this.createCaseInstance(day, all, north, center, lvt, alentejo, algarve, acores, madeira)));

        return outputMap;
    }

    protected getCases(incidenType: string): Map<string, number> {
        const data = Dataset.getDataset()[incidenType];
        const outputDataMap = new Map();

        Object.keys(data).forEach(key => {
            const day = this.pandemicDays[key];
            const mapKey = this.parseDate(day);
            outputDataMap.set(mapKey, data[key]);
        });

        return outputDataMap;
    }

    private createCaseInstance(day: string, all: Map<string, number>, north?: Map<string, number>, center?: Map<string, number>, lvt?: Map<string, number>,
                               alentejo?: Map<string, number>, algarve?: Map<string, number>, acores?: Map<string, number>, madeira?: Map<string, number>) : CaseNumber {
        return {
            all: all.get(day),
            north: north?.get(day),
            center: center?.get(day),
            lvt: lvt?.get(day),
            alentejo: alentejo?.get(day),
            algarve: algarve?.get(day),
            acores: acores?.get(day),
            madeira: madeira?.get(day)
        };
    }

    private parseDate(inputDate: string): string {
        return moment(inputDate, 'DD-MM-YYYY').format('YYYY_MM_DD');
    }
}