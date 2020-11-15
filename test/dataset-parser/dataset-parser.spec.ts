import { DatasetParser } from "../../src/dataset-parser/dataset-parser";
import { expect } from "chai";
import { CaseType } from "../../src/dataset-parser/case-types/case-type";
import { Active, Confirmed, Dead, Recovered, Suspect } from "../../src/dataset-parser/case-types/case-incidence";

class DatasetParserDouble extends DatasetParser {

    public getCases(incidenType: string) {
        return super.getCases(incidenType);
    }
}

describe('Dataset Parser - [Active] should return:', () => {

    it('Correct number of [Active.ALL] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const active = datasetParser.getCases(Active.ALL);

        expect(active.get('2020_04_21')).to.equal(19700);
        expect(active.get('2020_05_21')).to.equal(22183);
        expect(active.get('2020_06_16')).to.equal(12602);
    });
});

describe('Dataset Parser - [Suspect] should return:', () => {

    it('Correct number of [Suspect.ALL] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const suspect = datasetParser.getCases(Suspect.ALL);

        expect(suspect.get('2020_04_26')).to.equal(236229);
        expect(suspect.get('2020_09_23')).to.equal(null);
        expect(suspect.get('2020_03_26')).to.equal(22257);
    });
});

describe('Dataset Parser - [Confirmed] Should return:', () => {

    it('Correct number of [Confirmed.ALL] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const confirmed = datasetParser.getCases(Confirmed.ALL);

        expect(confirmed.get('2020_04_26')).to.equal(23683);
        expect(confirmed.get('2020_09_23')).to.equal(70465);
        expect(confirmed.get('2020_03_26')).to.equal(3544);
    });

    it('Correct number of [Confirmed.NORTH] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const confirmed = datasetParser.getCases(Confirmed.NORTH);

        expect(confirmed.get('2020_09_25')).to.equal(25869);
        expect(confirmed.get('2020_08_25')).to.equal(20021);
        expect(confirmed.get('2020_02_26')).to.equal(0);
    });

    it('Correct number of [Confirmed.CENTER] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const confirmed = datasetParser.getCases(Confirmed.CENTER);

        expect(confirmed.get('2020_09_25')).to.equal(5885);
        expect(confirmed.get('2020_08_25')).to.equal(4677);
        expect(confirmed.get('2020_02_26')).to.equal(0);
    });

    it('Correct number of [Confirmed.LVT] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const confirmed = datasetParser.getCases(Confirmed.LVT);

        expect(confirmed.get('2020_07_11')).to.equal(22385);
        expect(confirmed.get('2020_07_01')).to.equal(19452);
        expect(confirmed.get('2020_11_01')).to.equal(60219);
    });

    it('Correct number of [Confirmed.ALENTEJO] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const confirmed = datasetParser.getCases(Confirmed.ALENTEJO);

        expect(confirmed.get('2020_02_11')).to.equal(undefined);
        expect(confirmed.get('2020_03_01')).to.equal(0);
        expect(confirmed.get('2020_04_01')).to.equal(54);
    });

    it('Correct number of [Confirmed.ALGARVE] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const confirmed = datasetParser.getCases(Confirmed.ALGARVE);

        expect(confirmed.get('2020_02_20')).to.equal(undefined);
        expect(confirmed.get('2020_05_15')).to.equal(355);
        expect(confirmed.get('2020_05_20')).to.equal(356);
    });

    it('Correct number of [Confirmed.ACORES] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const confirmed = datasetParser.getCases(Confirmed.ACORES);

        expect(confirmed.get('2020_10_10')).to.equal(296);
        expect(confirmed.get('2020_10_15')).to.equal(306);
        expect(confirmed.get('2020_10_20')).to.equal(328);
    });

    it('Correct number of [Confirmed.MADEIRA] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const confirmed = datasetParser.getCases(Confirmed.MADEIRA);

        expect(confirmed.get('2020_10_10')).to.equal(279);
        expect(confirmed.get('2020_10_15')).to.equal(305);
        expect(confirmed.get('2020_10_20')).to.equal(345);
    });
});

