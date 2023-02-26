// Global Import
import "./font.js"
import "./fetchData.js"
import { getElement, getWord, getAllElement } from "./utils.js";
import getApi from "./fetchData.js"

const input = getElement('#main-input')
const sub = getElement('#sub')
const wordEl = getElement('#word')
const phonetic = getElement('#phonetic')
const audio = getElement('#audio')
const audioBtn = getElement('#audio-btn')
const source = getElement('#source-url')

const mainContainer = getElement('.main-container')
const meaningsContainer = getElement('#meanings-container')


async function displayData(word) {

    
        const data = await getApi(getWord(word))
        // console.log(data)

        if (data && data.length > 0) {

            mainContainer.classList.remove('hidden')
            document.querySelector('#pre-section').classList.add('hidden')
            meaningsContainer.innerHTML = ''
        

            const obj = {
                name: data[0].word,
                phonetic: data[0]?.phonetic || '',
                sourceUrl: data[0]?.sourceUrls[0] || '',
                meanings: data[0].meanings, 
                audio: data[0].phonetics[0].audio
            }
            
            wordEl.innerText = obj.name
            phonetic.innerText = obj.phonetic
            if(audio){
                audio.setAttribute('src', obj.audio);
            }
            source.setAttribute('href', obj.sourceUrl);
            source.innerText = obj.sourceUrl          

            
            obj.meanings.forEach((obj) => {
                // console.log(obj)
                const article = document.createElement('article')
                article.innerHTML = `
                    <div class="flex items-center w-full mb-10">
                    <h3 class="font-medium text-lg dark:text-white font-lob tracking-wide">${obj.partOfSpeech}</h3>
                    <div class="ml-3 border w-full bg-lightGray h-[.1]"></div>
                </div>
                <div class="mb-10 ">
                    <h1 class="text-lg font-normal text-lightGray mb-2">Meaning</h1>
                    <ul class="flex flex-col gap-3 mb-5 dark:text-white meanings-container">
                    ${obj.definitions.map((def) => {
                            return `<li class="list-disc marker:text-boldPurple">"${def.definition}"</li>`
                    }).join('')}
                    </ul>
                    <h3 class="font-normal text-lg text-lightGray">Synonyms</h3>
                    <h6 class="break-words ml-7 font-bold text-lg text-boldPurple">${obj.synonyms}</>
                </div>  
                `
                return meaningsContainer.appendChild(article)
        })
    } else {
        alert('word not found in dictionary!!!')
    }
}




sub.addEventListener('submit', (e) => {
    e.preventDefault()
    let value = input.value;
    input.value = null
    displayData(value)
})

audioBtn.addEventListener('click', () => {
    const audioSrc = audio.getAttribute('src');
    if (audioSrc) {
        audio.play();
    } else {
        audioBtn.classList.add('cursor-not-allowed')
    }
})


const html = getElement('html')
const switchBtn = getElement('#darkMode')


// Dark Mode switch
switchBtn.addEventListener('change', () => {
    // html.classList.toggle('dark')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
    }else {
        html.classList.add('dark')
    }
})       
