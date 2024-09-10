async function requestFetch(requestUrl){
    let request = await fetch(requestUrl)
        .then(response => {
           return response
        })
        .catch(() => console.log("Erro ao fazer requisição fetch!"))
    let data = await request.json()
    return data
}

function removeTableIfExists(tableId) {
    let existingTable = document.getElementById(tableId);
    if (existingTable) {
        existingTable.remove();
    }
}

async function createTableEscolas(records){
    let div = document.querySelector('#section1');

    removeTableIfExists('table-escolas');

    let table = document.createElement('table');
    table.id = 'table-escolas';

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
    
async function createTableRailRoad(records){
    let div = document.querySelector('#section2');

    removeTableIfExists('table-ferrovias');

    let table = document.createElement('table');
    table.id = 'table-ferrovias';

    let headerRow = document.createElement('tr');
    let headers = [ "id", "nome", "concessão", "situação"];

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
        column_3.textContent = record.concession || ''; 
        row.appendChild(column_3);

        let column_4 = document.createElement('td');
        column_4.textContent = record.situacaofi || ''; 
        row.appendChild(column_4);

        table.appendChild(row);
    });

    document.body.appendChild(table);

    table.appendChild(headerRow);

    div.appendChild(table)

    let p_div = document.getElementById('p-section-2')
    p_div.style.display = 'none'
}

async function createTableCisp(records){
    let div = document.querySelector('#section3');

    removeTableIfExists('table-cisp');
    
    let table = document.createElement('table');
    table.id = 'table-cisp';

    let headerRow = document.createElement('tr');
    let headers = [ "id", "municipio", "imovel", "inauguração", "endereço"];

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
        column_2.textContent = record.MUNICÍPIO || ''; 
        row.appendChild(column_2);

        let column_3 = document.createElement('td');
        column_3.textContent = record.IMÓVEL || ''; 
        row.appendChild(column_3);

        let column_4 = document.createElement('td');
        column_4.textContent = record.INAUGURAÇÃO || ''; 
        row.appendChild(column_4);

        let column_5 = document.createElement('td');
        column_5.textContent = record.ENDEREÇO || ''; 
        row.appendChild(column_5);

        table.appendChild(row);
    });

    document.body.appendChild(table);

    table.appendChild(headerRow);

    div.appendChild(table)

    let p_div = document.getElementById('p-section-3')
    p_div.style.display = 'none'
}

async function createTableSamu(records){
    let div = document.querySelector('#section4')

    removeTableIfExists('table-samu');

    let table = document.createElement('table');
    table.id = 'table-samu';

    let headerRow = document.createElement('tr');
    let headers = [ "id", "nome", "municipio", "endereço", "bairro"];

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
        column_2.textContent = record.Nome || ''; 
        row.appendChild(column_2);

        let column_3 = document.createElement('td');
        column_3.textContent = record.Município || ''; 
        row.appendChild(column_3);

        let column_4 = document.createElement('td');
        column_4.textContent = record.Endereço || ''; 
        row.appendChild(column_4);

        let column_5 = document.createElement('td');
        column_5.textContent = record.Bairro || ''; 
        row.appendChild(column_5);

        table.appendChild(row);
    });

    document.body.appendChild(table);

    table.appendChild(headerRow);

    div.appendChild(table)

    let p_div = document.getElementById('p-section-4')
    p_div.style.display = 'none'
}

async function updateTables(){
    let urls = {
        'escolas':'https://dados.al.gov.br/catalogo/api/3/action/datastore_search?resource_id=c4f3fa3e-62a0-4f43-be52-dc6110ee77d4&limit=5',
        'malha_ferroviaria':'https://dados.al.gov.br/catalogo/api/3/action/datastore_search?resource_id=d6aa469b-b377-4ce5-bc6c-9b9f7e45f58b&limit=5',
        'cisp':'https://dados.al.gov.br/catalogo/api/3/action/datastore_search?resource_id=d99da3d6-23bf-4b73-9fa0-4e38415c5288&limit=5',
        'samu':'https://dados.al.gov.br/catalogo/api/3/action/datastore_search?resource_id=7cfe678f-0795-4d03-84a5-6a8565fafd3a&limit=5'
    }

    let responseTableEscolas = await requestFetch(urls.escolas);
    if (responseTableEscolas) {
        await createTableEscolas(responseTableEscolas.result.records);
    }

    let responseTableRailRoad = await requestFetch(urls.malha_ferroviaria);
    if (responseTableRailRoad) {
        await createTableRailRoad(responseTableRailRoad.result.records);
    }

    let responseTableCisp = await requestFetch(urls.cisp);
    if (responseTableCisp) {
        await createTableCisp(responseTableCisp.result.records);
    }

    let responseTableSamu = await requestFetch(urls.samu);
    if (responseTableSamu) {
        await createTableSamu(responseTableSamu.result.records);
    }
}