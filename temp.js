const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved")
    },100)
})
p.then((e) => {
    throw new Error("custom error")
}).catch(e => {
    console.log("asd", e);
})