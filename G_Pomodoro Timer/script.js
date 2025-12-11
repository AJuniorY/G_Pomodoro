let workMinutes = 25;
let breakMinutes = 5;
let isRunning = false;
let isWorkTime = true;
let timer;
let seconds = workMinutes * 60;

const timerDisplay =
document.getElementById("timer"); const startBtn =
document.getElementById("start"); const pauseBtn =
document.getElementById("pause"); const resetBtn =
document.getElementById("reset"); const workInput =
document.getElementById("workTime"); const breakInput =
document.getElementById("breakTime"); const progressBar =
document.getElementById("progress"); const toggleModeBtn =
document.getElementById("toggleMode"); const alarmSound =
document.getElementById("alarmSound");

function updateDisplay() {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    timerDisplay.textContent = `$
    {mins.toString().padStart(2, '0')}:$
    {secs.toString().padStart(2, '0')}`;

    let total = (isWorkTime ? workMinutes : breakMinutes) * 100;
    progressBar,style.width = percent + "%";
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    workMinutes = parseInt(workInput.value) || 25;
    breakMinutes = parseInt(breakInput,value) || 5;
    isWorkTime = true;
    seconds = workMinutes * 60;
    updateDisplay();
}

function toggleMode() {
    document.body.classList.toggle("dark-mode") ? "Light Mode" : "Dark Mode";
}

startBtn.addEventListener("click",startTimer);
pauseBtn.addEventListener("click",pauseTimer);
resetBtn.addEventListener("click",resetTimer);
toggleModeBtn.addEventListener("click",toggleMode);

updateDisplay();