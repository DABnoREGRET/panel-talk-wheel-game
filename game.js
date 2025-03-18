// Game state
let isSpinning = false;
let selectedQuestion = null;
let timerInterval = null;
let spinHistory = [];
let initialRotation = Math.random() * 2 * Math.PI; // Random initial rotation
const MAX_HISTORY = 5; // Maximum number of spins to track

// Import questions from questions.js
const script = document.createElement('script');
script.src = 'questions.js';
document.head.appendChild(script);

// Canvas setup
const canvas = document.getElementById('wheel-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = Math.min(centerX, centerY) - 10;

// Wheel properties
const numSegments = 40;
const segmentAngle = (2 * Math.PI) / numSegments;
let rotation = initialRotation;
let targetRotation = 0;
let spinSpeed = 0;
const friction = 0.98;
const minSpinSpeed = 0.05;

// Colors for the wheel
const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
    '#FFEEAD', '#D4A5A5', '#9B59B6', '#3498DB'
];

// Draw the wheel
function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw segments
    for (let i = 0; i < numSegments; i++) {
        const angle = i * segmentAngle + rotation;
        const color = colors[i % colors.length];
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, angle, angle + segmentAngle);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
        
        // Draw numbers
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle + segmentAngle / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#000';
        ctx.font = '16px Arial';
        ctx.fillText(i + 1, radius - 20, 6);
        ctx.restore();
    }
    
    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 15, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();

    // Draw pointer
    ctx.save();
    ctx.translate(centerX, 10);
    ctx.beginPath();
    ctx.moveTo(-15, 0);
    ctx.lineTo(15, 0);
    ctx.lineTo(0, 25);
    ctx.closePath();
    ctx.fillStyle = '#FF0000';
    ctx.fill();
    ctx.restore();
}

// Get segment at pointer
function getSelectedSegment() {
    const pointerAngle = Math.PI * 1.5; // Pointer at top (270 degrees)
    let currentAngle = rotation % (2 * Math.PI);
    if (currentAngle < 0) currentAngle += 2 * Math.PI;
    
    const normalizedAngle = (pointerAngle - currentAngle + 2 * Math.PI) % (2 * Math.PI);
    const segment = Math.floor(normalizedAngle / segmentAngle);
    return segment;
}

// Spin the wheel
document.getElementById('spin-button').addEventListener('click', () => {
    if (!isSpinning) {
        isSpinning = true;
        let targetSegment;
        do {
            targetSegment = Math.floor(Math.random() * numSegments);
        } while (spinHistory.includes(targetSegment));
        
        // Update spin history
        spinHistory.push(targetSegment);
        if (spinHistory.length > MAX_HISTORY) {
            spinHistory.shift(); // Remove oldest spin
        }
        
        const minSpins = 3 + Math.floor(Math.random() * 2); // Random number of spins between 3-4
        const extraSpins = Math.random() * 2;
        spinSpeed = 0.3 + Math.random() * 0.1; // Random initial spin speed
        targetRotation = rotation - (minSpins + extraSpins) * 2 * Math.PI - (targetSegment * segmentAngle);
        document.getElementById('show-question-button').style.display = 'none';
        animate();
    }
});

// Animate the wheel
function animate() {
    if (isSpinning) {
        rotation += spinSpeed;
        spinSpeed *= friction;
        
        if (spinSpeed < minSpinSpeed) {
            isSpinning = false;
            const selectedSegment = getSelectedSegment();
            lastSelectedSegment = selectedSegment; // Update last selected segment
            selectedQuestion = questions[selectedSegment];
            selectedQuestion.number = selectedSegment + 1;
            document.getElementById('show-question-button').style.display = 'inline-block';
        }
        
        drawWheel();
        requestAnimationFrame(animate);
    }
}

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Show question section
document.getElementById('show-question-button').addEventListener('click', () => {
    document.getElementById('wheel-section').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';
    document.getElementById('question-text').textContent = selectedQuestion.question;
    document.getElementById('timer').textContent = '30';
    document.getElementById('answer-text').style.display = 'none';
    
    // Show question number
    const selectedSegment = Math.floor(((2 * Math.PI - (rotation % (2 * Math.PI))) / segmentAngle) % numSegments);
    document.getElementById('question-number').textContent = `Question ${selectedQuestion.number}`;
    
    // Reset timer circle
    document.getElementById('timer-circle').style.setProperty('--progress', '0%');

    // Display options if available
    const optionsContainer = document.createElement('div');
    optionsContainer.id = 'options-container';
    optionsContainer.style.marginTop = '20px';
    
    if (selectedQuestion.options) {
        // Create array of option objects with original indices
        const optionsWithIndices = selectedQuestion.options.map((option, index) => ({
            text: option,
            originalIndex: index
        }));
        
        // Shuffle options
        const shuffledOptions = shuffleArray([...optionsWithIndices]);
        
        // Store the mapping of new positions to original indices
        selectedQuestion.shuffledMap = shuffledOptions.map(opt => opt.originalIndex);
        
        shuffledOptions.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = String.fromCharCode(65 + index) + '. ' + option.text;
            button.style.display = 'block';
            button.style.margin = '10px auto';
            button.style.padding = '10px';
            button.style.width = '100%';
            button.style.textAlign = 'left';
            button.className = 'option-button';
            button.dataset.originalIndex = option.originalIndex;
            button.onclick = () => {
                const buttons = optionsContainer.getElementsByTagName('button');
                for (let btn of buttons) {
                    btn.classList.remove('clicked');
                }
                button.classList.add('clicked');
            };
            optionsContainer.appendChild(button);
        });
    }
    
    const questionSection = document.getElementById('question-section');
    const existingContainer = document.getElementById('options-container');
    if (existingContainer) {
        questionSection.removeChild(existingContainer);
    }
    questionSection.insertBefore(optionsContainer, document.getElementById('start-timer-button'));
});

// Timer functionality
document.getElementById('start-timer-button').addEventListener('click', function() {
    let timeLeft = 30;
    this.disabled = true;
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        
        // Update timer circle
        const progress = ((30 - timeLeft) / 30) * 100;
        document.getElementById('timer-circle').style.setProperty('--progress', `${progress}%`);
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            this.disabled = false;
        }
    }, 1000);
});

// Show answer
document.getElementById('show-answer-button').addEventListener('click', () => {
    const answerElement = document.getElementById('answer-text');
    const correctAnswerIndex = selectedQuestion.correctAnswer;
    const correctAnswerText = selectedQuestion.options[correctAnswerIndex];
    answerElement.textContent = `Answer: ${correctAnswerText}`;
    answerElement.style.display = 'block';
    
    // Highlight correct answer if it's a multiple choice question
    if (selectedQuestion.options) {
        const buttons = document.querySelectorAll('.option-button');
        // Find the button with the matching original index
        const correctButton = Array.from(buttons).find(
            button => parseInt(button.dataset.originalIndex) === correctAnswerIndex
        );
        if (correctButton) {
            correctButton.classList.add('correct');
        }
    }
});

// Back button functionality
document.getElementById('back-button').addEventListener('click', () => {
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('wheel-section').style.display = 'block';
    clearInterval(timerInterval);
    document.getElementById('start-timer-button').disabled = false;
});

// Initial draw
drawWheel();