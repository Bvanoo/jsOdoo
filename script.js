// 'use strict';
// let prenom = prompt("Quel est votre prénom");
// console.log(`Bonjour ${prenom}`);

// const age = prompt("Quel est votre age ? ");
// console.log(typeof age)

// alert(`Tu t'appelles ${prenom} tu as ${age} ans `)

// let prix =parseFloat(prompt("Donnez un prix"))
// console.log(prix);
// let format = prix.toLocaleString("fr-FR", {
//     style:"currency",
//     currency:"EUR"
// });

// console.log(format);

// let nom = prompt("Quel est votre nom ? ")
// let prenom = prompt("Quel est votre prenom ? ")

// console.log(`Bonjour ${prenom}  ${nom}`);

// const pers = {
//     nom:"Van",
//     prenom:"Ben",
//     age:"30",
//     ville:"Bierwart"
// }

// pers["email"] = "benjamin.van.oostveldt@bstorm.be"

// console.log(`${pers.prenom} ${pers.nom} as ${pers.age} ans et habite à ${pers.ville}, son email est ${pers.email}`);

// const titre = document.getElementById('titre')
// const monP = document.querySelector('.monP')
// const btn1 = document.getElementById('btn1')
// const btn2 = document.getElementById('btn2')
// const li = document.querySelectorAll('li')


// titre.innerHTML = "Mon nouveau titre";
// monP.textContent = "alert('ceci n'est pas une alerte du coup')"

// btn1.addEventListener('click', () =>{
//     monP.classList.add('colorByJs')
//     console.log(monP.className);

// });
// btn2.addEventListener('click', () =>{
//     monP.classList.toggle('fontByJs')    
// });

// li.forEach((item) =>{
//     let text = item.textContent
//     item.addEventListener('click',()=>{
//         item.classList.toggle('selected')
//         if( item.classList.contains('selected')){
//             item.textContent = `${text} (selected)`
//         }else{-
//             item.textContent = text
//         }
//     }
//     )
// })

// const inpNum = document.getElementById('inpNum');
// const note = document.getElementById('note');
// const result = document.getElementById('result');

// inpNum.addEventListener('input', () => {
//     if (inpNum.value > 20 || inpNum.value < 0) {
//         result.innerHTML = "Vous devez entrer un nombre entre 0 et 20"
//     } else {
//         result.innerHTML = "Votre mention est ..."
//     }
// })

// note.addEventListener('click', () => {
//     let num = inpNum.value
//     if (num >= 18) {
//         result.innerHTML = "Excelent"
//     } else if (num >= 14) {

//         result.innerHTML = "Bien"
//     } else if (num >= 10) {

//         result.innerHTML = "Suffisant"
//     } else {
//         result.innerHTML = "echec"

//     }
// })


// const ajd = document.getElementById('ajd')
// const nais = document.getElementById('nais')
// const age = document.getElementById('age')
// const nextAnif = document.getElementById('nextAnif')
// const timeLeft = document.getElementById('timeLeft')

// document.addEventListener('DOMContentLoaded', () => {
//     const dateAjd = new Date();
//     const dateNaiss = new Date(1996, 6, 24);
//     const optionsFormat = { day: 'numeric', month: 'long', year: 'numeric' };

//     let age = dateAjd.getFullYear() - dateNaiss.getFullYear();
//     const moisDiff = dateAjd.getMonth() - dateNaiss.getMonth();
//     const jourDiff = dateAjd.getDate() - dateNaiss.getDate();

//     if (moisDiff < 0 || (moisDiff === 0 && jourDiff < 0)) {
//         age--;
//     }

//     let prochainAnniv = new Date(
//         dateAjd.getFullYear(),
//         dateNaiss.getMonth(),
//         dateNaiss.getDate()
//     );

//     if (dateAjd > prochainAnniv && dateAjd.toDateString() !== prochainAnniv.toDateString()) {
//         prochainAnniv.setFullYear(dateAjd.getFullYear() + 1);
//     }

//     const aujourdhuiZero = new Date(dateAjd.getFullYear(), dateAjd.getMonth(), dateAjd.getDate());
//     const diffTemps = prochainAnniv - aujourdhuiZero;
//     const joursRestants = Math.ceil(diffTemps / (1000 * 60 * 60 * 24));

//     ajd.textContent = dateAjd.toLocaleDateString('fr-BE', optionsFormat);

//     nais.textContent = dateNaiss.toLocaleDateString('fr-FR', optionsFormat);

//     age.textContent = `${age} ans`;

//     nextAnif.textContent = prochainAnniv.toLocaleDateString('fr-FR', optionsFormat);

