const linkedList = require("./linkedList.js");

let list = new linkedList(true);
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
// list.insertLast(3);
// list.insertLast(3);

list.insertAfter(list.find(2), 98);

list.printList();
console.log("lenght: ", list.length);
