import { test } from "node:test";
import assert from "assert";

test("passing test, strictEqual", (t) => {
  assert.strictEqual(1, 1);
});

test("passing test, notStrictEqual", (t) => {
  assert.notStrictEqual(1,
      2);
});
