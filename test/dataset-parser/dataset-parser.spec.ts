import { DatasetParser } from "../../src/dataset-parser/dataset-parser";
import { expect } from "chai";
import { CaseType } from "../../src/dataset-parser/case-types/case.type";
import { Active, Confirmed, Dead, Recovered, Suspect } from "../../src/dataset-parser/case-types/case-incidence.type";

describe('Dataset Parser - [Active] should return:', async () => {

    it('Correct number of [Active.ALL] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const active = datasetParser.getCases(Active.ALL);

        expect(active.get(20200421)).to.equal(19700);
        expect(active.get(20200521)).to.equal(22183);
        expect(active.get(20200616)).to.equal(12602);
    });
});

describe('Dataset Parser - [Suspect] should return:', () => {

    it('Correct number of [Suspect.ALL] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const suspect = datasetParser.getCases(Suspect.ALL);

        expect(suspect.get(20200426)).to.equal(236229);
        expect(suspect.get(20200923)).to.equal(null);
        expect(suspect.get(20200326)).to.equal(22257);
    });
});

describe('Dataset Parser - [Confirmed] Should return:', () => {

    it('Correct number of [Confirmed.ALL] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const confirmed = datasetParser.getCases(Confirmed.ALL);

        expect(confirmed.get(20200426)).to.equal(23683);
        expect(confirmed.get(20200923)).to.equal(70465);
        expect(confirmed.get(20200326)).to.equal(3544);
    });

    it('Correct number of [Confirmed.NORTH] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const confirmed = datasetParser.getCases(Confirmed.NORTH);

        expect(confirmed.get(20200925)).to.equal(25869);
        expect(confirmed.get(20200825)).to.equal(20021);
        expect(confirmed.get(20200226)).to.equal(0);
    });

    it('Correct number of [Confirmed.CENTER] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const confirmed = datasetParser.getCases(Confirmed.CENTER);

        expect(confirmed.get(20200925)).to.equal(5885);
        expect(confirmed.get(20200825)).to.equal(4677);
        expect(confirmed.get(20200226)).to.equal(0);
    });

    it('Correct number of [Confirmed.LVT] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const confirmed = datasetParser.getCases(Confirmed.LVT);

        expect(confirmed.get(20200711)).to.equal(22385);
        expect(confirmed.get(20200701)).to.equal(19452);
        expect(confirmed.get(20201101)).to.equal(60219);
    });

    it('Correct number of [Confirmed.ALENTEJO] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const confirmed = datasetParser.getCases(Confirmed.ALENTEJO);

        expect(confirmed.get(20200211)).to.equal(undefined);
        expect(confirmed.get(20200301)).to.equal(0);
        expect(confirmed.get(20200401)).to.equal(54);
    });

    it('Correct number of [Confirmed.ALGARVE] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const confirmed = datasetParser.getCases(Confirmed.ALGARVE);

        expect(confirmed.get(20200220)).to.equal(undefined);
        expect(confirmed.get(20200515)).to.equal(355);
        expect(confirmed.get(20200520)).to.equal(356);
    });

    it('Correct number of [Confirmed.ACORES] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const confirmed = datasetParser.getCases(Confirmed.ACORES);

        expect(confirmed.get(20201010)).to.equal(296);
        expect(confirmed.get(20201015)).to.equal(306);
        expect(confirmed.get(20201020)).to.equal(328);
    });

    it('Correct number of [Confirmed.MADEIRA] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const confirmed = datasetParser.getCases(Confirmed.MADEIRA);

        expect(confirmed.get(20201010)).to.equal(279);
        expect(confirmed.get(20201015)).to.equal(305);
        expect(confirmed.get(20201020)).to.equal(345);
    });
});

