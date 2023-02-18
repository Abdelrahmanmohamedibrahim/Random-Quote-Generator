const quote_text = document.querySelector(".quote")
let author_name = document.querySelector(".author .name")
let quote_btn = document.querySelector("button")
const sound_btn = document.querySelector(".sound")
const copy_btn = document.querySelector(".copy")


function random_quote()
{
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>
    {
        quote_btn.innerText = "Loading....."
        console.log(result)
        quote_text.innerText = result.content
        author_name.innerText = result.author
        quote_btn.innerText = "New Quote"
    })
}

quote_btn.addEventListener("click",random_quote)

sound_btn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quote_text.innerText} by ${author_name.innerText}`)
    speechSynthesis.speak(utterance)
})
copy_btn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quote_text.innerText)
})