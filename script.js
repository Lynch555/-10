"use strict";

const books = document.querySelectorAll(".book");
const backGround = document.querySelector("body");
const bookH2 = books[4].querySelector('a');
let advertising = document.querySelector(".adv");
const bookChapters2 = books[0].querySelectorAll("li");
const bookChapters5 = books[5].querySelectorAll("li");

// 1.
books[0].before(books[1]);
books[5].after(books[2]);
books[3].before(books[4]);

// 2.
backGround.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// 3.
bookH2.innerText = 'Книга 3. this и Прототипы Объектов';
// 4.
advertising.remove();

// 5.
bookChapters2[10].before(bookChapters2[2]);
bookChapters2[2].before(bookChapters2[9]);
bookChapters2[9].before(bookChapters2[7]);
bookChapters2[7].before(bookChapters2[5]);
bookChapters2[5].before(bookChapters2[4]);

bookChapters5[1].after(bookChapters5[9]);
bookChapters5[5].after(bookChapters5[2]);
bookChapters5[7].after(bookChapters5[5]);

// 6.
const bookChapters = document.querySelectorAll("li");
bookChapters[55].insertAdjacentHTML("afterend", "Глава 8: За пределами ES6");




