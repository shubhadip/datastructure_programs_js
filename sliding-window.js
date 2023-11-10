// // max sum of subarray k
// // i:
// // o: 
// // const arr = [2,5,1,8,2,9,1];
// // const winSize = 3;

// // let arr = [100, 200, 300, 400]
// // let winSize = 2;


// // let arr = [1, 3, -1, -3, 5, 3, 6, 7]
// // let winSize = 3

// // let m = 0;
// // let n = winSize;
// // let op = 0;
// // for(let i = 0; i<= arr.length-n; i++) {
// //     const start = [i]
// //     const val = [...arr].splice(start,winSize).reduce((acc,ini) => acc+ ini, 0);
// //     if(val > op) {
// //         op = val
// //     }
// // }

// // console.log('max sum of subArray', op);



// // arr = [-8, 2, 3, -6, 10]
// // winSize = 2;


// // m = 0;
// // n = winSize;
// // op = Infinity;
// // const arrOp = [];
// // for(let i = 0; i<= arr.length-n; i++) {
// //     const start = [i]
// //     const val = [...arr].splice(start,winSize).sort()[0]
// //     if(val < Infinity) {
// //         if(val > 0) {
// //             arrOp.push(0)
// //         }else {
// //             arrOp.push(val)
// //         }
// //     }
// // }
// // console.log('min of subArray', arrOp);

// word= 'forxxorfxdofr' // (n)
// match = 'for'

// arr = 'forxxorfxdofr'.split('');
// winSize = match.length
// n = winSize;

// const matchArray = match.split('');
// let count = 0;
// const val = JSON.stringify()


// function isAnagram(f1,f2) {
//     let isMatch = true;
//     for(let w = 0 ; w < f1.length; w++) {
//         if(f1[w] !== f2[w]) {
//             isMatch = false;
//         }
//     }
//     return isMatch;
// }

// for(let i = 0; i<= arr.length-n; i++) {
//     const start = [i]
//     const val = [...arr].splice(start,winSize).sort();
//     const res = isAnagram(val, matchArray);
//     if(res) {
//         count++
//     }
// }
// // console.log('count of anagrams in string', count);


// arr = [ 4 ,1, 1, 1, 2, 3, 5]
// opSum = 5

// const matches = []
// for(let i = 0; i< arr.length; i++) {
//     let initial  = arr[i];
//     for(let j= i + 1; j < arr.length - 1; j++) {
//         initial = initial + arr[j];
//         if(initial === opSum) {
//             matches.push([i, j]);
//             break;
//         }
//     }
// }

// // console.log('  Longest sub-array having sum k ', matches);

// let l = 0;
// let r = 0;
// let sum = arr[0];
// k = 5;
// let maxLen = 0;

// while(r < arr.length) {

//     if(l <=r &&  sum > k) {
//         sum -= arr[l]
//         l++
//     }

//     if(sum === k) {
//         console.log(l,r);
//         maxLen = Math.max(maxLen, r-l + 1)
//         console.log(maxLen);
//     }
//     r++
//     if(r <arr.length) {
//         sum += arr[r];
//     }
// }


// // Longest K unique characters substring

// // S = "aabacbebebe", K = 3

// arr = "aabbcc".split("");
// winSize = 1;

// i = 0;
// j = 0;
// countArr = {};
// // for(let i=0;i<arr.length;i++) {
// //     dist = new Set();
// //     dist.add(arr[i])
// //     for(let j=i+1;j<arr.length-1;j++) {
// //         dist.add(arr[j])
// //         if(dist.size === 1) {
// //             if(i+j-i > countArr) {
// //                 countArr = i+j-i
// //             }
// //             break
// //         }
// //     }    
// // }
// // // console.log('countArr', countArr);

// // Longest K unique characters substring

// let dict = {};
// let currentWindowlength = 0;
// s = 'aabbcc'
// k = 2;
// let start_window = 0
// let maxLength = 1;
// for (let i = 0; i < s.length; i++) {
//    let char = s[i];
//    dict[char] = i;
//   if (Object.keys(dict).length > k) {
//      start_window = Math.min(...Object.values(dict)); 
//      delete dict[s[start_window]];
//      start_window++;
//    }
//   currentWindowlength = i - start_window + 1;
//   maxLength = Math.max(currentWindowlength, maxLength);
// }
// // console.log('maxLength', maxLength)


