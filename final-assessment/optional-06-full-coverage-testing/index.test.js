// Import modul yang dibutuhkan
import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js'; // Mengimpor fungsi sum dari index.js

// Pengujian untuk dua angka positif
test('sum should return the correct sum of two positive numbers', () => {
  assert.strictEqual(sum(1, 2), 3); // Harus menghasilkan 3 (1 + 2)
});

// Pengujian untuk salah satu angka negatif
test('sum should return 0 if one number is negative', () => {
  assert.strictEqual(sum(-1, 2), 0); // Harus menghasilkan 0 (karena -1 adalah angka negatif)
  assert.strictEqual(sum(1, -2), 0); // Harus menghasilkan 0 (karena -2 adalah angka negatif)
});

// Pengujian untuk dua angka negatif
test('sum should return 0 if both numbers are negative', () => {
  assert.strictEqual(sum(-1, -2), 0); // Harus menghasilkan 0 (karena keduanya angka negatif)
});

// Pengujian untuk salah satu atau kedua argumen bukan angka
test('sum should return 0 if any argument is not a number', () => {
  assert.strictEqual(sum('a', 2), 0); // Harus menghasilkan 0 (karena 'a' bukan angka)
  assert.strictEqual(sum(1, 'b'), 0); // Harus menghasilkan 0 (karena 'b' bukan angka)
  assert.strictEqual(sum('a', 'b'), 0); // Harus menghasilkan 0 (karena keduanya bukan angka)
});

// Pengujian untuk kedua argumen bukan angka
test('sum should return 0 if both arguments are not numbers', () => {
  assert.strictEqual(sum({}, []), 0); // Harus menghasilkan 0 (karena keduanya bukan angka)
});
