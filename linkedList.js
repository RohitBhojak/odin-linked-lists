class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.listHead = null;
  }
  append(value) {
    let newNode = new Node(value);
    if (this.listHead === null) {
      this.listHead = newNode;
      return;
    }
    let ptr = this.listHead;
    while (ptr.next != null) {
      ptr = ptr.next;
    }
    ptr.next = newNode;
  }

  prepend(value) {
    let newNode = new Node(value, this.listHead);
    this.listHead = newNode;
  }

  size() {
    let ptr = this.listHead;
    let count = 0;
    while (ptr != null) {
      ptr = ptr.next;
      count++;
    }
    return count;
  }

  head() {
    return this.listHead;
  }

  tail() {
    if (this.listHead === null) {
      return this.listHead;
    }
    let ptr = this.listHead;
    while (ptr.next !== null) {
      ptr = ptr.next;
    }
    return ptr;
  }

  at(index) {
    const size = this.size();
    if (index < 0) index += size;
    if (index < 0 || index >= size) {
      return "Index out of range";
    }
    let ptr = this.listHead;
    if (ptr === null) {
      return "Empty List";
    }
    while (index-- > 0) {
      ptr = ptr.next;
    }
    return ptr;
  }

  toString() {
    let ptr = this.listHead;
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