describe('Dataset Parser - [Dead] Should return:', () => {

    it('Correct number of [Dead.ALL] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const dead = datasetParser.getCases(Dead.ALL);

        expect(dead.get('2020_04_26')).to.equal(903);
        expect(dead.get('2020_04_27')).to.equal(928);
        expect(dead.get('2020_04_29')).to.equal(973);
    });

    it('Correct number of [Dead.NORTH] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const dead = datasetParser.getCases(Dead.NORTH);

        expect(dead.get('2020_09_25')).to.equal(878);
        expect(dead.get('2020_08_25')).to.equal(846);
        expect(dead.get('2020_02_26')).to.equal(0);
    });

    it('Correct number of [Dead.CENTER] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const dead = datasetParser.getCases(Dead.CENTER);

        expect(dead.get('2020_09_25')).to.equal(259);
        expect(dead.get('2020_08_25')).to.equal(253);
        expect(dead.get('2020_02_26')).to.equal(0);
    });

    it('Correct number of [Dead.LVT] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const dead = datasetParser.getCases(Dead.LVT);

        expect(dead.get('2020_07_11')).to.equal(535);
        expect(dead.get('2020_07_01')).to.equal(475);
        expect(dead.get('2020_11_01')).to.equal(1004);
    });

    it('Correct number of [Dead.ALENTEJO] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const dead = datasetParser.getCases(Dead.ALENTEJO);

        expect(dead.get('2020_02_11')).to.equal(undefined);
        expect(dead.get('2020_03_01')).to.equal(0);
        expect(dead.get('2020_04_01')).to.equal(0);
    });

    it('Correct number of [Dead.ALGARVE] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const dead = datasetParser.getCases(Dead.ALGARVE);

        expect(dead.get('2020_02_20')).to.equal(undefined);
        expect(dead.get('2020_05_15')).to.equal(14);
        expect(dead.get('2020_05_20')).to.equal(15);
    });

    it('Correct number of [Dead.ACORES] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const dead = datasetParser.getCases(Dead.ACORES);

        expect(dead.get('2020_10_10')).to.equal(15);
        expect(dead.get('2020_10_15')).to.equal(15);
        expect(dead.get('2020_10_20')).to.equal(15);
    });

    it('Correct number of [Dead.MADEIRA] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const dead = datasetParser.getCases(Dead.MADEIRA);

        expect(dead.get('2020_10_10')).to.equal(0);
        expect(dead.get('2020_10_15')).to.equal(0);
        expect(dead.get('2020_10_20')).to.equal(0);
    });
});

describe('Dataset Parser - [Recovered] Should return:', () => {

    it('Correct number of [Recovered.ALL] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const recovered = datasetParser.getCases(Recovered.ALL);

        expect(recovered.get('2020_04_26')).to.equal(1329);
        expect(recovered.get('2020_04_27')).to.equal(1357);
        expect(recovered.get('2020_04_28')).to.equal(1389);
    });

    it('Correct number of [Recovered.NORTH] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const recovered = datasetParser.getCases(Recovered.NORTH);

        expect(recovered.get('2020_09_25')).to.equal(null);
        expect(recovered.get('2020_08_25')).to.equal(null);
        expect(recovered.get('2020_02_26')).to.equal(null);
    });

    it('Correct number of [Recovered.CENTER] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const recovered = datasetParser.getCases(Recovered.CENTER);

        expect(recovered.get('2020_09_25')).to.equal(null);
        expect(recovered.get('2020_08_25')).to.equal(null);
        expect(recovered.get('2020_02_26')).to.equal(null);
    });

    it('Correct number of [Recovered.LVT] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const recovered = datasetParser.getCases(Recovered.LVT);

        expect(recovered.get('2020_07_11')).to.equal(null);
        expect(recovered.get('2020_07_01')).to.equal(null);
        expect(recovered.get('2020_11_01')).to.equal(null);
    });

    it('Correct number of [Recovered.ALENTEJO] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const recovered = datasetParser.getCases(Recovered.ALENTEJO);

        expect(recovered.get('2020_02_11')).to.equal(undefined);
        expect(recovered.get('2020_03_01')).to.equal(null);
        expect(recovered.get('2020_04_01')).to.equal(0);
    });

    it('Correct number of [Recovered.ALGARVE] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const recovered = datasetParser.getCases(Recovered.ALGARVE);

        expect(recovered.get('2020_02_20')).to.equal(undefined);
        expect(recovered.get('2020_05_15')).to.equal(null);
        expect(recovered.get('2020_05_20')).to.equal(null);
    });

    it('Correct number of [Recovered.ACORES] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const recovered = datasetParser.getCases(Recovered.ACORES);

        expect(recovered.get('2020_10_10')).to.equal(null);
        expect(recovered.get('2020_10_15')).to.equal(null);
        expect(recovered.get('2020_10_20')).to.equal(null);
    });

    it('Correct number of [Recovered.MADEIRA] cases', () => {
        const datasetParser = new DatasetParserDouble();
        const recovered = datasetParser.getCases(Recovered.MADEIRA);

        expect(recovered.get('2020_10_10')).to.equal(null);
        expect(recovered.get('2020_10_15')).to.equal(null);
        expect(recovered.get('2020_10_20')).to.equal(null);
    });
});

