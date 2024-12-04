const api_url="http://api.quotable.io/random";

async function getQuote(url) {
        const response=await fetch(url);
        var data=await response.json();
        console.log(data);
        
        quotes.innerHTML=data.content
        author.innerHTML=data.author
        
}

getQuote(api_url);


let quotes=document.getElementById("quote")
let author=document.getElementById("author")


