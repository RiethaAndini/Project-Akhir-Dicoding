/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

class Item {
     /**
     * Konstruktor untuk menginisialisasi properti id, name, dan quantity.
     * @param {number} id - ID dari item.
     * @param {string} name - Nama dari item.
     * @param {number} quantity - Jumlah dari item.
     */
    constructor(id, name, quantity) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }

     /**
     * Metode untuk menampilkan detail dari item.
     * @returns {string} - String yang berisi detail item dalam format tertentu.
     */
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}`;
    }

    /**
     * Metode untuk memperbarui nama, jumlah, dan harga item.
     * @param {string} name - Nama baru untuk item.
     * @param {number} quantity - Jumlah baru untuk item.
     * @param {number} price - Harga baru untuk item.
     */
    updateDetails(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

// Jangan hapus kode di bawah ini!
export default Item;
