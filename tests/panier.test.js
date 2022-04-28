import {calculPanier, calculerTVA, calculerFraisPort} from '../index.js';
test('Test de la fonction calculerPanier', () => {
    expect(calculPanier()).toBe(103.25);
})
test('Test de la fonction calculerTVA', () => {
    expect(calculerTVA(15, 5)).toBe(0.75);
})
test('Test de la fonction calculerFraisPort', () => {
    expect(calculerFraisPort(103.25)).toBe(12);
})