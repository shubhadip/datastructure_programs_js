var Queue = function(){
    this.front = null
    this.back = null
    var Node = function(value){
        this.data = value
        this.next = null
    }

    this.enqueue = function(value){
        var node = new Node(value)
        if(!this.front){
            this.front = this.back = node
        }else{
            this.back.next = node
            this.back = node
        }
    }

    this.dequeue = function(){
        if(!this.front){
            this.front = this.front.next
        }else{
            this.back = null
        }
    }
}

var q = new Queue()
q.enqueue(12)
q.enqueue(23)
q.enqueue(34)
q.dequeue()
console.log(q)