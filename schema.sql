-- Database Schema for Candidate Evaluator

CREATE DATABASE IF NOT EXISTS candidate_evaluator;
USE candidate_evaluator;

-- Candidates Table
CREATE TABLE IF NOT EXISTS candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    avatar_url VARCHAR(500),
    experience_years INT DEFAULT 0,
    skills JSON, -- Store skills as a JSON array e.g. ["React", "Node.js"]
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Evaluations Table
-- Stores AI-generated scores for different categories
CREATE TABLE IF NOT EXISTS evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT NOT NULL,
    crisis_management_score INT CHECK (crisis_management_score BETWEEN 0 AND 100),
    sustainability_score INT CHECK (sustainability_score BETWEEN 0 AND 100),
    team_motivation_score INT CHECK (team_motivation_score BETWEEN 0 AND 100),
    feedback_summary TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE
);

-- Rankings View
-- Auto-updates based on evaluations. Calculates average score.
CREATE OR REPLACE VIEW candidate_rankings AS
SELECT 
    c.id AS candidate_id,
    c.name,
    c.experience_years,
    e.crisis_management_score,
    e.sustainability_score,
    e.team_motivation_score,
    (e.crisis_management_score + e.sustainability_score + e.team_motivation_score) / 3 AS overall_score,
    RANK() OVER (ORDER BY (e.crisis_management_score + e.sustainability_score + e.team_motivation_score) / 3 DESC) AS ranking
FROM candidates c
JOIN evaluations e ON c.id = e.candidate_id;
