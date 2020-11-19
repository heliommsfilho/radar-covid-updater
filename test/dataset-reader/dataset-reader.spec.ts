import { expect } from "chai";
import { DatasetReader } from "../../src/dataset-reader/dataset-reader";

describe('Dataset Reader should:', () => {

    it('Download a value JSON object', async () => {
        const dataset = await DatasetReader.downloadDataset();

        // tslint:disable: no-unused-expression
        expect(dataset).to.exist;
        expect(dataset.data).to.exist;
        expect(dataset.ativos).to.exist;
        expect(dataset.suspeitos).to.exist;

        expect(dataset.confirmados).to.exist;
        expect(dataset.confirmados_arsnorte).to.exist;
        expect(dataset.confirmados_arscentro).to.exist;
        expect(dataset.confirmados_arslvt).to.exist;
        expect(dataset.confirmados_arsalentejo).to.exist;
        expect(dataset.confirmados_arsalgarve).to.exist;
        expect(dataset.confirmados_acores).to.exist;
        expect(dataset.confirmados_madeira).to.exist;

        expect(dataset.obitos).to.exist;
        expect(dataset.obitos_arsnorte).to.exist;
        expect(dataset.obitos_arscentro).to.exist;
        expect(dataset.obitos_arslvt).to.exist;
        expect(dataset.obitos_arsalentejo).to.exist;
        expect(dataset.obitos_arsalgarve).to.exist;
        expect(dataset.obitos_acores).to.exist;
        expect(dataset.obitos_madeira).to.exist;

        expect(dataset.recuperados).to.exist;
        expect(dataset.recuperados_arsnorte).to.exist;
        expect(dataset.recuperados_arscentro).to.exist;
        expect(dataset.recuperados_arslvt).to.exist;
        expect(dataset.recuperados_arsalentejo).to.exist;
        expect(dataset.recuperados_arsalgarve).to.exist;
        expect(dataset.recuperados_acores).to.exist;
        expect(dataset.recuperados_madeira).to.exist;

        const datasetSize = Object.keys(dataset.data).length;

        expect(Object.keys(dataset.data).length).to.gt(200);
        expect(Object.keys(dataset.ativos).length).to.equal(datasetSize);
        expect(Object.keys(dataset.suspeitos).length).to.equal(datasetSize);

        expect(Object.keys(dataset.confirmados).length).to.equal(datasetSize);
        expect(Object.keys(dataset.confirmados_arsnorte).length).to.equal(datasetSize);
        expect(Object.keys(dataset.confirmados_arscentro).length).to.equal(datasetSize);
        expect(Object.keys(dataset.confirmados_arslvt).length).to.equal(datasetSize);
        expect(Object.keys(dataset.confirmados_arsalentejo).length).to.equal(datasetSize);
        expect(Object.keys(dataset.confirmados_arsalgarve).length).to.equal(datasetSize);
        expect(Object.keys(dataset.confirmados_acores).length).to.equal(datasetSize);
        expect(Object.keys(dataset.confirmados_madeira).length).to.equal(datasetSize);

        expect(Object.keys(dataset.obitos).length).to.equal(datasetSize);
        expect(Object.keys(dataset.obitos_arsnorte).length).to.equal(datasetSize);
        expect(Object.keys(dataset.obitos_arscentro).length).to.equal(datasetSize);
        expect(Object.keys(dataset.obitos_arslvt).length).to.equal(datasetSize);
        expect(Object.keys(dataset.obitos_arsalentejo).length).to.equal(datasetSize);
        expect(Object.keys(dataset.obitos_arsalgarve).length).to.equal(datasetSize);
        expect(Object.keys(dataset.obitos_acores).length).to.equal(datasetSize);
        expect(Object.keys(dataset.obitos_madeira).length).to.equal(datasetSize);

        expect(Object.keys(dataset.recuperados).length).to.equal(datasetSize);
        expect(Object.keys(dataset.recuperados_arsnorte).length).to.equal(datasetSize);
        expect(Object.keys(dataset.recuperados_arscentro).length).to.equal(datasetSize);
        expect(Object.keys(dataset.recuperados_arslvt).length).to.equal(datasetSize);
        expect(Object.keys(dataset.recuperados_arsalentejo).length).to.equal(datasetSize);
        expect(Object.keys(dataset.recuperados_arsalgarve).length).to.equal(datasetSize);
        expect(Object.keys(dataset.recuperados_acores).length).to.equal(datasetSize);
        expect(Object.keys(dataset.recuperados_madeira).length).to.equal(datasetSize);
    });
});