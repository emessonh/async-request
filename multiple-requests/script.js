async function requestFetch(requestUrl){
    let request = await fetch(requestUrl)
        .then(response => {
           return response
        })
        .catch(() => console.log("Erro ao fazer requisição fetch!"))
    let data = await request.json()
    return data
}

async function createTableEscolas(records){
    let div = document.querySelector('#section1')
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    let headers = [ "id", "nome", "municipio", "tipo educacao"];

    // Adicionando cabeçalhos à tabela
    headers.forEach(headerText => {
        let header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    records.forEach(record => {
        let row = document.createElement('tr');
        let column_1 = document.createElement('td');
        column_1.textContent = record._id || ''; 
        row.appendChild(column_1);

        let column_2 = document.createElement('td');
        column_2.textContent = record.nome || ''; 
        row.appendChild(column_2);

        let column_3 = document.createElement('td');
        column_3.textContent = record.NM_MUN || ''; 
        row.appendChild(column_3);

        let column_4 = document.createElement('td');
        column_4.textContent = record.grupoative || ''; 
        row.appendChild(column_4);

        table.appendChild(row);
    });

    document.body.appendChild(table);

    table.appendChild(headerRow);

    div.appendChild(table)

    let p_div = document.getElementById('p-section-1')
    p_div.style.display = 'none'
}

async function updateTables(){
    let url = 'https://dados.al.gov.br/catalogo/api/3/action/datastore_search?resource_id=c4f3fa3e-62a0-4f43-be52-dc6110ee77d4&limit=5'
    let response = await requestFetch(url)
    await createTableEscolas(response.result.records)
}