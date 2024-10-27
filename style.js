let count = 0; 
function clickMe() {
    
    count++; 
    document.getElementById('Count').innerText = `Click Count: ${count}`;
}

// Mouse Event
let mouseArea = document.getElementById('mouseArea');
let message = document.getElementById('message');

mouseArea.addEventListener('mousemove', (event) => {
    message.innerText = `Mouse Position: (X: ${event.offsetX}, Y: ${event.offsetY})`;
});

mouseArea.addEventListener('mouseleave', () => {
    message.textContent = ''; 
});

// KeyBoard Event

function displayKey(event) {
    const message = document.getElementById('keyboard-message');
    if (event.type === 'input')
         {
        message.textContent = `Last key pressed: ${event.target.value.slice(-1)}`;
    } else if (event.type === 'keydown')
         {
        message.textContent = `Last key pressed: ${event.key}`;
    }
}

function displayTouch() {
    const message = document.getElementById('keyboard-message');
    message.textContent = 'Touch detected!';
}

function reset() {
    document.getElementById('keyboard-message').textContent = "";
    const inputField = document.getElementById('inputField-keyboard');
    inputField.value = '';
}

// Focus and Blur Event
function updateFocusStatus(status) {
    const message = document.getElementById('message-focus');
    message.textContent = `Focus Status: ${status}`;
}

// Window resize Evenet

function updateWindowSize() {
    const message = document.getElementById('resize-message');
    message.textContent = `Window size: Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
}
// Initial size display
updateWindowSize();

// resize
window.addEventListener('resize', updateWindowSize);

// Touch event

function showTouchPosition(event) {
    const touch = event.touches[0]; // Get the first touch point
    const message = document.getElementById('touch-message');
    message.textContent = `Touch position: X: ${touch.clientX}, Y: ${touch.clientY}`;
}

function resetMessage() {
    const message = document.getElementById('touch-message');
    message.textContent = 'Touch position: None'; 
}
document.addEventListener('touchstart', showTouchPosition);

// Submit event

function handleSubmit(event) {
    event.preventDefault(); 
    const submitStatus = document.getElementById('submitStatus');
    submitStatus.textContent = 'Submission Status: Submitted'; 
    
}

function resetForm() {
    document.getElementById('myForm').reset(); 
    document.getElementById('submitStatus').textContent = 'Submission Status: Not Submitted'; 
}

// Drag and drop event
function handleDragStart() {
    const dragStatus = document.getElementById('dragStatus');
    dragStatus.textContent = 'Drag Status: Dragging'; 
}

function handleDragEnd() {
    const dragStatus = document.getElementById('dragStatus');
    dragStatus.textContent = 'Drag Status: Ended'; 
}

// Media event

const video = document.getElementById('myVideo');
    const mediaStatus = document.getElementById('mediaStatus');

    video.onplay = () => {
        mediaStatus.textContent = 'Media Status: Playing'; 
    };

    video.onpause = () => {
        mediaStatus.textContent = 'Media Status: Paused'; 
    };

    video.onended = () => {
        mediaStatus.textContent = 'Media Status: Ended'; 
    };
 