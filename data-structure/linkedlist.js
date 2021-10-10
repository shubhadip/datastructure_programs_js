var linkedList = function(){
    var length = 0
    var head = null

    var Node  = function(data){
        this.element = data
        this.next = null
    }
    
    this.head = function(){
        return head
    }

    this.add = function(elementToAdd){
        var node = new Node(elementToAdd)
        if(head == null){
            head = node
        }else{
            var currentNode = head
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        length++
    }

    this.remove = function(elementToRemove){
        var currentNode = head
        var previousNode
        if(currentNode.element == elementToRemove){
            head = currentNode.next
        }else{
            while(currentNode.element !== elementToRemove){
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next
        }
        length--
    }

    this.empty = function(){
        return this.length == 0
    }

    this.indexOf = function(element){
        var currentNode = head
        var index = -1
        while(currentNode){
            if(currentNode.element == element){
                return index
            }
            index ++
        }
        return -1
    }

    this.elementAt = function(index){
        if(index >= this.size()){
            return ('No Element At Position '+index +' :( ' )
        }
        var currentNode = head
        var initialIndex = 0
        while(initialIndex < index){
            currentNode = currentNode.next
            initialIndex++
        }
        return currentNode.element
    }
    this.size = function(){
        return length
    }
}

var ll = new linkedList()

ll.add('test')
ll.add('test1')
ll.add('test2')

console.log('isEmpty:'+ll.empty())

console.log('Length:'+ll.size())
ll.remove('test2')
console.log('Length:'+ll.size())
console.log('ElementAt 0 :',ll.elementAt(0))
console.log('ElementAt 1 :',ll.elementAt(1))
console.log('ElementAt 2 :',ll.elementAt(2))