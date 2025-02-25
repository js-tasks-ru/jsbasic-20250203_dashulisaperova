function highlight(table) {
  let tbody = table.lastElementChild;
    for (let i = 0; i < tbody.rows.length; i++) {
      let row=tbody.rows[i];
      for (let j = 0; j < row.cells.length; j++) {
        let td = row.cells[j];
        if (td.hasAttribute('data-available')) {
          if (td.getAttribute('data-available') == 'true') {
            row.classList.add("available");
          } else row.classList.add("unavailable");
        } else row.setAttribute('hidden', 'true');
        if (td.textContent == 'm') {
          row.classList.add('male');
        }
        if (td.textContent == 'f') {
          row.classList.add('female');
        }
        if (Number(td.textContent) && Number(td.textContent) < 18) {
          row.style = "text-decoration: line-through";
        }
      }
    } 
}
