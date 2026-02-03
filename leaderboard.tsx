import { Table, Avatar, Text, Group, Badge, Paper, Title } from '@mantine/core';
import { Candidate } from '../types';

interface LeaderboardProps {
    candidates: Candidate[];
}

export function Leaderboard({ candidates }: LeaderboardProps) {
    // Sort by overall score desc
    const sortedCandidates = [...candidates].sort((a, b) => b.overall_score - a.overall_score).slice(0, 10);

    const rows = sortedCandidates.map((element, index) => (
        <Table.Tr key={element.id}>
            <Table.Td>
                <Badge
                    circle
                    size="md"
                    variant={index < 3 ? "filled" : "outline"}
                    color={index === 0 ? "yellow" : index === 1 ? "gray" : index === 2 ? "orange" : "blue"}
                >
                    {index + 1}
                </Badge>
            </Table.Td>
            <Table.Td>
                <Group gap="sm">
                    <Avatar size={30} src={element.avatar_url} radius={30} />
                    <Text size="sm" fw={500}>
                        {element.name}
                    </Text>
                </Group>
            </Table.Td>
            <Table.Td>
                <Text size="sm">{element.experience_years} yrs</Text>
            </Table.Td>
            <Table.Td>
                <Text fw={700} c={element.overall_score > 90 ? "green" : "blue"}>{element.overall_score}</Text>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <Paper shadow="xs" p="md" withBorder>
            <Title order={3} mb="md">Top 10 Candidates</Title>
            <Table verticalSpacing="xs">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>#</Table.Th>
                        <Table.Th>Candidate</Table.Th>
                        <Table.Th>Exp</Table.Th>
                        <Table.Th>Score</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Paper>
    );
}
