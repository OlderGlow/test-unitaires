import { article1, article2, article3, calculPanier, calculerTVA, calculerFraisPort } from "../index.js";
import should from "should";
describe('Test de la fonction calculPanier', () => {
    it('calculPanier doit retourner un nombre', () => {
        debugger;
        should(calculPanier()).be.a.Number();
    }
    );
});
describe('Test de la fonction calculTVA', () => {
    it('calculTVA doit retourner un nombre', () => {
       should(calculerTVA(article1.prixHT, article1.tauxTVA)).be.a.Number();
       should(calculerTVA(article2.prixHT, article2.tauxTVA)).be.a.Number();
       should(calculerTVA(article3.prixHT, article3.tauxTVA)).be.a.Number();
    }
    );
});
describe('Test de la fonction calculFraisPort', () => {
    it('calculFraisPort doit retourner un nombre', () => {
        should(calculerFraisPort(10)).be.a.Number();
        should(calculerFraisPort(23)).be.a.Number();
        should(calculerFraisPort(calculPanier())).be.a.Number();
    }
    );
}
);