//     if (joursRestants === 0) {
//         timeLeft.textContent = "Joyeux anniversaire !";
//     } else {
//         timeLeft.textContent = `${joursRestants} jour${joursRestants > 1 ? 's' : ''}`;
//     }
// });

// const inpFruit = document.getElementById('input-fruit');
// const btnAdd = document.getElementById('btnAdd');
// const btnDeleteAll = document.getElementById('btnDeleteAll');
// const maListe = document.getElementById('maListe');
// const msgError = document.getElementById('msgError');


// btnAdd.addEventListener('click' , () =>{
//     const nomFruit =inpFruit.value.trim();

//     if(nomFruit === ""){
//         msgError.style.display = 'block';
//         return;
//     }

//     msgError.style.display = 'none';

//     const liFruit = document.createElement('li');
//     liFruit.textContent = `${nomFruit} `;

//     const btnDelElem = document.createElement('button');
//     btnDelElem.textContent = 'Suppr.'
//     btnDelElem.addEventListener('click', () =>{
//         liFruit.remove();
//     })

//     liFruit.appendChild(btnDelElem);
//     maListe.appendChild(liFruit);

//     inpFruit.value = "";
//     inpFruit.focus();
// })

// btnDeleteAll.addEventListener('click', ()=>{
//     // maListe.replaceChild();
//     maListe.innerHTML = '';
//     msgError.style.display = 'none'
// })

// const grid = document.getElementById('grid');
// const btnG = document.getElementById('btnG');
// const btnDel = document.getElementById('btnDel');

// btnG.addEventListener('click', ()=>{
//     grid.innerHTML = '';

//     for( let i = 1; i <= 25; i++){
//         const div = document.createElement('div');
//         div.classList.add('case');
//         div.textContent = i;
//         grid.appendChild(div)

//     }
//     const cases = grid.children;
//     let index = 0;

//     while(index< cases.length){
//         const numero = parseInt(cases[index].textContent, 10);

//         if(numero%3 === 0){
//             cases[index].classList.add('rouge')
//         }else{
//             cases[index].classList.add('vert')
//         }
//         index++
//     }
// })

// btnDel.addEventListener('click', () =>{
//     grid.innerHTML = '';
// })

// let tab = [5, 12, 3, 8, 1, 2, 7];

// tab.push(15);
// tab.unshift(9);

// tab.sort((a,b) => a-b).reverse();

// tab.shift();
// tab.pop();

// const containEight = tab.includes(8);

// const tabCopy = tab.filter(t => t<10).map(t => t*2)

// const indOg = tab.findIndex(t=> t>= 5 && t<=10);
// const indCopy = tabCopy.findIndex(t => t >= 5 && t <=10);
// console.table(tab);
// console.table(tabCopy);

// console.log(containEight);
// console.log(indOg);
// console.log(indCopy);


// const listePerso = document.getElementById('listePerso');
// const perso = ['Balthazar', 'Della', 'Donald', 'Riri', 'Zaza'];

// perso.forEach((nom,index)=>{
//     const li = document.createElement('li');
//     li.textContent = `Position ${index + 1 } : ${nom}`
//     listePerso.append(li);
// })

// const objPerso = {lastname:'Duck', firstname:'Balt', city:'Canardville'};

// for(const cle in objPerso){
//     const p = document.createElement('p');
//     p.textContent = `${cle} : ${objPerso[cle]}`
//     document.body.appendChild(p)
// }

// const listeProd = document.getElementById('listeProd')

// const prod = [
//     {nom : 'Smash', description : 'Jeu de combat', prix : 80},
//     {nom : 'Ascension', description : 'Serveur privé wow qui met a l amende Blizzar', prix : 0},
//     {nom : 'Gta6', description : ' Un jeu beaucoup trop attendu par la plupart ??', prix : 99999}
// ];

// for (const produit of prod){
//     const li = document.createElement('li');
//     const desc = produit.description ?? `Pas de description dispo`;
//     li.textContent = `${produit.nom} ${desc}  - ${produit.prix} €`
//     listeProd.append(li)
// }

// function mult(a, b=1){
//     return a*b
// }

// console.log(mult(4,2));
// console.log(mult(4));

// function somme(...nb){
//     return nb.reduce((acc, valeur) => acc + valeur, 0)
// }

// console.log(somme(2,4,6));


// const multi = (a, b=1) => a*b;
// console.log(multi(4,2));
// console.log(multi(4));

// function facto(n){
//     if(n<=1){
//         return 1;
//     }
//     return n *facto(n-1)
// }

// console.log(facto(5));
// console.log(facto(0));


// const horloge = document.getElementById('Horloge');
// const pause = document.getElementById('Pause');
// const reprendre = document.getElementById('Reprendre');

// let timerId = null;

// function setHorloge(){
//     const now = new Date();

