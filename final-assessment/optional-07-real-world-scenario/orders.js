// Array untuk menyimpan pesanan
let orders = [];

// Fungsi untuk membuat ID unik
const generateUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

/**
 * Menambahkan pesanan baru.
 * @param {string} customerName - Nama pelanggan.
 * @param {Array} items - Daftar item yang dipesan, setiap item memiliki nama dan harga.
 */
function addOrder(customerName, items) {
  const id = generateUniqueId();
  const totalPrice = items.reduce((total, item) => total + (item.price || 0), 0);
  const newOrder = {
    id,
    customerName,
    items,
    totalPrice,
    status: 'Menunggu',
  };
  orders.push(newOrder);
}

/**
 * Memperbarui status pesanan berdasarkan ID.
 * @param {string} orderId - ID pesanan.
 * @param {string} newStatus - Status baru (Menunggu, Diproses, Selesai).
 */
function updateOrderStatus(orderId, newStatus) {
  const order = orders.find((o) => o.id === orderId);
  if (order) {
    order.status = newStatus;
  } else {
    console.error(`Pesanan dengan ID ${orderId} tidak ditemukan.`);
  }
}

/**
 * Menghapus pesanan berdasarkan ID.
 * @param {string} orderId - ID pesanan.
 */
function deleteOrder(orderId) {
  orders = orders.filter((o) => o.id !== orderId);
}

/**
 * Menghitung total pendapatan dari semua pesanan yang berstatus 'Selesai'.
 * @returns {number} - Total pendapatan.
 */
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Ekspor fungsi dan data orders
export { orders, addOrder, updateOrderStatus, deleteOrder, calculateTotalRevenue };
