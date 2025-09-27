export async function fetchTest() {
  return await fetch("http://localhost:3001/api").then(res => res.json());
}
