/* Importaciones */
import { dataBase } from "../utils/variables.js";

export function deleteCustomer(e) {
  const reference = e.target.classList.contains(`delete`);
  if (reference) {
    const idDelete = Number(e.target.dataset.customer);

    const confirmation = confirm(`¿Deseas borrar este cliente?`);

    if (confirmation) {
      const transaction = dataBase.value.transaction(`crm`, `readwrite`);
      const objectStore = transaction.objectStore(`crm`);

      objectStore.delete(idDelete);

      transaction.oncomplete = () => {
        console.log(`Hola`);

        // Actualizar la lista de clientes
        e.target.parentElement.parentElement.remove();
      };

      transaction.onerror = () => {
        console.error(`Error al eliminar el cliente`);
      };
    }
  }
}
