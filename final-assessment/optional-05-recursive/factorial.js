function factorial(n) {
   // Jika n adalah 0 atau 1, hasilnya adalah 1 (kasus dasar)
   if (n === 0 || n === 1) {
    return 1;
}
// Jika tidak, panggil rekursif untuk menghitung faktorial
return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
