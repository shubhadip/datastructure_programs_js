const combs = (elements) => {
    if(elements.length === 0) return [[]];
    const firstElem = elements[0];
    const rest = elements.slice(1);
    const combsWOfirst = combs(rest);
    const combsWFirst = [];

    combsWOfirst.forEach((comb) => {
        const singleCombWFirst = [...comb,firstElem];
        combsWFirst.push(singleCombWFirst);
    })
    return [...combsWFirst, combsWOfirst]
}

console.log('combs', combs(['a','b','c']))