describe('Dataset Parser - [Dead] Should return:', () => {

    it('Correct number of [Dead.ALL] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const dead = datasetParser.getCases(Dead.ALL);

        expect(dead.get(20200426)).to.equal(903);
        expect(dead.get(20200427)).to.equal(928);
        expect(dead.get(20200429)).to.equal(973);
    });

    it('Correct number of [Dead.NORTH] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const dead = datasetParser.getCases(Dead.NORTH);

        expect(dead.get(20200925)).to.equal(878);
        expect(dead.get(20200825)).to.equal(846);
        expect(dead.get(20200226)).to.equal(0);
    });

    it('Correct number of [Dead.CENTER] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const dead = datasetParser.getCases(Dead.CENTER);

        expect(dead.get(20200925)).to.equal(259);
        expect(dead.get(20200825)).to.equal(253);
        expect(dead.get(20200226)).to.equal(0);
    });

    it('Correct number of [Dead.LVT] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const dead = datasetParser.getCases(Dead.LVT);

        expect(dead.get(20200711)).to.equal(535);
        expect(dead.get(20200701)).to.equal(475);
        expect(dead.get(20201101)).to.equal(1004);
    });

    it('Correct number of [Dead.ALENTEJO] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const dead = datasetParser.getCases(Dead.ALENTEJO);

        expect(dead.get(20200211)).to.equal(undefined);
        expect(dead.get(20200301)).to.equal(0);
        expect(dead.get(20200401)).to.equal(0);
    });

    it('Correct number of [Dead.ALGARVE] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const dead = datasetParser.getCases(Dead.ALGARVE);

        expect(dead.get(20200220)).to.equal(undefined);
        expect(dead.get(20200515)).to.equal(14);
        expect(dead.get(20200520)).to.equal(15);
    });

    it('Correct number of [Dead.ACORES] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const dead = datasetParser.getCases(Dead.ACORES);

        expect(dead.get(20201010)).to.equal(15);
        expect(dead.get(20201015)).to.equal(15);
        expect(dead.get(20201020)).to.equal(15);
    });

    it('Correct number of [Dead.MADEIRA] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const dead = datasetParser.getCases(Dead.MADEIRA);

        expect(dead.get(20201010)).to.equal(0);
        expect(dead.get(20201015)).to.equal(0);
        expect(dead.get(20201020)).to.equal(0);
    });
});

describe('Dataset Parser - [Recovered] Should return:', () => {

    it('Correct number of [Recovered.ALL] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const recovered = datasetParser.getCases(Recovered.ALL);

        expect(recovered.get(20200426)).to.equal(1329);
        expect(recovered.get(20200427)).to.equal(1357);
        expect(recovered.get(20200428)).to.equal(1389);
    });

    it('Correct number of [Recovered.NORTH] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const recovered = datasetParser.getCases(Recovered.NORTH);

        expect(recovered.get(20200925)).to.equal(null);
        expect(recovered.get(20200825)).to.equal(null);
        expect(recovered.get(20200226)).to.equal(null);
    });

    it('Correct number of [Recovered.CENTER] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const recovered = datasetParser.getCases(Recovered.CENTER);

        expect(recovered.get(20200925)).to.equal(null);
        expect(recovered.get(20200825)).to.equal(null);
        expect(recovered.get(20200226)).to.equal(null);
    });

    it('Correct number of [Recovered.LVT] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const recovered = datasetParser.getCases(Recovered.LVT);

        expect(recovered.get(20200711)).to.equal(null);
        expect(recovered.get(20200701)).to.equal(null);
        expect(recovered.get(20201101)).to.equal(null);
    });

    it('Correct number of [Recovered.ALENTEJO] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const recovered = datasetParser.getCases(Recovered.ALENTEJO);

        expect(recovered.get(20200211)).to.equal(undefined);
        expect(recovered.get(20200301)).to.equal(null);
        expect(recovered.get(20200401)).to.equal(0);
    });

    it('Correct number of [Recovered.ALGARVE] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const recovered = datasetParser.getCases(Recovered.ALGARVE);

        expect(recovered.get(20200220)).to.equal(undefined);
        expect(recovered.get(20200515)).to.equal(null);
        expect(recovered.get(20200520)).to.equal(null);
    });

    it('Correct number of [Recovered.ACORES] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const recovered = datasetParser.getCases(Recovered.ACORES);

        expect(recovered.get(20201010)).to.equal(null);
        expect(recovered.get(20201015)).to.equal(null);
        expect(recovered.get(20201020)).to.equal(null);
    });

    it('Correct number of [Recovered.MADEIRA] cases', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const recovered = datasetParser.getCases(Recovered.MADEIRA);

        expect(recovered.get(20201010)).to.equal(null);
        expect(recovered.get(20201015)).to.equal(null);
        expect(recovered.get(20201020)).to.equal(null);
    });
});

