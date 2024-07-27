function letterFinder(word, match) {
    var condition = typeof (word) == 'string' && word.length >= 2;
    var condition2 = typeof (match) == 'string' && match.length == 1;
    if (condition && condition2) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === match) {
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    } else {
        console.log('Please pass correct arguments to the function.')
    }

}

letterFinder('hello', 'l');