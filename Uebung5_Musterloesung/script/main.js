"use strict";

// Erstellen Sie eine Seite mit einem Eingabefeld welches sich optisch hervorhebt, wenn es den Fokus hat

document.querySelector("#myInput").addEventListener("focus", e=> {
   e.target.classList.add("selected");
});

document.querySelector("#myInput").addEventListener("blur", e=> {
   e.target.classList.remove("selected");
});

// Wird ein Text eingegeben und mit Enter bestätigt, wird jedes Zeichen in einem eigenen Element unter dem Eingabefeld angezeigt
document.querySelector("#myInput").addEventListener("keyup", e => {
   if (e.key === "Enter"){
      const ul = document.querySelector("#textList");
      e.target.value.split('').map(e=> {
         const li = document.createElement("li");
         const span = document.createElement("span");
         li.appendChild(span);
         ul.appendChild(li);
         span.textContent = e;
      });
   }
});

// Erweitern Sie die Seite aus Übung 1
// Die Zeichen, die nach der Eingabe angezeigt werden
// Wenn Sie mit der Maus über ein Zeichen fahren, werden dieses und alle anderen gleichen Zeichen hervorgehoben
document.querySelector("#textList").addEventListener("mouseover", e => {
   const char2Search = e.target.textContent;
   e.currentTarget.querySelectorAll("span").forEach(e => {
      if (e.textContent == char2Search)
         e.classList.add("highlight");
   });
});

document.querySelector("#textList").addEventListener("mouseout", e => {
   e.currentTarget.querySelectorAll("span").forEach(e => {
      e.classList.remove("highlight");
   });
});