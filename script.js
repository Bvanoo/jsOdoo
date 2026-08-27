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

let tab = [5, 12, 3, 8, 1, 2, 7];

tab.push(15);
tab.unshift(9);

tab.sort((a,b) => a-b).reverse();

tab.shift();
tab.pop();

const containEight = tab.includes(8);

const tabCopy = tab.filter(t => t<10).map(t => t*2)

const indOg = tab.findIndex(t=> t>= 5 && t<=10);
const indCopy = tabCopy.findIndex(t => t >= 5 && t <=10);
console.table(tab);
console.table(tabCopy);

console.log(containEight);
console.log(indOg);
console.log(indCopy);



