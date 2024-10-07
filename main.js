const apiUrl = 'https://api.sheetbest.com/sheets/605fcc8e-b9c7-4275-a203-74938ee3f58e'

const form = document.getElementById('crudForm');
const dataTable = document.getElementById('dataTable');



const getData = async () => {
    try {
        const response = await axios.get(apiUrl);
        renderTable(response.data);
    } catch (error) {
        console.error('Error al obtener los datos', error);
    }
}

const renderTable = (data) => {
    console.log(data);
    dataTable.innerHTML = '';
    data.forEach(item => {
        const row = `
<tr class="border-b"></tr>
        <td class="py-2 px-4">${item.name}</td>
        <td class="py-2 px-4">${item.marca}</td>
        <td class="py-2 px-4">${item.precio}</td>
        <td class="py-2 px-4"><img class="w-16 h-16 object-cover rounded" src="${item.img}" alt=""></td>
        <td>
            <button class="bg-yellow-500 text-withe px-2 py-1 rounded" onclick="">Editar</button>
            <button class="bg-red-500 text-withe px-2 py-1 rounded" onclick="">Eliminar</button>
        </td>
        </tr>`;
        dataTable.insertAdjacentHTML('beforeend', row);
    });
}

getData();