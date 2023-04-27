class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }


  push(val) {
    let node = new Node(val,)
    let current = this.head
    console.log("ooo")
    while(current){
      if (current.next ){
        current = current.next
      }else{
        current.next =  node
      }
    }
    
  }

  unshift() {
    this.head =  new Node(val,this.head)

  }

  log(){
    console.log(this.head)
  }


}

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}


let l = new LinkedList()
l.push(10)
l.push(20)



l.log()