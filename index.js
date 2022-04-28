export const article1 = {
    libelle: 'T-shirt',
    prixHT: 10,
    tauxTVA: 20,
    quantite: 1
};
export const article2 = {
    libelle: 'Pantalon',
    prixHT: 20,
    tauxTVA: 10,
    quantite: 2
};
export const article3 = {
    libelle: 'Pull',
    prixHT: 15,
    tauxTVA: 5,
    quantite: 3
};

export const calculerTVA = (prixHT, tauxTVA) => {
    if(isNaN(tauxTVA) || isNaN(prixHT)) {
        return 'Erreur, veuillez rentrer des nombres';
    }
    if(tauxTVA > 100) {
        return 'Erreur, le taux de TVA est supérieur à 100%';
    }
    if(tauxTVA < 0) {
        return 'Erreur, le taux de TVA est inférieur à 0%';
    }
    if(prixHT < 0) {
        return 'Erreur, le prix HT est inférieur à 0';
    }
    return prixHT * tauxTVA / 100;
};

export const calculerFraisPort = (prixTotal) => {
    if(isNaN(prixTotal)) {
        return 'Erreur, veuillez rentrer un nombre';
    }
    if(prixTotal < 0) {
        return 'Erreur, le prix total est inférieur à 0';
    }
    if (prixTotal < 50) {
        return 5;
    } else if (prixTotal < 100) {
        return 10;
    } else {
        return 15;
    }
};
export const calculPanier = () => {
    let prixTotal = 0;
    const panier = [article1, article2, article3];
    panier.map(article => {
        if(isNaN(article.prixHT) || isNaN(article.tauxTVA) || isNaN(article.quantite)) {
            return 'Erreur, veuillez rentrer des nombres';
        }
        if(article.prixHT < 0) {
            return 'Erreur, le prix HT est inférieur à 0';
        }
        if(article.tauxTVA < 0) {
            return 'Erreur, le taux de TVA est inférieur à 0%';
        }
        if(article.tauxTVA > 100) {
            return 'Erreur, le taux de TVA est supérieur à 100%';
        }
        if(article.quantite < 0) {
            return 'Erreur, la quantité est inférieur à 0';
        }
        prixTotal += (article.prixHT + calculerTVA(article.prixHT, article.tauxTVA)) * article.quantite;
    });
    console.log(`Le prix total du panier est de ${prixTotal} €`);
    console.log(`Le prix des frais de port est de ${calculerFraisPort(prixTotal)} €`);
    return prixTotal;
}

calculPanier(article1, article2, article3);