var stack = function(){
    this.count =  0
    this.storage = {}

    this.push = function(value){
        this.count++
        this.storage[this.count] = value
    }

    this.pop = function(){
        var currentValue = this.storage[this.count]
        delete this.storage[this.count]
        return currentValue
    }

    this.length = function(){
        return this.count
    }

    this.getContent = function(){
        return this.storage
    }

    this.peek = function(){
        return this.storage[this.count-1]
    }
}

var ss  = new stack()
ss.push('asd')
ss.push('a4d')
ss.push('a5d')
var data = ss.getContent()
console.log("******************************************* Content *******************************************")
Object.keys(data).map(function(key){
    console.log('key:' + key)
    console.log('value: ' + data[key])
})
var elementRemoved = ss.pop()
console.log('Removed Element : ' + elementRemoved)
console.log("******************************************* Content After Removing *******************************************")
Object.keys(data).map(function(key){
    console.log('key:' + key)
    console.log('value: ' + data[key])
})
console.log('TopMostElement: ' + ss.peek())