describe('Dataset Parser - Transform [Active] to Database document', () => {

    it('Transformed [Active.ALL] should match raw [Active.ALL]', async () => {
        const activeType: CaseType = { all: Active.ALL };
        const datasetParser = await DatasetParser.getInstance();
        const mappedActive = datasetParser.transform(activeType);
        expect(mappedActive.get(20200616)?.all).to.equal(datasetParser.getCases(Active.ALL).get(20200616));
        expect(mappedActive.get(20200716)?.all).to.equal(datasetParser.getCases(Active.ALL).get(20200716));
        expect(mappedActive.get(20200816)?.all).to.equal(datasetParser.getCases(Active.ALL).get(20200816));
    });
});

describe('Dataset Parser - Transform [Suspect] to Database document', () => {

    it('Transformed [Suspect.ALL] should match raw [Suspect.ALL]', async () => {
        const suspectType: CaseType = { all: Suspect.ALL };
        const datasetParser = await DatasetParser.getInstance();
        const mappedSuspect = datasetParser.transform(suspectType);
        expect(mappedSuspect.get(20200410)?.all).to.equal(datasetParser.getCases(Suspect.ALL).get(20200410));
        expect(mappedSuspect.get(20200820)?.all).to.equal(datasetParser.getCases(Suspect.ALL).get(20200820));
        expect(mappedSuspect.get(20201023)?.north).to.equal(undefined);
    });
});

