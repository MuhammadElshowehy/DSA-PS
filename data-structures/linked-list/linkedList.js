// here i will implement a linked list data structure using JS //
class LinkedListNode {
  data;
  next;
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListIterator {
  currentNode;
  constructor(node) {
    this.currentNode = node;
  }

  data() {
    if (this.currentNode == null) return null;
    return this.currentNode.data;
  }

  next() {
    if (this.currentNode != null) {
      this.currentNode = this.currentNode.next;
    }
    return this;
  }

  current() {
    return this.currentNode;
  }
}

module.exports = class linkedList {
  head;
  tail;
  length;
  unique;
  constructor(unique) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.unique = unique ?? false;
  }

  begin() {
    return new LinkedListIterator(this.head);
  }

  printList() {
    let printData = "";
    for (let itr = this.begin(); itr.current() != null; itr.next()) {
      printData += itr.data() + " -> ";
    }
    console.log(printData);
  }

  isExist(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    for (let itr = this.begin(); itr.current() !== null; itr.next()) {
      if (itr.data() === data) {
        return itr.current();
      }
    }
    return null;
  }

  findParent(node) {
    for (let itr = this.begin(); itr.current() != null; itr.next()) {
      if (itr.current().next == node) {
        return itr.current();
      }
    }
    return null;
  }

  canInsert(data) {
    if (this.unique && this.isExist(data)) {
      console.log("already exist!");
      return false;
    } else {
      return true;
    }
  }

  insertLast(data) {
    if (!this.canInsert(data)) return;
    let newNode = new LinkedListNode(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  insertAfter(nodeData, data) {
    if (!this.canInsert(data)) return;
    let node = this.find(nodeData);
    if (!node) return;
    let newNode = new LinkedListNode(data);
    newNode.next = node.next;
    node.next = newNode;
    if (this.tail == node) {
      this.tail = newNode;
    }
    this.length++;
  }

  insertBefore(nodeData, data) {
    if (!this.canInsert(data)) return;
    let node = this.find(nodeData);
    let newNode = new LinkedListNode(data);
    newNode.next = node;
    let parent = this.findParent(node);
    if (parent == null) {
      this.head = newNode;
    } else {
      parent.next = newNode;
    }
    this.length++;
  }

  deleteNode(nodeData) {
    let node = this.find(nodeData);
    if (node == null) return;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else if (this.head == node) {
      this.head = node.next;
    } else {
      let parent = this.findParent(node);
      if (this.tail == node) {
        this.tail = parent;
      } else {
        parent.next = node.next;
      }
    }
    node = null;
    this.length--;
  }
};
