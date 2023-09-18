const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) })

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) })

function sortWords(array) {
    return new Promise((resolve, reject) => {
        if (array) {
            resolve(array.sort());
        } else {
            reject('Error: Something went wrong with sorting words.')
        }
    })
}

function makeAllCaps(array) {
    return new Promise((resolve, reject) => {
      if (array) {
          resolve(array.sort());
      } else {
          reject('Error: Something went wrong with sorting words.')
      }
    })
}

console.log(sortWords(arrayOfWords));
console.log(sortWords(complicatedArray));
  