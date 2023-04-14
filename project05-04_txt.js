"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: 
      Date:   

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

// Loop through phrases node list and apply onclick event handler
for (let i = 0; i < phrases.length; i++) {
  phrases[i].onclick = function() {
    // Create phrase variable containing h1 element
    let phrase = document.createElement("h1");
    phrase.textContent = this.textContent;

    // Create footnote variable containing p element
    let footnote = document.createElement("p");
    footnote.textContent = footnotes[i];
    footnote.style.fontStyle = "italic";
    footnote.style.fontSize = "1.2em";

    // Create closeButton variable containing input element
    let closeButton = document.createElement("input");
    closeButton.type = "button";
    closeButton.value = "Close Footnote";
    closeButton.style.display = "block";
    closeButton.style.margin = "10px auto";

    // Use window.open() to create popup window
    let popup = window.open("", "footnote", "width=300,height=200,top=100,left=100");
    popup.document.body.style.backgroundColor = "ivory";
    popup.document.body.style.fontSize = "16px";
    popup.document.body.style.padding = "10px";

    // Append phrase, footnote, and closeButton to popup.document.body
    popup.document.body.appendChild(phrase);
    popup.document.body.appendChild(footnote);
    popup.document.body.appendChild(closeButton);

    // Add onclick event handler to closeButton to close the popup window
    closeButton.onclick = function() {
      popup.close();
    };
  };
}
