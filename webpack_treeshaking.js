// this tree shakes
// to import 
// import utils from 'utils'
// utils.one() ....
const one = function(){
    console.log('one')
}
const two = function(){
    console.log('two')
}
const three = function(){
    console.log('three')
}
const four = function(){
    console.log('four')
}
const five = function(){
    console.log('five')
}


export default {
    one,
    two,
    three,
    four,
    five
}

// this tree shakes
// to import 
// import one from 'utils'
// one() ....
// export const one = function(){
//     console.log('one')
// }
// export const two = function(){
//     console.log('two')
// }
// export const three = function(){
//     console.log('three')
// }
// export const four = function(){
//     console.log('four')
// }
// export const five = function(){
//     console.log('five')
// }


// this wont tree shake
// const data = {
//     one: () => {
//         console.log('one')
//     },
//     two: () => {
//         console.log('two')
//     }
// }


// export default data