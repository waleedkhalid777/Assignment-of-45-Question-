// lowercase
let personName: string = "Aanish";
console.log("lowercase:", personName.toLowerCase());

//uppercase
console.log("uppercase:", personName.toUpperCase());

//tittle case
console.log(
  "tittlecase:",
  personName.replace(/\bw/g, (c) => c.toUpperCase())
);
