import { Card, Image, Text, Group, Badge, Stack, Center } from '@mantine/core';
import { IconBrain, IconLeaf, IconUsers } from '@tabler/icons-react';
import { Candidate } from '../types';

interface CandidateCardProps {
    candidate: Candidate;
}

export function CandidateCard({ candidate }: CandidateCardProps) {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
            <Card.Section>
                <Center p="md" bg="var(--mantine-color-dark-6)">
                    <Image
                        src={candidate.avatar_url}
                        h={100}
                        w={100}
                        radius={100}
                        alt={candidate.name}
                        fallbackSrc="https://placehold.co/100x100?text=Avatar"
                    />
                </Center>
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={700} size="lg">{candidate.name}</Text>
                <Badge color={candidate.overall_score > 85 ? "green" : "blue"} variant="light" size="lg">
                    {candidate.overall_score} / 100
                </Badge>
            </Group>

            <Text size="sm" c="dimmed" mb="md" lineClamp={2}>
                {candidate.bio}
            </Text>

            <Stack gap="xs" mt="auto">
                <Group justify="space-between">
                    <Group gap={5}><IconBrain size={16} color="var(--mantine-color-red-filled)" /><Text size="xs">Crisis Management</Text></Group>
                    <Text size="xs" fw={700}>{candidate.crisis_management_score}</Text>
                </Group>
                <Group justify="space-between">
                    <Group gap={5}><IconLeaf size={16} color="var(--mantine-color-green-filled)" /><Text size="xs">Sustainability</Text></Group>
                    <Text size="xs" fw={700}>{candidate.sustainability_score}</Text>
                </Group>
                <Group justify="space-between">
                    <Group gap={5}><IconUsers size={16} color="var(--mantine-color-blue-filled)" /><Text size="xs">Team Motivation</Text></Group>
                    <Text size="xs" fw={700}>{candidate.team_motivation_score}</Text>
                </Group>
            </Stack>

            <Group mt="md" gap={5}>
                {candidate.skills.slice(0, 3).map(skill => (
                    <Badge key={skill} size="xs" variant="outline" color="gray">{skill}</Badge>
                ))}
                {candidate.skills.length > 3 && <Badge size="xs" variant="outline" color="gray">+{candidate.skills.length - 3}</Badge>}
            </Group>
        </Card>
    );
}