describe('Dataset Parser - Transform [Confirmed] to Database document', () => {
    const confirmedType: CaseType = { all: Confirmed.ALL, north: Confirmed.NORTH, center: Confirmed.CENTER, lvt: Confirmed.LVT,
          alentejo: Confirmed.ALENTEJO, algarve: Confirmed.ALGARVE, acores: Confirmed.ACORES, madeira: Confirmed.MADEIRA };

    it('Transformed [Confirmed.ALL] should match raw [Confirmed.ALL]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedConfirmed = datasetParser.transform(confirmedType);

        expect(mappedConfirmed.get(20200410)?.all).to.equal(datasetParser.getCases(Confirmed.ALL).get(20200410));
        expect(mappedConfirmed.get(20200820)?.all).to.equal(datasetParser.getCases(Confirmed.ALL).get(20200820));
        expect(mappedConfirmed.get(20201023)?.all).to.equal(datasetParser.getCases(Confirmed.ALL).get(20201023));
    });

    it('Transformed [Confirmed.NORTH] should match raw [Confirmed.NORTH]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedConfirmed = datasetParser.transform(confirmedType);

        expect(mappedConfirmed.get(20200610)?.north).to.equal(datasetParser.getCases(Confirmed.NORTH).get(20200610));
        expect(mappedConfirmed.get(20200720)?.north).to.equal(datasetParser.getCases(Confirmed.NORTH).get(20200720));
        expect(mappedConfirmed.get(20200823)?.north).to.equal(datasetParser.getCases(Confirmed.NORTH).get(20200823));
    });

    it('Transformed [Confirmed.CENTER] should match raw [Confirmed.CENTER]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedConfirmed = datasetParser.transform(confirmedType);

        expect(mappedConfirmed.get(20200610)?.center).to.equal(datasetParser.getCases(Confirmed.CENTER).get(20200610));
        expect(mappedConfirmed.get(20200720)?.center).to.equal(datasetParser.getCases(Confirmed.CENTER).get(20200720));
        expect(mappedConfirmed.get(20200823)?.center).to.equal(datasetParser.getCases(Confirmed.CENTER).get(20200823));
    });

    it('Transformed [Confirmed.LVT] should match raw [Confirmed.LVT]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedConfirmed = datasetParser.transform(confirmedType);

        expect(mappedConfirmed.get(20200310)?.lvt).to.equal(datasetParser.getCases(Confirmed.LVT).get(20200310));
        expect(mappedConfirmed.get(20200320)?.lvt).to.equal(datasetParser.getCases(Confirmed.LVT).get(20200320));
        expect(mappedConfirmed.get(20200330)?.lvt).to.equal(datasetParser.getCases(Confirmed.LVT).get(20200330));
    });

    it('Transformed [Confirmed.ALENTEJO] should match raw [Confirmed.ALENTEJO]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedConfirmed = datasetParser.transform(confirmedType);

        expect(mappedConfirmed.get(20200310)?.alentejo).to.equal(datasetParser.getCases(Confirmed.ALENTEJO).get(20200310));
        expect(mappedConfirmed.get(20200420)?.alentejo).to.equal(datasetParser.getCases(Confirmed.ALENTEJO).get(20200420));
        expect(mappedConfirmed.get(20200530)?.alentejo).to.equal(datasetParser.getCases(Confirmed.ALENTEJO).get(20200530));
    });

    it('Transformed [Confirmed.ALGARVE] should match raw [Confirmed.ALGARVE]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedConfirmed = datasetParser.transform(confirmedType);

        expect(mappedConfirmed.get(20200310)?.algarve).to.equal(datasetParser.getCases(Confirmed.ALGARVE).get(20200310));
        expect(mappedConfirmed.get(20200420)?.algarve).to.equal(datasetParser.getCases(Confirmed.ALGARVE).get(20200420));
        expect(mappedConfirmed.get(20200530)?.algarve).to.equal(datasetParser.getCases(Confirmed.ALGARVE).get(20200530));
    });

    it('Transformed [Confirmed.ACORES] should match raw [Confirmed.ACORES]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedConfirmed = datasetParser.transform(confirmedType);

        expect(mappedConfirmed.get(20200310)?.acores).to.equal(datasetParser.getCases(Confirmed.ACORES).get(20200310));
        expect(mappedConfirmed.get(20200311)?.acores).to.equal(datasetParser.getCases(Confirmed.ACORES).get(20200311));
        expect(mappedConfirmed.get(20200312)?.acores).to.equal(datasetParser.getCases(Confirmed.ACORES).get(20200312));
    });

    it('Transformed [Confirmed.MADEIRA] should match raw [Confirmed.MADEIRA]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedConfirmed = datasetParser.transform(confirmedType);

        expect(mappedConfirmed.get(20200110)?.madeira).to.equal(datasetParser.getCases(Confirmed.MADEIRA).get(20200110));
        expect(mappedConfirmed.get(20200711)?.madeira).to.equal(datasetParser.getCases(Confirmed.MADEIRA).get(20200711));
        expect(mappedConfirmed.get(20200812)?.madeira).to.equal(datasetParser.getCases(Confirmed.MADEIRA).get(20200812));
    });
});

