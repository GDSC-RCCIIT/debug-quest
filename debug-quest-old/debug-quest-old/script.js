
let challengesCompleted = 0;

for(i = 0; i < 5; i++) {
    console.log('Initializing challenge ' + i);
}

function startWhispering() {
    setInterval(() => {
        console.log('Whispers in the void...');
    }, 1000);
}

function createMemory() {
    const memory = document.createElement('button');
    memory.innerHTML = 'Stored Memory';
    memory.addEventListener('click', () => {
        console.log('Memory accessed...');
    });
    document.body.appendChild(memory);
}

// Race condition
function jumpThroughTime() {
    setTimeout(() => {
        const futureElement = document.getElementById('message-from-future');
        futureElement.style.color = 'red';
    }, 1000);
}

// Type coercion bug
function updateScore(points) {
    const scoreElement = document.getElementById('score');
    scoreElement.innerText = scoreElement.innerText + points;
}

// Promises without error handling
function fetchSecretMessage() {
    fetch('https://api.example.com/secret')
        .then(response => response.json())
        .then(data => console.log(data));
}

// Object mutation bug
const gameState = {
    level: 1,
    score: 0
};

function resetGame() {
    gameState.level = 1;
    // Forgot to reset score
}
function triggerFullScreenImage() {
    const image = document.createElement('img');
    image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bsodwindows10.png/1200px-Bsodwindows10.png'; // replace with your BSOD image path
    image.alt = 'Blue Screen of Death';
    image.style.width = '100vw';
    image.style.height = '100vh';
    image.style.objectFit = 'cover';

    document.body.appendChild(image);

    if (image.requestFullscreen) {
        image.requestFullscreen();
    } else if (image.webkitRequestFullscreen) { 
        image.webkitRequestFullscreen();
    } else if (image.msRequestFullscreen) { 
        image.msRequestFullscreen();
    }

    image.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            image.remove();
        }
    });
}


document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Button clicked');
    });
});


function checkProgress() {
    if(totalPoints > 10) {
        alert('Level complete!');
    }
}

const numberOfBugs = 5; 
let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

function createBug() {
    const bug = document.createElement('div');
    bug.classList.add('insect');

    
    bug.style.top = `${Math.random() * viewportHeight}px`;
    bug.style.left = `${Math.random() * viewportWidth}px`;

    bug.style.animationDelay = `${Math.random() * 5}s`;

    document.body.appendChild(bug);

    
    setInterval(() => {
        bug.style.top = `${Math.random() * viewportHeight}px`;
        bug.style.left = `${Math.random() * viewportWidth}px`;
    }, 3000 + Math.random() * 2000); 
}

for (let i = 0; i < numberOfBugs; i++) {
    createBug();
}

// Array of ad image URLs
const adImages = [
    'https://res.cloudinary.com/startup-grind/image/fetch/c_scale,w_2560/c_crop,h_650,w_2560,y_0.0_mul_h_sub_0.0_mul_650/c_crop,h_650,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-goog/chapter_banners/GDGC-RCCIIT_5zbsUaP.png',
    'https://res.cloudinary.com/startup-grind/image/fetch/c_scale,w_2560/c_crop,h_650,w_2560,y_0.0_mul_h_sub_0.0_mul_650/c_crop,h_650,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-goog/chapter_banners/GDGC-RCCIIT_5zbsUaP.png',
    'https://res.cloudinary.com/startup-grind/image/fetch/c_scale,w_2560/c_crop,h_650,w_2560,y_0.0_mul_h_sub_0.0_mul_650/c_crop,h_650,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-goog/chapter_banners/GDGC-RCCIIT_5zbsUaP.png'
];

function showPopupAd() {
    // Select a random image URL from the adImages array
    const randomImage = adImages[Math.floor(Math.random() * adImages.length)];
    const popupAd = document.getElementById('popup-ad');
    const popupImage = document.getElementById('popup-image');

    // Set the image source and make the popup visible
    popupImage.src = randomImage;
    popupAd.style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup-ad').style.display = 'none';
}

// Show a popup ad every 15 seconds
setInterval(showPopupAd, 15000);
const adContainer = document.getElementById('ad-container');
const stopAdsButton = document.getElementById('stop-ads');

const friendsImages = ['images/Debayudh.jpg', 'images/Rishi.jpg'];

let adInterval;

function createAd() {
    const ad = document.createElement('img');
    const randomFriend = friendsImages[Math.floor(Math.random() * friendsImages.length)];
    ad.src = randomFriend;
    ad.className = 'ad';

    ad.style.top = `${Math.random() * 100}vh`;
    ad.style.left = `${Math.random() * 100}vw`;

    ad.style.opacity = 0;
    adContainer.appendChild(ad);
    setTimeout(() => { ad.style.opacity = 1; }, 100); // Fade-in 

    let rotation = 0;
    const spinInterval = setInterval(() => {
        rotation = (rotation + 10) % 360; 
        ad.style.transform = `rotate(${rotation}deg)`;
    }, 50); 

    setTimeout(() => {
        clearInterval(spinInterval);
        ad.style.opacity = 0; // Fade-out 
        setTimeout(() => ad.remove(), 500); 
    }, 5000); 
}

function startAds() {
    adInterval = setInterval(createAd, 500); 
}

function showPopUp() {
    alert("Wait for 20 seconds.");
}

function showHandsomeFacesPrompt() {
    const userResponse = confirm("You don't like these handsome faces?");
    if (userResponse) {
        alert("Okay. Keeping the pop-ups.");
    } else {
        clearInterval(adInterval); // Stop ads
        adContainer.innerHTML = ''; // Clear existing ads
    }
}

function startAnnoyingAds() {
    clearInterval(adInterval); 
    adInterval = setInterval(createAnnoyingAd, 200); 
}

function createAnnoyingAd() {
    const ad = document.createElement('img');
    const randomFriend = friendsImages[Math.floor(Math.random() * friendsImages.length)];
    ad.src = randomFriend;
    ad.className = 'ad annoying-ad';

    ad.style.top = `${Math.random() * 100}vh`;
    ad.style.left = `${Math.random() * 100}vw`;

    ad.style.opacity = 0;
    adContainer.appendChild(ad);
    setTimeout(() => { ad.style.opacity = 1; }, 100); 

    let rotation = 0;
    const spinInterval = setInterval(() => {
        rotation = (rotation + 20) % 360; // Faster rotation
        ad.style.transform = `rotate(${rotation}deg)`;
    }, 30); 

    setTimeout(() => {
        clearInterval(spinInterval);
        ad.style.opacity = 0; // Fade-out
        setTimeout(() => ad.remove(), 500); 
    }, 5000); 
}

stopAdsButton.addEventListener('click', () => {
    startAnnoyingAds(); 
    showPopUp(); 

    setTimeout(() => {
        showHandsomeFacesPrompt(); 
    }, 20000);
});

startAds();
