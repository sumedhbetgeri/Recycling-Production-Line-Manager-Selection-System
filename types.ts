export interface Candidate {
    id: number;
    name: string;
    email: string;
    avatar_url: string;
    experience_years: number;
    skills: string[];
    bio: string;
    crisis_management_score: number;
    sustainability_score: number;
    team_motivation_score: number;
    overall_score: number;
    feedback_summary: string;
}