describe('Dataset Parser - Transform [Dead] to Database document', () => {
    const deadType: CaseType = { all: Dead.ALL, north: Dead.NORTH, center: Dead.CENTER, lvt: Dead.LVT,
                                 alentejo: Dead.ALENTEJO, algarve: Dead.ALGARVE, acores: Dead.ACORES, madeira: Dead.MADEIRA };

    it('Transformed [Dead.ALL] should match raw [Dead.ALL]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedDead = datasetParser.transform(deadType);

        expect(mappedDead.get(20200410)?.all).to.equal(datasetParser.getCases(Dead.ALL).get(20200410));
        expect(mappedDead.get(20200820)?.all).to.equal(datasetParser.getCases(Dead.ALL).get(20200820));
        expect(mappedDead.get(20201023)?.all).to.equal(datasetParser.getCases(Dead.ALL).get(20201023));
    });

    it('Transformed [Dead.NORTH] should match raw [Dead.NORTH]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedDead = datasetParser.transform(deadType);

        expect(mappedDead.get(20200610)?.north).to.equal(datasetParser.getCases(Dead.NORTH).get(20200610));
        expect(mappedDead.get(20200720)?.north).to.equal(datasetParser.getCases(Dead.NORTH).get(20200720));
        expect(mappedDead.get(20200823)?.north).to.equal(datasetParser.getCases(Dead.NORTH).get(20200823));
    });

    it('Transformed [Dead.CENTER] should match raw [Dead.CENTER]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedDead = datasetParser.transform(deadType);

        expect(mappedDead.get(20200610)?.center).to.equal(datasetParser.getCases(Dead.CENTER).get(20200610));
        expect(mappedDead.get(20200720)?.center).to.equal(datasetParser.getCases(Dead.CENTER).get(20200720));
        expect(mappedDead.get(20200823)?.center).to.equal(datasetParser.getCases(Dead.CENTER).get(20200823));
    });

    it('Transformed [Dead.LVT] should match raw [Dead.LVT]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedDead = datasetParser.transform(deadType);

        expect(mappedDead.get(20200310)?.lvt).to.equal(datasetParser.getCases(Dead.LVT).get(20200310));
        expect(mappedDead.get(20200320)?.lvt).to.equal(datasetParser.getCases(Dead.LVT).get(20200320));
        expect(mappedDead.get(20200330)?.lvt).to.equal(datasetParser.getCases(Dead.LVT).get(20200330));
    });

    it('Transformed [Dead.ALENTEJO] should match raw [Dead.ALENTEJO]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedDead = datasetParser.transform(deadType);

        expect(mappedDead.get(20200310)?.alentejo).to.equal(datasetParser.getCases(Dead.ALENTEJO).get(20200310));
        expect(mappedDead.get(20200420)?.alentejo).to.equal(datasetParser.getCases(Dead.ALENTEJO).get(20200420));
        expect(mappedDead.get(20200530)?.alentejo).to.equal(datasetParser.getCases(Dead.ALENTEJO).get(20200530));
    });

    it('Transformed [Dead.ALGARVE] should match raw [Dead.ALGARVE]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedDead = datasetParser.transform(deadType);

        expect(mappedDead.get(20200310)?.algarve).to.equal(datasetParser.getCases(Dead.ALGARVE).get(20200310));
        expect(mappedDead.get(20200420)?.algarve).to.equal(datasetParser.getCases(Dead.ALGARVE).get(20200420));
        expect(mappedDead.get(20200530)?.algarve).to.equal(datasetParser.getCases(Dead.ALGARVE).get(20200530));
    });

    it('Transformed [Dead.ACORES] should match raw [Dead.ACORES]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedDead = datasetParser.transform(deadType);

        expect(mappedDead.get(20200310)?.acores).to.equal(datasetParser.getCases(Dead.ACORES).get(20200310));
        expect(mappedDead.get(20200311)?.acores).to.equal(datasetParser.getCases(Dead.ACORES).get(20200311));
        expect(mappedDead.get(20200312)?.acores).to.equal(datasetParser.getCases(Dead.ACORES).get(20200312));
    });

    it('Transformed [Dead.MADEIRA] should match raw [Dead.MADEIRA]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedDead = datasetParser.transform(deadType);

        expect(mappedDead.get(20200110)?.madeira).to.equal(datasetParser.getCases(Dead.MADEIRA).get(20200110));
        expect(mappedDead.get(20200711)?.madeira).to.equal(datasetParser.getCases(Dead.MADEIRA).get(20200711));
        expect(mappedDead.get(20200812)?.madeira).to.equal(datasetParser.getCases(Dead.MADEIRA).get(20200812));
    });
});

