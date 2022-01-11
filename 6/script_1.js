let firstElm = document.getElementById('firstElm');

console.log (document.getElementById('firstElm')); // доступ ко всему элементу
console.log (document.getElementById('firstElm').innerText); // доступ к тексту внутри
console.log (firstElm.innerHTML); // доступ к HTML коду внутри
console.log (firstElm.outerHTML); // к HTML коду, включая код самого элемента

let firstElmStyles = window.getComputedStyle(firstElm);
// console.log (firstElmStyles); //можно долго листать

console.log (firstElmStyles.getPropertyValue("height"));
console.log (firstElmStyles.height);
console.log (firstElmStyles.getPropertyValue("margin-top")); //в такой записи имя css свойств как в css коде
console.log (firstElmStyles.marginTop); //в такой записи в JS не используются спец символы, используем lowerCamelCase
console.log (firstElmStyles.getPropertyValue("color"));
console.log (firstElmStyles.color);

let first = document.getElementById('first');
let second = document.getElementById('second');
console.log (first, second);