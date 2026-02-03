import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const NUM_CANDIDATES = 40;

const skillsList = [
  'React', 'Node.js', 'Python', 'SQL', 'Docker', 'AWS', 'TypeScript', 'Figma', 
  'Project Management', 'Agile', 'Communication', 'Leadership'
];

function generateRandomSkills() {
    const numSkills = faker.number.int({ min: 2, max: 6 });
    return faker.helpers.arrayElements(skillsList, numSkills);
}

const candidates = [];
const evaluations = [];

for (let i = 1; i <= NUM_CANDIDATES; i++) {
    const candidate = {
        id: i,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatar_url: faker.image.avatar(),
        experience_years: faker.number.int({ min: 1, max: 15 }),
        skills: generateRandomSkills(),
        bio: faker.person.bio(),
    };
    candidates.push(candidate);

    const evaluation = {
        id: i,
        candidate_id: i,
        crisis_management_score: faker.number.int({ min: 60, max: 98 }), // High performers
        sustainability_score: faker.number.int({ min: 50, max: 95 }),
        team_motivation_score: faker.number.int({ min: 70, max: 99 }),
        feedback_summary: faker.lorem.sentence(),
    };
    evaluations.push(evaluation);
}

// Generate SQL Seed
let sqlContent = `-- Seed Data\nUSE candidate_evaluator;\n\n`;

// Insert Candidates
sqlContent += `INSERT INTO candidates (id, name, email, avatar_url, experience_years, skills, bio) VALUES\n`;
sqlContent += candidates.map(c => 
    `(${c.id}, "${c.name}", "${c.email}", "${c.avatar_url}", ${c.experience_years}, '${JSON.stringify(c.skills)}', "${c.bio.replace(/"/g, '\\"')}")`
).join(',\n') + ';\n\n';

// Insert Evaluations
sqlContent += `INSERT INTO evaluations (id, candidate_id, crisis_management_score, sustainability_score, team_motivation_score, feedback_summary) VALUES\n`;
sqlContent += evaluations.map(e => 
    `(${e.id}, ${e.candidate_id}, ${e.crisis_management_score}, ${e.sustainability_score}, ${e.team_motivation_score}, "${e.feedback_summary.replace(/"/g, '\\"')}")`
).join(',\n') + ';\n\n';

fs.writeFileSync(path.join(__dirname, 'seed.sql'), sqlContent);
console.log('Generated database/seed.sql');

// Generate JSON for Frontend
// Combine candidate and evaluation data for easier frontend usage
const frontendData = candidates.map(c => {
    const evaluation = evaluations.find(e => e.candidate_id === c.id);
    const overall_score = Math.round((evaluation.crisis_management_score + evaluation.sustainability_score + evaluation.team_motivation_score) / 3);
    return {
        ...c,
        ...evaluation,
        overall_score,
    };
});

// Ensure src/data exists
const srcDataDir = path.join(__dirname, '../src/data');
if (!fs.existsSync(srcDataDir)){
    fs.mkdirSync(srcDataDir, { recursive: true });
}

fs.writeFileSync(path.join(srcDataDir, 'mockData.json'), JSON.stringify(frontendData, null, 2));
console.log('Generated src/data/mockData.json');
