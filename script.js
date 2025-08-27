const heartReceived = document.getElementById('heart-received')
const hearts = document.querySelectorAll('.heart')
for (const heart of hearts) {
    heart.addEventListener('click', function () {
        let count = parseInt(heartReceived.innerText)
        heartReceived.innerText = count + 1
    })
}

const clickCount = document.getElementById('copied')
const copies = document.querySelectorAll('.click-to-copy')
for (const copy of copies){
    copy.addEventListener('click',function(){
        let count = parseInt(clickCount.innerText)
        clickCount.innerText = count + 1
        
    })
}