describe('Dataset Parser - Transform [Active] to Database document', () => {
    const datasetParser = new DatasetParserDouble();
    const activeType: CaseType = { all: Active.ALL };

    const mappedActive = datasetParser.transform(activeType);

    it('Transformed [Active.ALL] should match raw [Active.ALL]', () => {
        expect(mappedActive.get('2020_06_16')?.all).to.equal(datasetParser.getCases(Active.ALL).get('2020_06_16'));
        expect(mappedActive.get('2020_07_16')?.all).to.equal(datasetParser.getCases(Active.ALL).get('2020_07_16'));
        expect(mappedActive.get('2020_08_16')?.all).to.equal(datasetParser.getCases(Active.ALL).get('2020_08_16'));
    });
});

describe('Dataset Parser - Transform [Suspect] to Database document', () => {
    const datasetParser = new DatasetParserDouble();
    const suspectType: CaseType = { all: Suspect.ALL };

    const mappedSuspect = datasetParser.transform(suspectType);

    it('Transformed [Suspect.ALL] should match raw [Suspect.ALL]', () => {
        expect(mappedSuspect.get('2020_04_10')?.all).to.equal(datasetParser.getCases(Suspect.ALL).get('2020_04_10'));
        expect(mappedSuspect.get('2020_08_20')?.all).to.equal(datasetParser.getCases(Suspect.ALL).get('2020_08_20'));
        expect(mappedSuspect.get('2020_10_23')?.north).to.equal(undefined);
    });
});

