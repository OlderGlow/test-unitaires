import { article1, article2, article3, calculPanier, calculerTVA, calculerFraisPort } from "../index.js";
import should from "should";
describe('Test de la fonction calculPanier', () => {
    it('calculPanier doit retourner un nombre', () => {
        debugger;
        calculPanier().should.be.a.Number();
    }
    );
});
describe('Test de la fonction calculTVA', () => {
    it('calculTVA doit retourner un nombre', () => {
        calculerTVA(article1.prixHT, article1.tauxTVA).should.be.a.Number();
    }
    );
});
describe('Test de la fonction calculFraisPort', () => {
    it('calculFraisPort doit retourner un nombre', () => {
        calculerFraisPort(article1.prixHT).should.be.a.Number();
    }
    );
}
);