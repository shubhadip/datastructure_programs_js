class CirularLinkList {

    constructor(value){
        this.head = null
        this.length = 0
        this.addNode(value)
    }

    addNode(value){
        let newNode = {value}
        if(this.head == null){
            newNode.next = this.head
            this.head = newNode
        }else{
            newNode.next = this.head
            let currentNode = newNode
            // console.log(currentNode.next,this.head)
            while(currentNode.next!=null){
                currentNode = currentNode.next
            }
            // console.log(currentNode)
            currentNode.next = newNode
            this.head = newNode
        }
        this.length++
    }
    printList(){
        let currentNode = this.head
        console.log(currentNode)
        console.log(currentNode.next)
        // console.log(currentNode.value)
        while(currentNode.next != currentNode){
            console.log(currentNode.value)
            currentNode = currentNode.next
        }
    }
}

let CircularLinkList = new CirularLinkList('first')
//Add Nodes
CircularLinkList.addNode("second")
// CircularLinkList.addNode("third")
// CircularLinkList.addNode("fourth")

// PrintList
CircularLinkList.printList()

console.log(CircularLinkList);
