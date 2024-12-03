function fibonacci(n) {
    let result = [0]; // Mulai dengan elemen pertama 0
    if (n > 1) {
        result.push(1); // Tambahkan elemen kedua, 1
    }
    
    for (let i = 2; i < n; i++) {
        // Setiap elemen berikutnya adalah hasil penjumlahan dua elemen sebelumnya
        result.push(result[i - 1] + result[i - 2]);
    }

    return result; // Kembalikan deret Fibonacci hingga elemen ke-n
}

// Jangan hapus kodecc di bawah ini!
export default fibonacci;