describe('Dataset Parser - Transform [Confirmed] to Database document', () => {
    const datasetParser = new DatasetParserDouble();
    const confirmedType: CaseType = { all: Confirmed.ALL, north: Confirmed.NORTH, center: Confirmed.CENTER, lvt: Confirmed.LVT,
                                 alentejo: Confirmed.ALENTEJO, algarve: Confirmed.ALGARVE, acores: Confirmed.ACORES, madeira: Confirmed.MADEIRA };

    const mappedConfirmed = datasetParser.transform(confirmedType);

    it('Transformed [Confirmed.ALL] should match raw [Confirmed.ALL]', () => {
        expect(mappedConfirmed.get('2020_04_10')?.all).to.equal(datasetParser.getCases(Confirmed.ALL).get('2020_04_10'));
        expect(mappedConfirmed.get('2020_08_20')?.all).to.equal(datasetParser.getCases(Confirmed.ALL).get('2020_08_20'));
        expect(mappedConfirmed.get('2020_10_23')?.all).to.equal(datasetParser.getCases(Confirmed.ALL).get('2020_10_23'));
    });

    it('Transformed [Confirmed.NORTH] should match raw [Confirmed.NORTH]', () => {
        expect(mappedConfirmed.get('2020_06_10')?.north).to.equal(datasetParser.getCases(Confirmed.NORTH).get('2020_06_10'));
        expect(mappedConfirmed.get('2020_07_20')?.north).to.equal(datasetParser.getCases(Confirmed.NORTH).get('2020_07_20'));
        expect(mappedConfirmed.get('2020_08_23')?.north).to.equal(datasetParser.getCases(Confirmed.NORTH).get('2020_08_23'));
    });

    it('Transformed [Confirmed.CENTER] should match raw [Confirmed.CENTER]', () => {
        expect(mappedConfirmed.get('2020_06_10')?.center).to.equal(datasetParser.getCases(Confirmed.CENTER).get('2020_06_10'));
        expect(mappedConfirmed.get('2020_07_20')?.center).to.equal(datasetParser.getCases(Confirmed.CENTER).get('2020_07_20'));
        expect(mappedConfirmed.get('2020_08_23')?.center).to.equal(datasetParser.getCases(Confirmed.CENTER).get('2020_08_23'));
    });

    it('Transformed [Confirmed.LVT] should match raw [Confirmed.LVT]', () => {
        expect(mappedConfirmed.get('2020_03_10')?.lvt).to.equal(datasetParser.getCases(Confirmed.LVT).get('2020_03_10'));
        expect(mappedConfirmed.get('2020_03_20')?.lvt).to.equal(datasetParser.getCases(Confirmed.LVT).get('2020_03_20'));
        expect(mappedConfirmed.get('2020_03_30')?.lvt).to.equal(datasetParser.getCases(Confirmed.LVT).get('2020_03_30'));
    });

    it('Transformed [Confirmed.ALENTEJO] should match raw [Confirmed.ALENTEJO]', () => {
        expect(mappedConfirmed.get('2020_03_10')?.alentejo).to.equal(datasetParser.getCases(Confirmed.ALENTEJO).get('2020_03_10'));
        expect(mappedConfirmed.get('2020_04_20')?.alentejo).to.equal(datasetParser.getCases(Confirmed.ALENTEJO).get('2020_04_20'));
        expect(mappedConfirmed.get('2020_05_30')?.alentejo).to.equal(datasetParser.getCases(Confirmed.ALENTEJO).get('2020_05_30'));
    });

    it('Transformed [Confirmed.ALGARVE] should match raw [Confirmed.ALGARVE]', () => {
        expect(mappedConfirmed.get('2020_03_10')?.algarve).to.equal(datasetParser.getCases(Confirmed.ALGARVE).get('2020_03_10'));
        expect(mappedConfirmed.get('2020_04_20')?.algarve).to.equal(datasetParser.getCases(Confirmed.ALGARVE).get('2020_04_20'));
        expect(mappedConfirmed.get('2020_05_30')?.algarve).to.equal(datasetParser.getCases(Confirmed.ALGARVE).get('2020_05_30'));
    });

    it('Transformed [Confirmed.ACORES] should match raw [Confirmed.ACORES]', () => {
        expect(mappedConfirmed.get('2020_03_10')?.acores).to.equal(datasetParser.getCases(Confirmed.ACORES).get('2020_03_10'));
        expect(mappedConfirmed.get('2020_03_11')?.acores).to.equal(datasetParser.getCases(Confirmed.ACORES).get('2020_03_11'));
        expect(mappedConfirmed.get('2020_03_12')?.acores).to.equal(datasetParser.getCases(Confirmed.ACORES).get('2020_03_12'));
    });

    it('Transformed [Confirmed.MADEIRA] should match raw [Confirmed.MADEIRA]', () => {
        expect(mappedConfirmed.get('2020_01_10')?.madeira).to.equal(datasetParser.getCases(Confirmed.MADEIRA).get('2020_01_10'));
        expect(mappedConfirmed.get('2020_07_11')?.madeira).to.equal(datasetParser.getCases(Confirmed.MADEIRA).get('2020_07_11'));
        expect(mappedConfirmed.get('2020_08_12')?.madeira).to.equal(datasetParser.getCases(Confirmed.MADEIRA).get('2020_08_12'));
    });
});

