class DoublyLinkList {
    constructor(value){
        this.head = null
        this.tail = null
        this.length = 0
        this.addNode(value)
        
    }
    
    addNode(value){
        const newNode = {value} // this has to be object so that we can add next refernce to new Node
        let presentNode = this.head // check if node exists in linklist
        newNode.next = this.head // point new node to position where head is pointing, this make link for newNode with existing Node bcoz head will be pointing to currently added node
        newNode.prev = null
        this.head = newNode // point head to newNode instead of where it was pointing
        if(presentNode){presentNode.prev = newNode}
        this.length ++ 
    }

    removeNode(value){
        if(this.length == 0){
            console.log("Empty Linklist");
            return
        }

        let currentNode = this.head
        
        while(currentNode && (currentNode.value != value)){
            currentNode = currentNode.next
        }

        if(currentNode.next == null){
            let prevNode = currentNode.prev
            prevNode.next = null
            currentNode.prev = null
        }else if(currentNode.prev == null){
            let nextNode = currentNode.next
            this.head = nextNode
            nextNode.prev = null
            currentNode.next = null
        }else{
            let prevNode = currentNode.prev
            let nextNode = currentNode.next
            prevNode.next = nextNode
            nextNode.prev = prevNode
            currentNode.next = null
            currentNode.prev = null
        }
        this.length--
    }

    printList(){
        let currentNode = this.head
        while( currentNode != null){
            console.log(currentNode.value,currentNode)
            currentNode = currentNode.next
        }
    }
}

let doublyLinkList  = new DoublyLinkList("first")

//Add Nodes
doublyLinkList.addNode("second")
doublyLinkList.addNode("third")

//Remove Nodes
doublyLinkList.removeNode("third")

// PrintList
doublyLinkList.printList()

//DoublyLinklist
console.log(doublyLinkList);
