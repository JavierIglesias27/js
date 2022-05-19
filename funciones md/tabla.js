let table = document.createElement('table');
		let thead = document.createElement('thead');
		let tbody = document.createElement('tbody');

		table.appendChild(thead);
		table.appendChild(tbody);

		// Adding the entire table to the body tag
		document.getElementById('body').appendChild(table);
		// Creating and adding data to first row of the table
		let row_1 = document.createElement('tr');
		let heading_1 = document.createElement('th');
		heading_1.innerHTML = "Titulo";
		let heading_2 = document.createElement('th');
		heading_2.innerHTML = "Autor";
		let heading_3 = document.createElement('th');
		heading_3.innerHTML = "Edicion";
		let heading_4 = document.createElement('th');
		heading_4.innerHTML = "Precio";
		let heading_5 = document.createElement('th');
		heading_5.innerHTML = "tematica";

		row_1.appendChild(heading_1);
		row_1.appendChild(heading_2);
		row_1.appendChild(heading_3);
		row_1.appendChild(heading_4);
		row_1.appendChild(heading_5);
		thead.appendChild(row_1);

		// Creating and adding data to second row of the table
		let row_2 = document.createElement('tr');
		let row_2_data_1 = document.createElement('td');
		row_2_data_1.innerHTML = "libro1";
		let row_2_data_2 = document.createElement('td');
		row_2_data_2.innerHTML = "autor";
		let row_2_data_3 = document.createElement('td');
		row_2_data_3.innerHTML = "nobelda";
		let row_2_data_4 = document.createElement('td');
		row_2_data_4.innerHTML = "195";
		let row_2_data_5 = document.createElement('td');
		row_2_data_5.innerHTML = "terrorifico";

		row_2.appendChild(row_2_data_1);
		row_2.appendChild(row_2_data_2);
		row_2.appendChild(row_2_data_3);
		row_2.appendChild(row_2_data_4);
		row_2.appendChild(row_2_data_5);
		tbody.appendChild(row_2);