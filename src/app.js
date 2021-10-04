/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let randomSentence = document.getElementById("hello");
  console.log("Hello Rigo from the console!");
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  (function(x, y, z) {
    let domainName = [];
    for (var i = 0, l = x.length; i < l; i++) {
      for (var j = 0, k = 0; j < y.length; j++) {
        domainName.push([pronoun[i], adj[j], noun[k]] + ".com");
        if (j == y.length - 1 && k < z.length - 1) {
          k++;
          j = -1;
        }
      }
    }
    let sentence = domainName.join("\n").replaceAll(",", "");
    randomSentence.innerText = sentence;
  })(pronoun, adj, noun);
};
