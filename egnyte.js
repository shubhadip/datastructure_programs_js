egnyte
//1.

// 'use client';

// import { useEffect, useState } from 'react';

// const StaleClosure = () => {
    
//     const [count, setCount] = useState(0)
//     console.log('first', count);

//     useEffect(() => {
//         setCount(count => count + 1)
//     },[])

//     useEffect(() => {
//         console.log('effect', count);
//         setTimeout(() => {
//             console.log('timeout', count);
//         }, 100)
//     },[])

//     return null
// }

// export default StaleClosure;

// 2.
// firstRender = useFirstRender();
// function useFirstRender() {
//     const [firstRender, setFirstRender] = useState(false);
//     useEffect(() => {
//         setFirstRender(true)
//     }, [])
//     return [
//         firstRender
//     ]
// }

// 3. 

// count() // 1
// count() // 2 
// count() // 3
// count.reset() // 0


//4. 

// console.log(add1(1,2))
// console.log(add2(1,2))
// console.log(add3(1,2))
// console.log(add4(1,2))
// function add1(a,b) {
//     return a + b
// }

// const  add2 = (a,b) =>  {
//     return a + b
// }
// let add3 = function (a,b) {
//     return a + b
// }
// var add4 = function (a,b) {
//     return a + b
// }


// 2. Event loop    

// setTimeout(() => console.log(1), 0);

// console.log(2);

// new Promise(res => {
//   console.log(3)
//   res();
// }).then(() => console.log(4));

// console.log(5);