//     const H = String(now.getHours()).padStart(2,'0');
//     const M = String(now.getMinutes()).padStart(2,'0');
//     const S = String(now.getSeconds()).padStart(2,'0');
//     horloge.textContent = `${H}:${M}:${S}`
// }

// function start() {
//     if(!timerId){
//         setHorloge();
//         timerId = setInterval(setHorloge,1000);
//     }
// }

// function stop(){
//     if(timerId){
//         clearInterval(timerId);
//         timerId = null;
//     }
// }

// pause.addEventListener('click', stop)
// reprendre.addEventListener('click', start)

// start();

// function diviser(a, b) {
//   if (b === 0) {
//     throw new Error("Division par zéro impossible.");
//   }
//   return a / b;
// }

// try {
//   const resultat = diviser(10, 0);
//   console.log(`Résultat : ${resultat}`);
// } catch (erreur) {
//   console.error(`Erreur interceptée : ${erreur.message}`);
// } finally {
//   console.log('Opération terminée');
// }

// function convAsNum(valeur) {
//   const nombre = Number(valeur);

//   if (Number.isNaN(nombre)) {
//     throw new TypeError("La valeur fournie n'est pas un nombre valide.");
//   }

//   if (nombre > Number.MAX_SAFE_INTEGER) {
//     throw new RangeError(`La valeur dépasse la limite d'entier sécurisé (${Number.MAX_SAFE_INTEGER}).`);
//   }

//   return nombre;
// }

// function tryConv(valeur) {
//   try {
//     const resultat = convAsNum(valeur);
//     console.log("Conversion réussie :", resultat);
//   } catch (erreur) {
//     if (erreur instanceof TypeError) {
//       console.error("[TypeError] :", erreur.message);
//     } else if (erreur instanceof RangeError) {
//       console.error("[RangeError] :", erreur.message);
//     } else {
//       console.error("[Erreur inconnue] :", erreur.message);
//     }
//   }
// }

// tryConv("abc");
// tryConv("9007199254740992");
// tryConv("42");

document.addEventListener('DOMContentLoaded', () => {
    const pokemons = [
        { id: 25, nom: 'Pikachu' },
        { id: 4, nom: 'Salamèche' },
        { id: 7, nom: 'Carapuce' },
        { id: 1, nom: 'Bulbizarre' },
        { id: 94, nom: 'Ectoplasma' },
        { id: 133, nom: 'Évoli' },
        { id: 143, nom: 'Ronflex' },
        { id: 150, nom: 'Mewtwo' }
    ];

    const grid = document.getElementById('grid');
    const essais = document.getElementById('try');
    const msgWin = document.getElementById('winMsg');
    const replay = document.getElementById('replay');

    let cards = [];
    let firstCard = null;
    let secondCard = null;
    let locked = false;
    let tentatives = 0;
    let founded = 0;

    function mix(tab) {
        for (let i = tab.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tab[i], tab[j]] = [tab[j], tab[i]];
        }
        return tab;
    }

    function initGame() {
        grid.innerHTML = '';
        msgWin.textContent = '';
        tentatives = 0;
        founded = 0;
        firstCard = null;
        secondCard = null;
        locked = false;
        essais.textContent = tentatives;

        cards = mix([...pokemons, ...pokemons]);

        cards.forEach((pkm) => {
            const card = document.createElement('div');
            card.classList.add('carte');
            card.dataset.valeur = pkm.id;

            card.innerHTML = `
            <div class="carte-inner">
              <div class="carte-back"></div>
              <div class="carte-front">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkm.id}.png" alt="${pkm.nom}">
              </div>
            </div>
          `;

            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        });
    }

    function flipCard() {
        if (locked) return;
        if (this === firstCard) return;
        if (this.classList.contains('trouvee') || this.classList.contains('retournee')) return;

        this.classList.add('retournee');

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        tentatives++;
        essais.textContent = tentatives;

        checkPair();
    }

    function checkPair() {
        const isMatch = firstCard.dataset.valeur === secondCard.dataset.valeur;
        if (isMatch) {
            validPair();
        } else {
            hideCard();
        }
    }

    function validPair() {
        firstCard.classList.add('trouvee');
        secondCard.classList.add('trouvee');

        founded++;
        resetPick();

        if (founded === pokemons.length) {
            msgWin.innerHTML = `VICTOIRE !<br>Vous avez tout capturé en ${tentatives} essais !`;
        }
    }

    function hideCard() {
        locked = true;

        setTimeout(() => {
            firstCard.classList.remove('retournee');
            secondCard.classList.remove('retournee');
            resetPick();
        }, 900);
    }

    function resetPick() {
        [firstCard, secondCard] = [null, null];
        locked = false;
    }

    replay.addEventListener('click', initGame);

    initGame();
});