describe('Dataset Parser - Transform [Dead] to Database document', () => {
    const datasetParser = new DatasetParserDouble();
    const deadType: CaseType = { all: Dead.ALL, north: Dead.NORTH, center: Dead.CENTER, lvt: Dead.LVT,
                                 alentejo: Dead.ALENTEJO, algarve: Dead.ALGARVE, acores: Dead.ACORES, madeira: Dead.MADEIRA };

    const mappedDead = datasetParser.transform(deadType);

    it('Transformed [Dead.ALL] should match raw [Dead.ALL]', () => {
        expect(mappedDead.get('2020_04_10')?.all).to.equal(datasetParser.getCases(Dead.ALL).get('2020_04_10'));
        expect(mappedDead.get('2020_08_20')?.all).to.equal(datasetParser.getCases(Dead.ALL).get('2020_08_20'));
        expect(mappedDead.get('2020_10_23')?.all).to.equal(datasetParser.getCases(Dead.ALL).get('2020_10_23'));
    });

    it('Transformed [Dead.NORTH] should match raw [Dead.NORTH]', () => {
        expect(mappedDead.get('2020_06_10')?.north).to.equal(datasetParser.getCases(Dead.NORTH).get('2020_06_10'));
        expect(mappedDead.get('2020_07_20')?.north).to.equal(datasetParser.getCases(Dead.NORTH).get('2020_07_20'));
        expect(mappedDead.get('2020_08_23')?.north).to.equal(datasetParser.getCases(Dead.NORTH).get('2020_08_23'));
    });

    it('Transformed [Dead.CENTER] should match raw [Dead.CENTER]', () => {
        expect(mappedDead.get('2020_06_10')?.center).to.equal(datasetParser.getCases(Dead.CENTER).get('2020_06_10'));
        expect(mappedDead.get('2020_07_20')?.center).to.equal(datasetParser.getCases(Dead.CENTER).get('2020_07_20'));
        expect(mappedDead.get('2020_08_23')?.center).to.equal(datasetParser.getCases(Dead.CENTER).get('2020_08_23'));
    });

    it('Transformed [Dead.LVT] should match raw [Dead.LVT]', () => {
        expect(mappedDead.get('2020_03_10')?.lvt).to.equal(datasetParser.getCases(Dead.LVT).get('2020_03_10'));
        expect(mappedDead.get('2020_03_20')?.lvt).to.equal(datasetParser.getCases(Dead.LVT).get('2020_03_20'));
        expect(mappedDead.get('2020_03_30')?.lvt).to.equal(datasetParser.getCases(Dead.LVT).get('2020_03_30'));
    });

    it('Transformed [Dead.ALENTEJO] should match raw [Dead.ALENTEJO]', () => {
        expect(mappedDead.get('2020_03_10')?.alentejo).to.equal(datasetParser.getCases(Dead.ALENTEJO).get('2020_03_10'));
        expect(mappedDead.get('2020_04_20')?.alentejo).to.equal(datasetParser.getCases(Dead.ALENTEJO).get('2020_04_20'));
        expect(mappedDead.get('2020_05_30')?.alentejo).to.equal(datasetParser.getCases(Dead.ALENTEJO).get('2020_05_30'));
    });

    it('Transformed [Dead.ALGARVE] should match raw [Dead.ALGARVE]', () => {
        expect(mappedDead.get('2020_03_10')?.algarve).to.equal(datasetParser.getCases(Dead.ALGARVE).get('2020_03_10'));
        expect(mappedDead.get('2020_04_20')?.algarve).to.equal(datasetParser.getCases(Dead.ALGARVE).get('2020_04_20'));
        expect(mappedDead.get('2020_05_30')?.algarve).to.equal(datasetParser.getCases(Dead.ALGARVE).get('2020_05_30'));
    });

    it('Transformed [Dead.ACORES] should match raw [Dead.ACORES]', () => {
        expect(mappedDead.get('2020_03_10')?.acores).to.equal(datasetParser.getCases(Dead.ACORES).get('2020_03_10'));
        expect(mappedDead.get('2020_03_11')?.acores).to.equal(datasetParser.getCases(Dead.ACORES).get('2020_03_11'));
        expect(mappedDead.get('2020_03_12')?.acores).to.equal(datasetParser.getCases(Dead.ACORES).get('2020_03_12'));
    });

    it('Transformed [Dead.MADEIRA] should match raw [Dead.MADEIRA]', () => {
        expect(mappedDead.get('2020_01_10')?.madeira).to.equal(datasetParser.getCases(Dead.MADEIRA).get('2020_01_10'));
        expect(mappedDead.get('2020_07_11')?.madeira).to.equal(datasetParser.getCases(Dead.MADEIRA).get('2020_07_11'));
        expect(mappedDead.get('2020_08_12')?.madeira).to.equal(datasetParser.getCases(Dead.MADEIRA).get('2020_08_12'));
    });
});

