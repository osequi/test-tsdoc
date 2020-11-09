import type User from "./user";
import type Pet from "./pet";

import user from "./user";
import pet from "./pet";

console.log("default props:", user());
console.log("props:", user({ name: "Alice", age: 28 }));
console.log("default props:", pet());
console.log("props:", user({ name: "Kicsi", age: 9 }));
