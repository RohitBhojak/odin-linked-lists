class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.listHead = null;
    this.listSize = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.listHead === null) {
      this.listHead = newNode;
      this.listSize++;
      return;
    }
    let ptr = this.listHead;
    while (ptr.next != null) {
      ptr = ptr.next;
    }
    ptr.next = newNode;
    this.listSize++;
  }

  prepend(value) {
    const newNode = new Node(value, this.listHead);
    this.listHead = newNode;
    this.listSize++;
  }

  size() {
    return this.listSize;
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
    if (index < 0) index += this.listSize;
    if (index < 0 || index >= this.listSize) {
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

  pop() {
    if (this.listHead == null) {
      return "Empty List";
    }
    let ptr = this.listHead;
    if (ptr.next == null) {
      this.listHead = null;
      this.listSize--;
      return ptr;
    }
    while (ptr.next.next != null) {
      ptr = ptr.next;
    }
    const popped = ptr.next;
    ptr.next = null;
    this.listSize--;
    return popped;
  }

  contains(value) {
    let ptr = this.listHead;
    while (ptr !== null) {
      if (ptr.value === value) {
        return true;
      }
      ptr = ptr.next;
    }

    return false;
  }

  find(value) {
    let ptr = this.listHead;
    let index = 0;
    while (ptr !== null) {
      if (ptr.value === value) {
        return index;
      }
      ptr = ptr.next;
      index++;
    }
    return null;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.listSize) {
      console.log("Index out of bounds");
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let ptr = this.listHead;
    while (index-- > 1) {
      ptr = ptr.next;
    }
    const newNode = new Node(value, ptr.next);
    ptr.next = newNode;
    this.listSize++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.listSize) {
      return "Index out of bounds";
    }
    if (index == 0) {
      this.listHead = this.listHead.next;
      this.listSize--;
      return;
    }
    let ptr = this.listHead;
    while (index-- > 1) {
      ptr = ptr.next;
    }
    ptr.next = ptr.next.next;
    this.listSize--;
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
