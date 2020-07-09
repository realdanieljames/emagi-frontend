const search = require('./emagi-search.js')
const random = require('./emagi-random.js')
const symbols = require('./emagi-symbols')
const words = require('./emagi-words.js')




if (process.argv[2] === 'random') {
    console.log(random(symbols))
}


else if (process.argv[2] === 'search') {
    console.log(search(process.argv[3]))
}


else if (process.argv[2] === 'convert') {
    converted = []
    for (const word of process.argv) {
        if (words.includes(word)){
            converted.push(search(word))
        }

        else if (!words.includes(word)){
            converted.push(word)
        }
    }

    //clean up the result by removing the first 3 process.argv default terms
    chopFirst3 =(converted.slice(3))
    result = chopFirst3.join(' ')
    console.log(result)
}

else {
    console.log(`Please type one of the following:`)
    console.log(`* "convert" followed by a sentence to get emoji replacement`)
    console.log(`* "search" followed by a word to search for matching emojis`)
    console.log(`* "random" to get a random emoji`)
}

