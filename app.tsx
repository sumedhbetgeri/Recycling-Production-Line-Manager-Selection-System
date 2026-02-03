import { AppShell, Burger, Group, Skeleton, Title, Container, Grid, Text, Button, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconTrophy } from '@tabler/icons-react';
import { Leaderboard } from './components/Leaderboard';
import { SkillHeatmap } from './components/SkillHeatmap';
import { CandidateCard } from './components/CandidateCard';
import mockData from './data/mockData.json';
import { Candidate } from './types';

// Cast mock data to Candidate type
const candidates = mockData as Candidate[];

export default function App() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <IconTrophy size={30} color="var(--mantine-color-yellow-filled)" />
                    <Title order={2}>CandidateGenius AI</Title>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <Text fw={500} mb="sm">Top Candidates</Text>
                <ScrollArea h="calc(100vh - 120px)">
                    <Leaderboard candidates={candidates} />
                </ScrollArea>
            </AppShell.Navbar>

            <AppShell.Main>
                <Container fluid>
                    <Grid gutter="xl">
                        <Grid.Col span={{ base: 12, md: 8 }}>
                            <Title order={2} mb="lg">Dashboard Overview</Title>
                            <Grid>
                                <Grid.Col span={12}>
                                    <SkillHeatmap candidates={candidates} />
                                </Grid.Col>

                                <Grid.Col span={12}>
                                    <Title order={3} mt="xl" mb="md">Candidate Portfolio</Title>
                                    <Grid gutter="md">
                                        {candidates.slice(0, 6).map(candidate => (
                                            <Grid.Col key={candidate.id} span={{ base: 12, sm: 6, lg: 4 }}>
                                                <CandidateCard candidate={candidate} />
                                            </Grid.Col>
                                        ))}
                                    </Grid>
                                </Grid.Col>
                            </Grid>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 4 }}>
                            <Title order={4} mb="md">Recent Activity</Title>
                            <Text c="dimmed" size="sm">AI Evaluation System is active.</Text>
                            <Text c="dimmed" size="sm">40 Candidates processed successfully.</Text>

                            {/* Placeholder for future detailed view or filter controls */}
                        </Grid.Col>
                    </Grid>
                </Container>
            </AppShell.Main>
        </AppShell>
    );
}
