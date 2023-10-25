// let inputword = document.querySelector("input").value;

let  url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const searchButton = document.querySelector("button");
const playAudio = document.querySelector("audio");
const fetchResult = document.querySelector(".fetchResult");


searchButton.onclick = () => {
    let inputword = document.querySelector("input").value;
    console.log(inputword)
    fetch(url+inputword).then((r) => r.json()).then((d)=>


fetchResult.innerHTML = `
<div class="word">
    <h1>${d[0].word}</h1>
    <audio src=""></audio>
    <i class="fa-solid fa-volume-high"></i>
</div>
<p><span>${d[0].meanings[2].partOfSpeech}</span>${d[0].phonetic}</p>
<p>${d[0].meanings[2].definitions[1].definition}</p>
<h3><i>${d[0].meanings[2].definitions[1].example}</i></h3>`
);
}
// fetch(url).then((r) => r.json()).then((d)=> console.log(d))



//add try and catch
// enable search when someone press enter
// handl error that can occur if there is no part of speech or if one of the options is misssing
//https://www.youtube.com/watch?v=PUkgK7TI0x0
//https://dictionaryapi.dev/