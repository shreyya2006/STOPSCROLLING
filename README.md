
# STOP SCROLLING! 🎯

## Basic Details

### Team Name: [CYBER BARBIES]

### Team Members
- Member 1: [MARY SABU] - [MITS]
- Member 2: [SHREYA N] - [MITS]

### Hosted Project Link
https://stopscrollingnow.vercel.app/

https://shreyya2006.github.io/STOPSCROLLING/

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
Tools used: VS Code, GitHub, Vercel

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


Live webcam detection with eye tracking:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1d892994-c26a-4b51-a7c9-0b0e23db70f0" />



Alert triggered after looking down:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4c5108c6-d703-4c13-888e-c3f8dd0b0ee2" />



User interface and focus status
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ba4a511d-6cc0-42da-bf04-68a284bdbe8e" />


#### Diagrams

**System Architecture:**

![Architecture Diagram]
Camera → Browser → MediaPipe Model → Detection Logic → Alert System

This shows how video input flows through the detection model and triggers feedback.

**Application Workflow:**

![Workflow]
User opens app → grants camera access → gaze detected → timer runs → alert triggered

---





## Project Demo

### Video
https://drive.google.com/file/d/1aheEwhFSqOHX02_jPSINFTiKS2y8Pnpy/view?ts=69992bcb

*The demo video shows how the application works in real time. It begins with the user opening the website and granting camera access. The system then detects the face and tracks eye movement continuously. When the user looks straight at the screen, the interface shows a normal status. When the user looks down for a few seconds, a warning appears and an alert sound is triggered. The video highlights the full user flow, including detection accuracy, visual feedback, and the alert mechanism, demonstrating how the system helps users stay focused.*


## AI Tools Used (Optional - For Transparency Bonus)



**Tool Used:**  ChatGPT, Claude

**Purpose:** 
• Debugging help
• Code suggestions
• Documentation support

**Key Prompts Used:**
• Implement gaze detection logic
• Fix camera rendering issues
• Generate project documentation

**Percentage of AI-generated code:** [Approximately 25%]

**Human Contributions:**
• System design
• Feature logic
• Testing and integration
• UI styling



---

## Team Contributions

Shreya N: Detection logic, integration, testing
Mary Sabu: Frontend design, styling, deployment

---

## License

This project is licensed under the MIT License.

---

Made with ❤️ at TinkerHub
