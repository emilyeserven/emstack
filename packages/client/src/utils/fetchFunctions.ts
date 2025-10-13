import type { Test } from "@emstack/types/src/index.js";

export async function fetchTest(): Promise<Test> {
  return await fetch("http://localhost:3001/api").then(res => res.json());
}
