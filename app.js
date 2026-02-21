import {
  FaceLandmarker,
  FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const statusText = document.getElementById("status");
const alertSound = document.getElementById("alertSound");
const toggleBtn = document.getElementById("soundToggle");
const warning = document.getElementById("warning");

let baselineY = null;
let startTime = null;
let alertActive = false;
let soundEnabled = true;
let lookingDown = false;

const THRESHOLD = 0.02;
const DEAD_ZONE = 0.005;
const TIME_LIMIT = 3;

toggleBtn.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  toggleBtn.textContent = soundEnabled ? "🔊 Sound ON" : "🔇 Sound OFF";
  alertSound.pause();
  alertSound.currentTime = 0;
  alertActive = false;
});

async function init() {

  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );

  const faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-assets/face_landmarker.task"
    },
    runningMode: "VIDEO",
    numFaces: 1
  });

  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;

  video.addEventListener("loadeddata", () => detect(faceLandmarker));
}

function detect(faceLandmarker) {

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const now = performance.now();
  const result = faceLandmarker.detectForVideo(video, now);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (result.faceLandmarks.length > 0) {
    const lm = result.faceLandmarks[0];

    const left = lm[33];
    const right = lm[263];

    const eyeY = (left.y + right.y) / 2;

    if (!baselineY) baselineY = eyeY;

    const displacement = eyeY - baselineY;

    lookingDown = false;

    if (Math.abs(displacement) < DEAD_ZONE) {
      baselineY = 0.9 * baselineY + 0.1 * eyeY;
      startTime = null;
      alertActive = false;
      warning.style.display = "none";
      statusText.textContent = "Status: Looking Up";
      alertSound.pause();
      alertSound.currentTime = 0;
    }

    else if (displacement > THRESHOLD) {

      lookingDown = true;

      if (!startTime) startTime = Date.now();
      const elapsed = (Date.now() - startTime) / 1000;

      warning.style.display = "block";
      statusText.textContent = "Status: Looking Down";

      if (elapsed > TIME_LIMIT) {
        if (!alertActive && soundEnabled) {
          alertSound.currentTime = 0;
          alertSound.play().catch(() => {});
          alertActive = true;
        }
      }
    }

    drawBox(left);
    drawBox(right);
  }

  requestAnimationFrame(() => detect(faceLandmarker));
}

function drawBox(point) {
  ctx.strokeStyle = lookingDown ? "red" : "lime";
  ctx.lineWidth = 3;
  ctx.strokeRect(
    point.x * canvas.width - 40,
    point.y * canvas.height - 20,
    80,
    40
  );
}

init();