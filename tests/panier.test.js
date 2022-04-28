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
        calculerTVA(article2.prixHT, article2.tauxTVA).should.be.a.Number();
        calculerTVA(article3.prixHT, article3.tauxTVA).should.be.a.Number();
    }
    );
});
describe('Test de la fonction calculFraisPort', () => {
    it('calculFraisPort doit retourner un nombre', () => {
        calculerFraisPort(article1.prixHT).should.be.a.Number();
        calculerFraisPort(article2.prixHT).should.be.a.Number();
        calculerFraisPort(article3.prixHT).should.be.a.Number();
    }
    );
}
);