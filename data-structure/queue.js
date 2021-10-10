class Queue {
    constructor(){
        this.length = 0
        this.data = {}
        this.lowestCount = 0
    }

    enqueue(value){
        let count = this.length++
        let obj = {
            [count]: value
        }
        this.data = Object.assign({},this.data,obj)
    }

    dequeue(){
        if(this.length>0){
            let topPosition = this.lowestCount
            delete this.data[topPosition]
            this.length--
            this.lowestCount++
        }else{
            console.log("Queue is Empty")
        }
    }

    peek(){
        return this.length>0 ? this.data[this.lowestCount] : undefined
    }

    isEmpty(){
        return !this.length
    }
}

let queue = new Queue()

//add to queue
queue.enqueue('shubh')
queue.enqueue('deep')
queue.enqueue('xxx')
queue.enqueue('yyy')
queue.enqueue('uuu')
queue.enqueue('ttt')

console.log("Queue is : ", queue)

//remove from queue
queue.dequeue()

//get first element from queue
const result = queue.peek()
if(result){
    console.log("First element in Queue : ", result)
}else{
    console.log("Queue is Empty")
}

//remove from queue
const isEmpty = queue.isEmpty()
console.log("Queue is Empty : ", isEmpty)

console.log("Queue is : ", queue)
