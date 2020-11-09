import user from "./app";

console.log("default props:", user());
console.log("props:", user({ name: "Alice", age: 28 }));
