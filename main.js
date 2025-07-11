import LinkedList from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.at(5));
console.log(list.at(-7));
console.log(list.contains("hamster"));
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.contains("hamster"));
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.toString());
