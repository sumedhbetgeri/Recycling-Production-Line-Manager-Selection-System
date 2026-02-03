import { Paper, Title } from '@mantine/core';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, Legend } from 'recharts';
import { Candidate } from '../types';

interface SkillHeatmapProps {
    candidates: Candidate[];
}

// Shows average scores vs Top Candidate scores
export function SkillHeatmap({ candidates }: SkillHeatmapProps) {
    if (candidates.length === 0) return null;

    const topCandidate = [...candidates].sort((a, b) => b.overall_score - a.overall_score)[0];

    // Calculate Averages
    const avgCrisis = Math.round(candidates.reduce((acc, c) => acc + c.crisis_management_score, 0) / candidates.length);
    const avgSustain = Math.round(candidates.reduce((acc, c) => acc + c.sustainability_score, 0) / candidates.length);
    const avgMotivation = Math.round(candidates.reduce((acc, c) => acc + c.team_motivation_score, 0) / candidates.length);

    const data = [
        { subject: 'Crisis Mgmt', A: topCandidate.crisis_management_score, B: avgCrisis, fullMark: 100 },
        { subject: 'Sustainability', A: topCandidate.sustainability_score, B: avgSustain, fullMark: 100 },
        { subject: 'Motivation', A: topCandidate.team_motivation_score, B: avgMotivation, fullMark: 100 },
    ];

    return (
        <Paper shadow="xs" p="md" withBorder h={400}>
            <Title order={3} mb="md">Performance Analysis</Title>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name={`Top: ${topCandidate.name}`} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Class Average" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#333', borderColor: '#444', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </Paper>
    );
}
