/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronombres = ["the", "our"];

  const adjetivos = ["great", "big"];
  const sustantivos = ["jogger", "racoon"];

  function generarNombresDeDominio(pronombres, adjetivos, sustantivos) {
    const nombresDeDominio = [];

    for (let pronombre of pronombres) {
      for (let adjetivo of adjetivos) {
        for (let sustantivo of sustantivos) {
          nombresDeDominio.push(`${pronombre}${adjetivo}${sustantivo}.com`);
          console.log(pronombre + adjetivo + sustantivo + ".com");
        }
      }
    }

    return nombresDeDominio;
  }

  const dominios = generarNombresDeDominio(pronombres, adjetivos, sustantivos);
  console.log(dominios);

  console.log("Hello Rigo from the console!");
};
