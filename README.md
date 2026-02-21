<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# STOP SCROLLING! 🎯

## Basic Details

### Team Name: [CYBER BARBIES]

### Team Members
- Member 1: [MARY SABU] - [MITS]
- Member 2: [SHREYA N] - [MITS]

### Hosted Project Link
[mention your project hosted link here]

### Project Description
StopScrolling is a browser-based focus assistant that uses the webcam to track eye direction in real time. When the user looks down for a few seconds, the system shows a warning and plays an alert sound to help them stay focused.

### The Problem statement
Many students and professionals lose focus because they unconsciously pick up their phones during study or work sessions. Most existing tools rely on timers or app blockers, which cannot detect distraction as it actually happens.

### The Solution
We built a lightweight web application that monitors gaze direction using computer vision. By detecting prolonged downward gaze, the system triggers alerts and visual feedback, helping users become more aware of their distractions.

---

## Technical Details

### Technologies/Components Used

**For Software:**
Languages used: JavaScript, HTML, CSS
Frameworks used: None (pure browser-based implementation)
Libraries used: MediaPipe Face Landmarker
Tools used: VS Code, GitHub, Netlify

**For Hardware:**
Main components: Laptop/PC with webcam
Specifications: Any device with a modern browser and camera support
Tools required: Chrome/Edge browser

---

## Features

Feature 1: Real-time gaze detection using webcam
Feature 2: Visual feedback with eye tracking boxes
Feature 3: Timer-based distraction alert
Feature 4: Audio warning with toggle control

---

## Implementation

### For Software:

#### Installation
```bash
git clone https://github.com/shreyya2006/STOPSCROLLING
cd STOPSCROLLING
```

#### Run
```bash
Run a local server:
python -m http.server

http://localhost:8000
```

### For Hardware:

#### Components Required
A laptop or desktop with a working webcam

#### Circuit Setup
No physical circuit is required since the project uses built-in webcam hardware.

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)


Live webcam detection with eye tracking


Alert triggered after looking down


User interface and focus status

#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
Camera → Browser → MediaPipe Model → Detection Logic → Alert System

This shows how video input flows through the detection model and triggers feedback.

**Application Workflow:**

![Workflow](docs/workflow.png)
User opens app → grants camera access → gaze detected → timer runs → alert triggered

---





## Project Demo

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:**  ChatGPT, Claude

**Purpose:** 
• Debugging help
• Code suggestions
• Documentation support

**Key Prompts Used:**
• Implement gaze detection logic
• Fix camera rendering issues
• Generate project documentation

**Percentage of AI-generated code:** [Approximately 25%

**Human Contributions:**
• System design
• Feature logic
• Testing and integration
• UI styling

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

Shreya N: Detection logic, integration, testing
Mary Sabu: Frontend design, styling, deployment

---

## License

This project is licensed under the MIT License.

---

Made with ❤️ at TinkerHub
