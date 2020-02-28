const reverse = (data) => {
    var t = ''
    var i = 1
    while(t.length < data.length){
        let lastElement = data[data.length-i]
        t = t.concat(lastElement)
        i++;
    }
    return t
}

const data = 'madam'
console.log('string',reverse(data))
const numb = '1234'
console.log('number',reverse(numb))