function  getDocStats(currenttext) {
    currenttext=currenttext.replace(/(?:\r\n|\r|\n|\.|\,)/g, ' ');

    var fileContent = currenttext.toLowerCase();

    //regular expression to return all of words  into an array
    var wordArray = fileContent.match(/\b\S+\b/g)
    var wordDictionary = {};


    //count every word in the wordArray
    for (let word in wordArray) {
        let wordValue = wordArray[word];
        //if you find more of the same word add 1
        if (wordDictionary[wordValue] > 0) {
            wordDictionary[wordValue] += 1
        } else {
            //if you can't find more than one
            wordDictionary[wordValue] = 1

        }
    }

    let wordList = sortProprties(wordDictionary);

    //return top 5 words
    let top5Words = wordList.slice(0, 5)
    let least5Words = wordList.slice(-5, wordList.Length);

    let docLength = "Document Length:" + fileContent.length
    let worCount = "Word Count:" + wordArray.length


    return [top5Words,least5Words,docLength,worCount]
}



function sortProprties(wordDictionary) {
    //convert object to an array
    let returnArray = Object.entries(wordDictionary);
    //sort the array
    returnArray.sort((a, b) => {
        return b[1] - a[1];
    })
    return returnArray
}












module.exports={
    getDocStats
}