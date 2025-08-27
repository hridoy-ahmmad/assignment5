const heartReceived = document.getElementById('heart-received')
const hearts = document.querySelectorAll('.heart')
for (const heart of hearts) {
    heart.addEventListener('click', function () {
        let count = parseInt(heartReceived.innerText)
        heartReceived.innerText = count + 1
    })
}




