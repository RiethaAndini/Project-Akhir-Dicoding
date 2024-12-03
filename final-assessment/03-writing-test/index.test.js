// index.test.js
import { test } from 'node:test';      // Mengimpor modul test dari node:test
import assert from 'node:assert';      // Mengimpor modul assert dari node:assert
import { sum } from './index.js';      // Mengimpor fungsi sum dari index.js

test('sum should return the sum of two numbers', () => {
  assert.strictEqual(sum(1, 2), 3);  // Memeriksa apakah 1 + 2 = 3
});

test('sum should return 0 when both numbers are 0', () => {
  assert.strictEqual(sum(0, 0), 0);  // Memeriksa apakah 0 + 0 = 0
});

test('sum should return correct result with negative numbers', () => {
  assert.strictEqual(sum(-1, 2), 1); // Memeriksa apakah -1 + 2 = 1
});

test('sum should handle floating point numbers correctly', () => {
  const result = sum(0.1, 0.2); // Hasil penjumlahan
  const expected = 0.3;         // Nilai yang diharapkan
  const tolerance = 0.000001;   // Toleransi untuk presisi floating point

  // Memeriksa apakah hasil berada dalam toleransi
  assert.ok(
    Math.abs(result - expected) < tolerance,
    `Expected ${result} to be approximately ${expected}`
  );
});
