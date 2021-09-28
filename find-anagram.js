var words = ["dell", "ledl", "abc", "cba","def","sdf"];

// The output object
var anagrams = {};

for (var i in words) {
    var word = words[i];

    // sort the word like you've already described
    var sorted = word.split('').sort().join('')

    // If the key already exists, we just push
    // the new word on the the array
    if (anagrams[sorted] != null) {
        anagrams[sorted].push(word);
    } 
    // Otherwise we create an array with the word
    // and insert it into the object
    else {
        anagrams[sorted] = [ word ];
    }
}

// Output result
for (var sorted in anagrams) {
    var words = anagrams[sorted];
    var out = [];
    for (var n in words) {
        out.push(words[n]);
    }
    console.log(out);
}
