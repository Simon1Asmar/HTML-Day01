const table = document.querySelector("#multiplication-table");

for(let i=1; i<= 10; i++){
  console.log(i);
  const tr = document.createElement("tr");
  // tr.textContent = i;
  table.append(tr);
  for(let j = 1; j<=20; j++){
    let td = j===1 || i===1 ? document.createElement("th") : document.createElement("td");
    td.textContent = i * j;
    tr.append(td);
    console.log("\t\t",i*j);
  }
}

table.querySelector("th:first-child").textContent="x";
