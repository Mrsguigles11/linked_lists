class Node {
    constructor() {
      this.value = null;
      this.nextNode = null;
    }
  }
  
  class LinkedList {
    head;
    end = null;
  
    append(value) {
      let newNode = new Node();
      newNode.value = value;
      newNode.nextNode = this.end;
      if (this.head == undefined) {
        this.head = newNode;
        return;
      }
  
      let temp = this.head;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }
      temp.nextNode = newNode;
    }
  
    prepend(value) {
      let newNode = new Node();
      newNode.value = value;
      if (this.head == undefined) {
        this.head = newNode;
        return;
      }
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  
    toString() {
      if (this.head == undefined) {
        console.log("Nothing added yet!");
        return;
      }
      let temp = this.head;
      while (temp != null) {
        console.log(temp.value);
        temp = temp.nextNode;
      }
      console.log(temp);
    }
  
    size() {
      let temp = this.head;
      let count = 0;
      while (temp != null) {
        count++;
        temp = temp.nextNode;
      }
      console.log(count);
    }
  
    printHead() {
      console.log(this.head);
    }
  
    printTail() {
      if (this.head == undefined) {
        console.log("Nothing added yet!");
        return;
      }
      let temp = this.head;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }
      console.log(temp);
    }
  
    at(index) {
      let temp = this.head;
      let count = 0;
      while (temp != null) {
        if (count === index) {
          console.log(temp);
          return;
        }
        count++;
        temp = temp.nextNode;
      }
    }
  
    pop() {
      if (this.head == undefined) {
        console.log("Nothing added yet!");
        return;
      }
      let temp = this.head;
      while (temp.nextNode.nextNode != null) {
        temp = temp.nextNode;
      }
      delete temp.nextNode;
      temp.nextNode = this.end;
    }
  
    contains(value) {
      let temp = this.head;
      while (temp != null) {
        if (temp.value === value) {
          console.log("True!");
          return;
        }
        temp = temp.nextNode;
      }
      console.log("False!");
    }
  
    find(value) {
      let temp = this.head;
      let count = 0;
      while (temp != null) {
        if (temp.value === value) {
          console.log(count);
          return;
        }
        count++;
        temp = temp.nextNode;
      }
      console.log(null);
    }
  
    insertAt(value, index) {
      let newNode = new Node();
      newNode.value = value;
      let temp = this.head;
      let count = 0;
      while (temp != null) {
        if (count === index - 1) {
          newNode.nextNode = temp.nextNode;
          temp.nextNode = newNode;
          return;
        }
        count++;
        temp = temp.nextNode;
      }
    }
  
    removeAt(index) {
      let temp = this.head;
      let count = 0;
      while (temp != null) {
        if (count === index - 1) {
          const storedNode = temp.nextNode.nextNode;
          delete temp.nextNode;
          temp.nextNode = storedNode;
          return;
        }
        count++;
        temp = temp.nextNode;
      }
    }
  }
  
  