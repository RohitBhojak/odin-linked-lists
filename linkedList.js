class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let ptr = this.head;
    while (ptr.next != null) {
      ptr = ptr.next;
    }
    ptr.next = newNode;
  }

  prepend(value) {
    let newNode = new Node(value, this.head);
    this.head = newNode;
  }

  size() {
    let ptr = this.head;
    let count = 0;
    while (ptr != null) {
      ptr = ptr.next;
      count++;
    }
    return count;
  }

  toString() {
    let ptr = this.head;
    let string = "";
    while (ptr != null) {
      string += `( ${ptr.value} ) -> `;
      ptr = ptr.next;
    }
    string += "null";
    return string;
  }
}

export default LinkedList;
