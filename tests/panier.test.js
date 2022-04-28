import { article1, article2, article3, calculPanier } from "../index.js";
import should from "should";
describe('Test de la fonction calculPanier', () => {
    it('calculPanier doit retourner un nombre', () => {
        calculPanier(article1).should.be.a.Number();
        calculPanier(article2).should.be.a.Number();
        calculPanier(article3).should.be.a.Number();
    }
    );
});