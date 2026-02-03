# AI Evaluation Prompts

Use these prompts to generate scores and feedback for candidates. Replace `{{CANDIDATE_PROFILE}}` with the candidate's resume or bio.

## 1. Crisis Management Simulation

**Context:** The candidate is a project manager facing a critical server outage during a Black Friday sale.
**Prompt:**
```text
You are an expert HR evaluator specializing in Crisis Management.
Evaluate the following candidate based on their profile:
{{CANDIDATE_PROFILE}}

Scenario: "A critical server outage occurs during the peak hour of a major launch. The team is panicked, and customers are complaining on social media."

Task: Predict how this candidate would likely handle the situation based on their skills and experience.
Output a JSON object with:
- "score": (0-100)
- "reasoning": (Short explanation)
- "action_plan": (3 steps they would take)
```

## 2. Sustainability Knowledge Assessment

**Context:** The company aims to reduce its carbon footprint by 30% in 2 years.
**Prompt:**
```text
You are a Sustainability Officer evaluating potential hires.
Profile:
{{CANDIDATE_PROFILE}}

Task: Assess this candidate's potential contribution to our green initiatives. Look for keywords related to efficiency, renewable tech, or long-term planning.
Output a JSON object with:
- "score": (0-100)
- "potential_impact": (Low/Medium/High)
- "suggested_role": (How they can help)
```

## 3. Team Motivation Scenario

**Context:** The team has been working overtime for 2 weeks and morale is low.
**Prompt:**
```text
You are a Leadership Coach.
Profile:
{{CANDIDATE_PROFILE}}

Scenario: "Team morale is at an all-time low due to burnout. A deadline is approaching."

Task: Evaluate the candidate's leadership style and ability to motivate the team without causing further burnout.
Output a JSON object with:
- "score": (0-100)
- "leadership_style": (e.g., Servant Leader, Authoritative, Empathetic)
- "intervention": (One specific action they would take)
```
