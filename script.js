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

// jhakanaka
function updateScore(points) {
    const scoreElement = document.getElementById('score');
    scoreElement.innerText = scoreElement.innerText + points;
}

//keno bolbo
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
    image.alt = '';
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
    const preventEscape = (event) => {
        if (event.key === 'Escape') {
            event.preventDefault();
        }
    };

    document.addEventListener('keydown', preventEscape);

    image.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            image.remove();
            
            document.removeEventListener('keydown', preventEscape);
        }
    });
}


const encrypt = (text, shift) => {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 97 ? 97 : 65;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
};

function decodeMessage() {
    const fragments = document.querySelector('.key-fragment');
    const part1 = atob(fragments.dataset.part1);
    const part2 = atob(fragments.dataset.part2);
    const part3 = atob(fragments.dataset.part3);

    const key1 = atob(document.querySelector('meta[name="k1"]').content);
    const key2 = atob(document.querySelector('meta[name="k2"]').content);

    const cssKey = getComputedStyle(document.querySelector('.debug-key'))
        .getPropertyValue('--secret');

    const message = [part1, part2, part3].join(' ');
    return {
        original: message,
        encrypted: encrypt(message, 3),
        key: `${key1}_${key2}`
    };
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

document.addEventListener('keysequence', function(e) {
    if (e.detail.sequence === 'debugquest') {
        console.log("You're getting closer!");
    }
});

console.debug = function() {
    const debugSequence = ['debug', 'quest', 'decrypt'];
    if (arguments[0] === debugSequence[0]) {
        return "First key found. Try 'quest'";
    } else if (arguments[0] === debugSequence[1]) {
        return "Second key found. Final step: 'decrypt'";
    } else if (arguments[0] === debugSequence[2]) {
        return decodeMessage();
    }
    return "Keep debugging!";
};