describe('Dataset Parser - Transform [Recovered] to Database document', () => {
    const recoveredType: CaseType = { all: Recovered.ALL, north: Recovered.NORTH, center: Recovered.CENTER, lvt: Recovered.LVT,
                                      alentejo: Recovered.ALENTEJO, algarve: Recovered.ALGARVE, acores: Recovered.ACORES, madeira: Recovered.MADEIRA };

    it('Transformed [Recovered.ALL] should match raw [Recovered.ALL]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedRecovered = datasetParser.transform(recoveredType);

        expect(mappedRecovered.get(20200410)?.all).to.equal(datasetParser.getCases(Recovered.ALL).get(20200410));
        expect(mappedRecovered.get(20200820)?.all).to.equal(datasetParser.getCases(Recovered.ALL).get(20200820));
        expect(mappedRecovered.get(20201023)?.all).to.equal(datasetParser.getCases(Recovered.ALL).get(20201023));
    });

    it('Transformed [Recovered.NORTH] should match raw [Recovered.NORTH]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedRecovered = datasetParser.transform(recoveredType);

        expect(mappedRecovered.get(20200610)?.north).to.equal(datasetParser.getCases(Recovered.NORTH).get(20200610));
        expect(mappedRecovered.get(20200720)?.north).to.equal(datasetParser.getCases(Recovered.NORTH).get(20200720));
        expect(mappedRecovered.get(20200823)?.north).to.equal(datasetParser.getCases(Recovered.NORTH).get(20200823));
    });

    it('Transformed [Recovered.CENTER] should match raw [Recovered.CENTER]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedRecovered = datasetParser.transform(recoveredType);

        expect(mappedRecovered.get(20200610)?.center).to.equal(datasetParser.getCases(Recovered.CENTER).get(20200610));
        expect(mappedRecovered.get(20200720)?.center).to.equal(datasetParser.getCases(Recovered.CENTER).get(20200720));
        expect(mappedRecovered.get(20200823)?.center).to.equal(datasetParser.getCases(Recovered.CENTER).get(20200823));
    });

    it('Transformed [Recovered.LVT] should match raw [Recovered.LVT]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedRecovered = datasetParser.transform(recoveredType);

        expect(mappedRecovered.get(20200310)?.lvt).to.equal(datasetParser.getCases(Recovered.LVT).get(20200310));
        expect(mappedRecovered.get(20200320)?.lvt).to.equal(datasetParser.getCases(Recovered.LVT).get(20200320));
        expect(mappedRecovered.get(20200330)?.lvt).to.equal(datasetParser.getCases(Recovered.LVT).get(20200330));
    });

    it('Transformed [Recovered.ALENTEJO] should match raw [Recovered.ALENTEJO]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedRecovered = datasetParser.transform(recoveredType);

        expect(mappedRecovered.get(20200310)?.alentejo).to.equal(datasetParser.getCases(Recovered.ALENTEJO).get(20200310));
        expect(mappedRecovered.get(20200420)?.alentejo).to.equal(datasetParser.getCases(Recovered.ALENTEJO).get(20200420));
        expect(mappedRecovered.get(20200530)?.alentejo).to.equal(datasetParser.getCases(Recovered.ALENTEJO).get(20200530));
    });

    it('Transformed [Recovered.ALGARVE] should match raw [Recovered.ALGARVE]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedRecovered = datasetParser.transform(recoveredType);

        expect(mappedRecovered.get(20200310)?.algarve).to.equal(datasetParser.getCases(Recovered.ALGARVE).get(20200310));
        expect(mappedRecovered.get(20200420)?.algarve).to.equal(datasetParser.getCases(Recovered.ALGARVE).get(20200420));
        expect(mappedRecovered.get(20200530)?.algarve).to.equal(datasetParser.getCases(Recovered.ALGARVE).get(20200530));
    });

    it('Transformed [Recovered.ACORES] should match raw [Recovered.ACORES]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedRecovered = datasetParser.transform(recoveredType);

        expect(mappedRecovered.get(20200310)?.acores).to.equal(datasetParser.getCases(Recovered.ACORES).get(20200310));
        expect(mappedRecovered.get(20200311)?.acores).to.equal(datasetParser.getCases(Recovered.ACORES).get(20200311));
        expect(mappedRecovered.get(20200312)?.acores).to.equal(datasetParser.getCases(Recovered.ACORES).get(20200312));
    });

    it('Transformed [Recovered.MADEIRA] should match raw [Recovered.MADEIRA]', async () => {
        const datasetParser = await DatasetParser.getInstance();
        const mappedRecovered = datasetParser.transform(recoveredType);

        expect(mappedRecovered.get(20200110)?.madeira).to.equal(datasetParser.getCases(Recovered.MADEIRA).get(20200110));
        expect(mappedRecovered.get(20200711)?.madeira).to.equal(datasetParser.getCases(Recovered.MADEIRA).get(20200711));
        expect(mappedRecovered.get(20200812)?.madeira).to.equal(datasetParser.getCases(Recovered.MADEIRA).get(20200812));
    });
});