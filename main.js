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
console.log(list.find("hamster"));
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.contains("hamster"));
console.log(list.find("hamster"));
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.toString());

list.insertAt(1, 0);
list.insertAt(2, 1);
list.insertAt(3, 2);
list.insertAt(4, 3);
list.insertAt(0, 0);
list.insertAt(2.5, 3);

console.log(list.toString());
