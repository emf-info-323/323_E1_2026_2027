window.addEventListener('load', (event) => {
    document.querySelector('#idActionA1').addEventListener('click', actionA1);
    document.querySelector('#idActionA2').addEventListener('click', actionA2);
    document.querySelector('#idActionA3').addEventListener('click', actionA3);
    document.querySelector('#idActionA4').addEventListener('click', actionA4);
    document.querySelector('#idActionA5').addEventListener('click', actionA5);
    document.querySelector('#idActionA6').addEventListener('click', actionA6);
    document.querySelector('#idActionA7').addEventListener('click', actionA7);
    document.querySelector('#idActionA8').addEventListener('click', actionA8);
    document.querySelector('#idActionA9').addEventListener('click', actionA9);
    document.querySelector('#idActionA10').addEventListener('click', actionA10);
    document.querySelector('#idActionA11').addEventListener('click', actionA11);
    document.querySelector('#idActionA12').addEventListener('click', actionA12);
});

// ---------------------------------------------------------------------------

function afficherObjet(resultat) {
    const container = document.getElementById('output');
    container.innerHTML = JSON.stringify(resultat, null, 3);
}

// ---------------------------------------------------------------------------

function actionA1() {
    const repartitionNbreJeux = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(repartitionNbreJeux);
}

function actionA2() {
    const repartitionJeuxParPlateforme = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(repartitionJeuxParPlateforme);
}

function actionA3() {
    const genresDeJeuxEtJeux = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(genresDeJeuxEtJeux);
}

function actionA4() {
    const jeuxEtGenres = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(jeuxEtGenres);
}

function actionA5() {
    const jeuxPasChers = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(jeuxPasChers);
}

function actionA6() {
    const prixMoyenADeuxDecimales = 0.0;

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(prixMoyenADeuxDecimales);
}

function actionA7() {
    const TOP = 10;

    const bestWorstGames = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(bestWorstGames);
}

function actionA8() {
    const TOP = 10;

    const noSleepGames = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(noSleepGames);
}

function actionA9() {
    const selectedCountry = 'Switzerland';

    const formattedSalesInThisCountry = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(formattedSalesInThisCountry);
}

function actionA10() {
    const totalSalesByCountry = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(totalSalesByCountry);
}

function actionA11() {
    const TOP = 6;
    const MIN_RATING = 4.5;
    const MIN_BUYERS = 10_000;

    const steamBingoGames = [];

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(steamBingoGames);
}

function actionA12() {
    const caParEditeur = {};

    /*
        oooooo     oooo               .                                                     .o8                  o8o             o8o  
         `888.     .8'              .o8                                                    "888                  `"'             `"'  
          `888.   .8'    .ooooo.  .o888oo oooo d8b  .ooooo.        .ooooo.   .ooooo.   .oooo888   .ooooo.       oooo   .ooooo.  oooo  
           `888. .8'    d88' `88b   888   `888""8P d88' `88b      d88' `"Y8 d88' `88b d88' `888  d88' `88b      `888  d88' `"Y8 `888  
            `888.8'     888   888   888    888     888ooo888      888       888   888 888   888  888ooo888       888  888        888  
             `888'      888   888   888 .  888     888    .o      888   .o8 888   888 888   888  888    .o       888  888   .o8  888  
              `8'       `Y8bod8P'   "888" d888b    `Y8bod8P'      `Y8bod8P' `Y8bod8P' `Y8bod88P" `Y8bod8P'      o888o `Y8bod8P' o888o 
    */

    afficherObjet(caParEditeur);
}
