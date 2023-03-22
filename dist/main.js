"use strict";

var alunos = ['Joao', 'Maria', 'Jose'];
var nota = alunos.map(function (item) {
  return {
    nome: item,
    nota: 6
  };
});
nota.push({
  nome: 'Joao',
  nota: 5
});
var aprovados = nota.filter(function (item) {
  return item.nota >= 6;
});
console.log(nota);
console.log(aprovados);