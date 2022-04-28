const article1 = {
    libelle: 'T-shirt',
    prixHT: 10,
    tauxTVA: 20,
    quantite: 1
};
const article2 = {
    libelle: 'Pantalon',
    prixHT: 20,
    tauxTVA: 10,
    quantite: 2
};
const article3 = {
    libelle: 'Pull',
    prixHT: 15,
    tauxTVA: 5,
    quantite: 3
};

const calculerTVA = (prixHT, tauxTVA) => {
    if(isNaN(tauxTVA) || isNaN(prixHT)) {
        return 'Erreur, veuillez rentrer des nombres';
    }
    return prixHT * tauxTVA / 100;
};

const calculerFraisPort = (prixTotal) => {
    if(isNaN(prixTotal)) {
        return 'Erreur, veuillez rentrer un nombre';
    }
    if (prixTotal < 50) {
        return 5;
    } else if (prixTotal < 100) {
        return 10;
    } else {
        return 15;
    }
};
const calculPanier = () => {
    let prixTotal = 0;
    const panier = [article1, article2, article3];
    panier.map(article => {
        prixTotal += (article.prixHT + calculerTVA(article.prixHT, article.tauxTVA)) * article.quantite;
    });
    console.log(`Le prix total du panier est de ${prixTotal} €`);
    console.log(`Le prix des frais de port est de ${calculerFraisPort(prixTotal)} €`);
}

calculPanier();