describe('Dataset Parser - Transform [Recovered] to Database document', () => {
    const datasetParser = new DatasetParserDouble();
    const recoveredType: CaseType = { all: Recovered.ALL, north: Recovered.NORTH, center: Recovered.CENTER, lvt: Recovered.LVT,
                                      alentejo: Recovered.ALENTEJO, algarve: Recovered.ALGARVE, acores: Recovered.ACORES, madeira: Recovered.MADEIRA };

    const mappedRecovered = datasetParser.transform(recoveredType);

    it('Transformed [Recovered.ALL] should match raw [Recovered.ALL]', () => {
        expect(mappedRecovered.get('2020_04_10')?.all).to.equal(datasetParser.getCases(Recovered.ALL).get('2020_04_10'));
        expect(mappedRecovered.get('2020_08_20')?.all).to.equal(datasetParser.getCases(Recovered.ALL).get('2020_08_20'));
        expect(mappedRecovered.get('2020_10_23')?.all).to.equal(datasetParser.getCases(Recovered.ALL).get('2020_10_23'));
    });

    it('Transformed [Recovered.NORTH] should match raw [Recovered.NORTH]', () => {
        expect(mappedRecovered.get('2020_06_10')?.north).to.equal(datasetParser.getCases(Recovered.NORTH).get('2020_06_10'));
        expect(mappedRecovered.get('2020_07_20')?.north).to.equal(datasetParser.getCases(Recovered.NORTH).get('2020_07_20'));
        expect(mappedRecovered.get('2020_08_23')?.north).to.equal(datasetParser.getCases(Recovered.NORTH).get('2020_08_23'));
    });

    it('Transformed [Recovered.CENTER] should match raw [Recovered.CENTER]', () => {
        expect(mappedRecovered.get('2020_06_10')?.center).to.equal(datasetParser.getCases(Recovered.CENTER).get('2020_06_10'));
        expect(mappedRecovered.get('2020_07_20')?.center).to.equal(datasetParser.getCases(Recovered.CENTER).get('2020_07_20'));
        expect(mappedRecovered.get('2020_08_23')?.center).to.equal(datasetParser.getCases(Recovered.CENTER).get('2020_08_23'));
    });

    it('Transformed [Recovered.LVT] should match raw [Recovered.LVT]', () => {
        expect(mappedRecovered.get('2020_03_10')?.lvt).to.equal(datasetParser.getCases(Recovered.LVT).get('2020_03_10'));
        expect(mappedRecovered.get('2020_03_20')?.lvt).to.equal(datasetParser.getCases(Recovered.LVT).get('2020_03_20'));
        expect(mappedRecovered.get('2020_03_30')?.lvt).to.equal(datasetParser.getCases(Recovered.LVT).get('2020_03_30'));
    });

    it('Transformed [Recovered.ALENTEJO] should match raw [Recovered.ALENTEJO]', () => {
        expect(mappedRecovered.get('2020_03_10')?.alentejo).to.equal(datasetParser.getCases(Recovered.ALENTEJO).get('2020_03_10'));
        expect(mappedRecovered.get('2020_04_20')?.alentejo).to.equal(datasetParser.getCases(Recovered.ALENTEJO).get('2020_04_20'));
        expect(mappedRecovered.get('2020_05_30')?.alentejo).to.equal(datasetParser.getCases(Recovered.ALENTEJO).get('2020_05_30'));
    });

    it('Transformed [Recovered.ALGARVE] should match raw [Recovered.ALGARVE]', () => {
        expect(mappedRecovered.get('2020_03_10')?.algarve).to.equal(datasetParser.getCases(Recovered.ALGARVE).get('2020_03_10'));
        expect(mappedRecovered.get('2020_04_20')?.algarve).to.equal(datasetParser.getCases(Recovered.ALGARVE).get('2020_04_20'));
        expect(mappedRecovered.get('2020_05_30')?.algarve).to.equal(datasetParser.getCases(Recovered.ALGARVE).get('2020_05_30'));
    });

    it('Transformed [Recovered.ACORES] should match raw [Recovered.ACORES]', () => {
        expect(mappedRecovered.get('2020_03_10')?.acores).to.equal(datasetParser.getCases(Recovered.ACORES).get('2020_03_10'));
        expect(mappedRecovered.get('2020_03_11')?.acores).to.equal(datasetParser.getCases(Recovered.ACORES).get('2020_03_11'));
        expect(mappedRecovered.get('2020_03_12')?.acores).to.equal(datasetParser.getCases(Recovered.ACORES).get('2020_03_12'));
    });

    it('Transformed [Recovered.MADEIRA] should match raw [Recovered.MADEIRA]', () => {
        expect(mappedRecovered.get('2020_01_10')?.madeira).to.equal(datasetParser.getCases(Recovered.MADEIRA).get('2020_01_10'));
        expect(mappedRecovered.get('2020_07_11')?.madeira).to.equal(datasetParser.getCases(Recovered.MADEIRA).get('2020_07_11'));
        expect(mappedRecovered.get('2020_08_12')?.madeira).to.equal(datasetParser.getCases(Recovered.MADEIRA).get('2020_08_12'));
    });
});