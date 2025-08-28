const heartReceived = document.getElementById('heart-received')
const hearts = document.querySelectorAll('.heart')
for (const heart of hearts) {
    heart.addEventListener('click', function () {
        let count = parseInt(heartReceived.innerText)
        heartReceived.innerText = count + 1
    })
}

// const clickCount = document.getElementById('copied')
// const copies = document.querySelectorAll('.click-to-copy')
// for (const copy of copies){
//     copy.addEventListener('click',function(){
//         let count = parseInt(clickCount.innerText)
//         clickCount.innerText = count + 1
//         alert('The number has been Copied')

//     })
// }

const clickCount = document.getElementById('copied')
const copies = document.querySelectorAll('.click-to-copy')

for (const copy of copies) {
    copy.addEventListener('click', function () {
        const card = copy.closest("div.card-click");
        const numberElement = card.querySelector("p.copy-number");
        const number = numberElement ? numberElement.innerText.trim() : "";

        if (!number) {
            alert("No number found!");
            return;
        }

        navigator.clipboard.writeText(number).then(() => {
            let count = parseInt(clickCount.innerText);
            clickCount.innerText = count + 1;

            alert(`The number "${number}" has been Copied`);
        }).catch(err => {
            console.error("Failed to copy:", err);
            alert("Failed to copy the number!");
        });
    })
}





// const calls = document.querySelectorAll('.click-to-call');

// for (const call of calls) {
//     call.addEventListener('click', function () {
//         const card = call.closest("div.card-click");
//         const headingElement = card.querySelector("h1");
//         const heading = headingElement ? headingElement.innerText.trim() : "Unknown Service";

//         const numberElement = card.querySelector("p.copy-number");
//         const number = numberElement ? numberElement.innerText.trim() : "No Number";

//         alert(`Call ${heading}: ${number}`);
//     });
// }


const calls = document.querySelectorAll('.click-to-call');
const lifeElement = document.getElementById('life'); 

for (const call of calls) {
    call.addEventListener('click', function () {
        let currentLife = parseInt(lifeElement.innerText); 

        if (currentLife <= 0) {
            alert("You don't have coin");
            return; 
        }

        
        currentLife = currentLife - 20;
        if (currentLife < 0) currentLife = 0;
        lifeElement.innerText = currentLife;

        const card = call.closest("div.card-click");
        const headingElement = card.querySelector("h1");
        const heading = headingElement ? headingElement.innerText.trim() : "Unknown Service";

        const numberElement = card.querySelector("p.copy-number");
        const number = numberElement ? numberElement.innerText.trim() : "No Number";

        alert(`Call ${heading}: ${number}`);
    });
}