// // Longest Substring  Without Repeating Characters | Variable Size Sliding Window

// s = "pwwkew"

// let longestStringLength = 0;
// startOfWindow = 0;
// j = 0;

// let characterSet = new Set();

// while (j < s.length) {
//     if (characterSet.has(s[j])) {
//         characterSet.delete(s[startOfWindow]);
//         startOfWindow += 1
//     } else {
//         j = j+1
//         characterSet.add(s[j]);
//         longestStringLength = Math.max(
//             longestStringLength,
//             characterSet.size
//         );
//     }
// }
// console.log('longestStringLength', longestStringLength);


function maxSum(arr, winSize) {
    let a = arr;
    let currSum = 0;
    let maxSum = 0;
    let r = 0;
    let l = 0;

    while(r < a.length) {
        currSum += arr[r];
        if(r > winSize - 1) {
            currSum = currSum - arr[l];
            l++
        }

        if(currSum > maxSum) {
            maxSum = currSum;
        }
        r++;
    }
    return maxSum
}


// console.log(maxSum([1, 3, -1, -3, 5, 3, 6, 7], 3))
console.log(maxSum([4,2,1,7,8,1,2,8,1,0], 3)) // 16


function minValueSubArray(arr, winSize) {
    const a = [...arr];
    let l = 0;
    let r = 0; 
    let currentMin = Infinity;
    while(r < a.length) {

        if(r >= winSize - 1) {
            currentMin = Math.min(a[l],a[r])
            console.log('currentMin', currentMin > 0 ? 0 : currentMin);
            l++;
        }
        r++
    }

}

console.log(minValueSubArray([-8, 2, 3, -6, 10], 2))


word= 'forxxorfxdofr' // (n)
match = 'for'


function checkAnagram(arr, match) {
    winSize = 3;
    let l = 0;
    let r = 0;
    let count = 0;
    let charset= '';
    while(r < arr.length) {
        charset+=arr[r]

        if(r >= match.length) {
            charset = charset.substring(1,charset.length)
            l++;
        }
        
        if(charset.length === match.length) {
            if(charset.split('').sort().join('') === match.split('').sort().join('')) {
                count++
            }
        }

        r++;
    }
    console.log('count', count);
}
checkAnagram(word, match);


function smallestSubArrayOfSum(arr, sumValue) {
    let a = [...arr];
    let l = 0;
    let r = 0;
    let currSum = 0;
    let currentMinArr = [];
    while(r < arr.length) {
        
        currSum += a[r];
        currentMinArr.push(a[r]);
    
        if(currSum > sumValue) {
            while(l <= r) {
                currSum -= arr[l];
                currentMinArr.pop()
                l++;
            }
        }

        if(sumValue === currSum) {
            console.log(currentMinArr, currentMinArr.length);
        }

        r++;
    }
}

smallestSubArrayOfSum([4,2,2,7,8,1,2,8,1,0], 8);


function longestSubStringWithDistinctCharacter(word, k){
    let wordarr = word.split('');
    let l = 0;
    let r = 0;
    let charMap = {};
    let finalVal
    while(r < wordarr.length) {

        charMap[word[r]] = (charMap[word[r]] || 0) + 1;
        
        if(Object.keys(charMap).length > k ) {
            while(Object.keys(charMap).length > k) {
                if(charMap[word[l]] > 0) {
                    charMap[word[l]] -= 1
                    if(charMap[word[l]] === 0) {
                        delete charMap[word[l]]
                    }
                }
                l++;
            }
        }
        
        if(Object.keys(charMap).length === k) {
            console.log('final', charMap);
            if(!finalVal) {
                finalVal = charMap
            }else  {
                const c = Object.values(charMap).reduce((acc,init) => acc + init, 0)
                const f = Object.values(finalVal).reduce((acc,init) => acc + init, 0)
                if(f > c) {
                    finalVal = c
                }
            }
        }
        r++;
    }
    return finalVal
};

// console.log(longestSubStringWithDistinctCharacter("aabacbebebe", 3))
console.log(longestSubStringWithDistinctCharacter("pwwkew", 3))
