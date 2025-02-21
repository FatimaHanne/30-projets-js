const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
    let response = await fetch(
      "https://emoji-api.com/emojis?access_key=5bb8e457f2e2c75adbc55abcd3d73110c721affa");
  
     data = await response.json();
       for (let i=0; i<1500; i++){
        emoji.push({
            emojiName:data[i].character,
            emojiCode:data[i].unicodeName,
        })
    } 
} 

getEmoji();


btnEl.addEventListener("click", ()=>{
     const randomNum =  Math.floor(Math.random()*emoji.length);
     btnEl.innerText = emoji[randomNum].emojiName;
     emojiNameEl.innerText = emoji[randomNum].emojiCode
     
})