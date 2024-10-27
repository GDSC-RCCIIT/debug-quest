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
