# Recycling-Production-Line-Manager-Selection-System
# Candidate Evaluator AI Dashboard

A React + Vite dashboard for evaluating and ranking candidates using AI-generated scores.

## Features
- **Mock Data Generation**: Generates 40 realistic candidates with skills and AI scores (Crisis Management, Sustainability, Team Motivation).
- **Interactive Dashboard**:
    - **Leaderboard**: Top 10 candidates.
    - **Skill Heatmap**: Radar chart comparing top performer vs class average.
    - **Candidate Cards**: Detailed profiles with score visualization.
- **Dark Mode UI**: Built with Mantine UI.

## Project Structure
- `frontend/`: React + Vite application (root directory).
- `database/`:
    - `schema.sql`: MySQL schema for candidates, evaluations, and rankings.
    - `generate_data.js`: Node.js script to create mock data.
    - `seed.sql`: Generated SQL insert statements.
- `prompts/`:
    - `ai_prompts.md`: 3 AI prompts used for evaluation methodology.
- `src/data/mockData.json`: Generated JSON data used by the frontend.

## Setup Instructions

## Quick Start Guide (Beginner)

Follow these exact steps to run the project from scratch:

1.  **Open a Terminal**:
    - Press `Windows Key` + `R`, type `powershell`, and press Enter.

2.  **Navigate to the project folder**:
    Copy and paste this command and press Enter:
    ```bash
    cd "C:\Users\Lenovo\.gemini\antigravity\scratch\candidate-evaluator"
    ```

3.  **Install the necessary libraries**:
    (You only need to do this once).
    ```bash
    npm install
    ```

4.  **Generate the Mock Candidates**:
    This creates the fake people and scores.
    ```bash
    node database/generate_data.js
    ```

5.  **Start the Application**:
    This turns on the web server.
    ```bash
    npm run dev
    ```

6.  **Open in Browser**:
    - You will see a link like `http://localhost:5173`.
    - Hold `Ctrl` and click that link, or open Chrome and type it in.


## Tech Stack
- React + Vite
- Mantine UI
- Recharts
- Faker.js
