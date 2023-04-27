class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size++
  }

  insertLast() {
    let current = this.head
    let node = new Node(this.head)

    if (!this.head) {
      this.head = node
    } else {
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }
  insertAtIndex() {

  }

  log() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }

  isPalindrome() {
    let x = []
    let result = true
    let current = this.head


    while (current) {
      x.push(current.data)
      current = current.next
    }

    if (x.length == 2) {
      // console.log("falsy")
      return false
    }

    for (let i = 0; i < x.length / 2; i++) {
      if (x[i] != x[x.length - 1 - i]) {
        result = false
        break;
      }
    }

    // console.log("isPalindrome", x, result)
    return result
  }

  findMiddle() {
    let x = [], result
    let current = this.head
    while (current) {
      x.push(current.data)
      current = current.next
      // console.log("what is" + current.data)
    }
    // console.log("my arr", x)
    if (x.length % 2 == 1) {
      result = x[Math.floor(x.length / 2) + 1]
    } else {
      result = x[x.length / 2]
    }
    return result
  }

  converBinaryToInteger() {
    let result = 0
    let current = this.head
    let arr = []
    while (current) {
      arr.push(current.data)
      current = current.next
    }

    for (let i=arr.length-1;i>=0 ; i--){
      result+= arr[i] * Math.pow(2,i)
    }

    console.log("arr" , arr,result)

    return result


  }

}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next
  }
}


const ll = new LinkedList()
ll.insertFirst(1)
ll.insertFirst(0)
ll.insertFirst(1)
// ll.insertLast(0)
// ll.insertLast(1)
// ll.insertLast(1)
// ll.insertLast(1)

// console.log(ll.findMiddle())
ll.converBinaryToInteger()


// ll.log()
// ll.isPalindrome()