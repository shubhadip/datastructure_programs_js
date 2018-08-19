class SinglyLinkList {
    constructor(details){
        this.head = null
        this.length = 0
        this.addNode(details)
    }

    addNode(value){
        const newNode = {value} // this has to be object so that we can add next refernce to new Node
        newNode.next = this.head // point new node to position where head is pointing, this make link for newNode with existing Node bcoz head will be pointing to currently added node
        this.head = newNode // point head to newNode instead of where it was pointing
        this.length ++ 
        return this;
    }

    removeFromHead(){
        if(this.length >0){
            const value = this.head.value;
            this.head = this.head.next;
            this.length--
            console.log("removed Node : " + value)
            return this
        }else{
            console.log("Linklist is empty");
        }
    }

    removeFromAnyWhere(value){
        let previousNode = this.head
        let currentHead  = previousNode.next // this.head.next

        if (this.head.value === value) {
            this.removeFromHead();
            return this;
        }

        while(currentHead && (currentHead.value != value)){
            previousNode = currentHead
            currentHead = currentHead.next
        }
        if(currentHead){
            previousNode.next = currentHead.next
            this.length--
            console.log("Current Linklist : ",this)
        }else{
            console.log("Node with " + value + " is not present")
        }
    }

    checkIfNodePresent(value){
        let currentHead = this.head
        while(currentHead && (currentHead.value != value)){
            currentHead = currentHead.next
        }
        if(currentHead){
            console.log("Node Present : ",currentHead)
        }else{
            console.log("Node with " + value + " is not present")
        }

    }
}

let LinkList = new SinglyLinkList('first')
//Add Nodes
LinkList.addNode("second")
LinkList.addNode("third")
LinkList.addNode("fourth")

// Actual LinkList Created
console.log(LinkList)

//Remove Node
// LinkList.removeFromHead()

//Remove Node
// LinkList.removeFromAnyWhere('second')

//Check if Node is Present
LinkList.checkIfNodePresent('fifth')
