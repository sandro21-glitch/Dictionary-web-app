
function getElement(elem) {
    const el = document.querySelector(elem)
    if(el) {
        return el
    }
    throw new Error('element not found');
}

function getAllElement(elem) {
    const el = document.querySelectorAll(elem)
    if(el) {
        return el
    }
    throw new Error('element not found');
}

function getWord(word) {
    const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    return api
}

export { 
    getElement,
    getWord,
    getAllElement
 }