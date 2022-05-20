let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
/*para q la taba sea homogenea*/
tbody.id = "tbody1";

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById("body").appendChild(table);
// Creating and adding data to first row of the table
let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "Titulo";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "Autor";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "Edicion";
let heading_4 = document.createElement("th");
heading_4.innerHTML = "Precio";
let heading_5 = document.createElement("th");
heading_5.innerHTML = "Tematica";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
thead.appendChild(row_1);

// Creating and adding data to second row of the table

// const button = document.createElement("button");
// button.type = "button";
// button.innerText = "Añadir Libro";
// document.body.appendChild(button);
