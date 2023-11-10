// Example 1:

// Input: 
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

const s = "anagram"; // n // m
const t = "nagaram"; // n  // m


function getMap(s) {
    const s1Map = {}
    for(let i = 0; i < s.length; i++) {
        s1Map[s[i]] = (s1Map[s[i]] || 0 ) + 1
    }
    return s1Map;
}

function isAnagram(s1, s2){
    
    if(s1 === undefined || s2 === undefined) {
        return false;
    }
    
    if(typeof s1 !== typeof s2) {
        return false
    }

    if(typeof s1 !== 'string' || typeof s2 !== 'string' ) {
        return false
    }

    if(s1.length !== s2.length) {
        return false
    }
    
    const s1Map = getMap(s1);
    const s2Map = getMap(s2);
    
    let isAnagram = true;
    Object.keys(s1Map).forEach((e) => {
        if(s1Map[e] !== s2Map[e]) {
            isAnagram = false
        }
    })
    return isAnagram
} 
 
 
console.log('isAnagram', isAnagram(s, t));


// 2. Event loop    

// setTimeout(() => console.log(1), 0);

// console.log(2);

// new Promise(res => {
//   console.log(3)
//   res();
// }).then(() => console.log(4));

// console.log(5);


// // order og hosting 
// console.log(foo());

// let bar = 'bar';

// function foo() {
//   return bar;
// }

// bar = 'baz';

// // baz


// Promise.resolve(1)
//   .then(x => { throw x }) // 1
//   .then(x => console.log(`then ${x}`)) 
//   .catch(err => console.log(`error ${err}`)) //  error 1
//   .then(() => Promise.resolve(2)) // 3 
//   .catch(err => console.log(`error ${err}`))
//   .then(x => console.log(`then ${x}`)); //  then 2
// then 2



    // useReducer vs useState


    // Two components Parent and child  - child component button click parent component text display.



// const Parent = () => {
//     [val, setVal]
    
//     const handleClick = useCallback(async () => {
//         let valp = await fetch('url')
//         valp = await valp.json()
//         setVal(valp);
//     }, []);

//     return (
//         <ChildComponent fn1={handleClick} />
//     )

// }


// const ChildComponent = ({fn1}) => {

//     const handleClick = () => {
//         props.fn1()
//     }
//     return <>
//         <div>I am </div>
//         <Button onClick={handleClick}>Btn</Button>
//     </>
// }



// function sum(...x) {
//     let total = x.reduce((acc,init) => acc + init, 0);
//     function add(...y)  {
//         if(y.length > 0) {
//             total = y.reduce((acc,init) => acc + init, total);
//             return add
//         }else {
//             return total
//         }
//     }
//     return add 
// }
// console.log(sum(1)(2)(3)(4)(5)(6)());


// setTimeout(() => console.log(1), 0);

//     console.log(2);
    
//     Promise.resolve().then(() => console.log(9))
    
//     new Promise(res => {
//         console.log(3) // goes into js stack
//         res();
//     }).then(() => console.log(4));

// console.log(5);
