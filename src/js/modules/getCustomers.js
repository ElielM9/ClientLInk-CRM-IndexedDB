/* Importaciones */
import { dataBase } from "../utils/variables.js";
import { CUSTOMER_LIST } from "../utils/selectors.js";

// Verifica si existe la base de datos y obtiene los clientes
export function checkDatabaseAndGetCustomers() {
  if (window.indexedDB.open(`crm`, 1)) {
    getCustomers();
  }
}

// Obtener los clientes de la base de datos
export function getCustomers() {
  const openConnection = window.indexedDB.open(`crm`, 1);

  openConnection.onerror = function () {
    console.error(`Error al conectar con la base de datos`);
  };

  openConnection.onsuccess = function () {
    dataBase.value = openConnection.result;
    const objectStore = dataBase.value.transaction(`crm`).objectStore(`crm`);

    objectStore.openCursor().onsuccess = (e) => {
      const cursor = e.target.result;

      if (cursor) {
        const { name, email, phone, company, id } = cursor.value;

        CUSTOMER_LIST.innerHTML += `
        <tr>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold">${name}</p>
              <p class="text-sm leading-10 text-gray-700"> ${email} </p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
              <p class="text-gray-700">${phone}</p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
              <p class="text-gray-600">${company}</p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
              <a href="edit.html?id=${id}" class="text-purple-600 hover:text-purple-900 bg-purple-600 mr-5"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg></a>
              <a href="#" data-customer="${id}" class="delete text-red-600 hover:text-red-900"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg></a>
          </td>
        </tr>
`;

        cursor.continue();
      }
    };
  };
}
