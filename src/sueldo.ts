//Declaro las variables
let sueldoNormal: number = Number(prompt("Ingresar sueldo"));
let sueldoConAumento: number = 0;
//Utilizo if para dar una condición y si se cumple le aplica un 20% de aumento
if (0 < sueldoNormal && sueldoNormal <=15000){
sueldoConAumento= sueldoNormal * 1.2;
console.log ("Corresponde aumento de 20%");
}
else if (15001< sueldoNormal && sueldoNormal <=20000){
sueldoConAumento=sueldoNormal * 1.1;
console.log("Corresponde aumento de 10%");
}
else if (20001<sueldoNormal && sueldoNormal <=25000){
  sueldoConAumento=sueldoNormal * 1.05;
  console.log("Corresponde aumento de 5%");
}
else (25000>sueldoNormal && sueldoNormal>25000){
console.log("No corresponde aumento");
}