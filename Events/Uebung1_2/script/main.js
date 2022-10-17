"use strict";

//value
const input = document.getElementById("input");
const letterList = document.querySelector(".letters");

input.addEventListener('focus', (e) => e.target.classList.add("selected"));
input.addEventListener('blur', (e) => e.target.classList.remove("selected"));

input.addEventListener('keyup', function (e) {
    if (e.key == "Enter") {
        const arr = input.value.split('');
        console.log(arr);

        arr.forEach(letter => {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.textContent = letter;

            li.appendChild(span);
            letterList.appendChild(li);
        });

        letterEffect();
    }
});


function letterEffect() {
    const liList = letterList.children;
    console.log(liList);

    for (let i = 0; i < liList.length; i++) {
        liList[i].addEventListener('mouseover', () => {
            liList[i].classList.add("mouseoverLetter");

            for (let j = 0; j < liList.length; j++) {

                if (liList[i] != liList[j] && liList[i].firstElementChild.textContent == liList[j].firstElementChild.textContent) {
                    liList[j].classList.add("mouseoverLetter");
                }
            }

        });

        liList[i].addEventListener('mouseout', () => {
            liList[i].classList.remove("mouseoverLetter");
            for (let j = 0; j < liList.length; j++) {

                if (liList[i] != liList[j] && liList[i].firstElementChild.textContent == liList[j].firstElementChild.textContent) {
                    liList[j].classList.remove("mouseoverLetter");
                }
            }
        });
    }
};