class Stack{
    constructor(){
        this.length = 0;
        this.data = {}
    }


    pop(){
        if(this.length > 0){
            let lastposition = this.length-1
            console.log("Element to be deleted : "+ this.data[lastposition])
            delete this.data[lastposition]
            this.length--
            console.log(this)
        }
    }

    push(value){
        let count = this.length++
        let obj = {
            [count]: value
        }
        this.data = Object.assign({},this.data,obj)
    }

    peek(value){
        console.log(this.data[this.length-1])
    }

    size(){
        console.log(this.length)
    }

    empty(){
        this.data = {}
        this.length = 0
    }

}

let stack = new Stack()
//push
stack.push('shubh')
stack.push('deep')
stack.push('xxx')
stack.push('yyy')
stack.push('ttt')
stack.push('uuu')
//pop
stack.pop()
//peek
stack.peek()
//empty
stack.empty()
console.log(stack);
