import { Container } from 'react-bootstrap';
import { Text, Box, Grid, Progress, Card, Flex, Badge } from '@radix-ui/themes';

function Skills() {
    return (
        <Container style={{marginTop: '1cm'}}>
            <Text color='indigo' weight='bold' size='8'>Skills</Text>
            <Box>
                <div style={{marginTop: '35px', marginBottom: '35px'}}>
                    <Text color='indigo' weight='bold' size='2'>LANGUAGES</Text>
                    <Progress style={{marginTop: '10px', height: '3px'}} value={100} radius='none' color='indigo'/>
                </div>
                <Grid columns={{sm: '1', md: '2', lg: '3'}} gapX='5' gapY='2' rows='1' width='auto'>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>GREEK</Text>
                                <Badge color='red' variant='solid' style={{marginLeft: 'auto'}}>NATIVE LANGUAGE</Badge>
                            </Flex>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>FRENCH</Text>
                                <Badge color='red' variant='solid' style={{marginLeft: 'auto'}}>SECOND LANGUAGE</Badge>
                            </Flex>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>ENGLISH</Text>
                                <Badge color='amber' variant='solid' style={{marginLeft: 'auto'}}>FLUENT</Badge>
                            </Flex>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>SPANISH</Text>
                                <Badge color='white' variant='solid' style={{marginLeft: 'auto'}}>INTERMEDIATE</Badge>
                            </Flex>
                        </Card>
                    </Box>
                </Grid>
            </Box>
            <Box>
                <div style={{marginTop: '35px', marginBottom: '35px'}}>
                    <Text color='indigo' weight='bold' size='2'>PROGRAMMING LANGUAGES</Text>
                    <Progress style={{marginTop: '10px', height: '3px'}} value={100} radius='none' color='indigo'/>
                </div>
                <Grid columns={{sm: '1', md: '2', lg: '3'}} gapX='5' gapY='2' width='auto'>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>PYTHON</Text>
                                <Badge color='red' variant='solid' style={{marginLeft: 'auto'}}>SKILLED</Badge>
                            </Flex>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>JAVA</Text>
                                <Badge color='amber' variant='solid' style={{marginLeft: 'auto'}}>INTERMEDIATE</Badge>
                            </Flex>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>PHP</Text>
                                <Badge color='amber' variant='solid' style={{marginLeft: 'auto'}}>INTERMEDIATE</Badge>
                            </Flex>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>C/C++</Text>
                                <Badge color='amber' variant='solid' style={{marginLeft: 'auto'}}>INTERMEDIATE</Badge>
                            </Flex>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>JAVASCRIPT</Text>
                                <Badge color='amber' variant='solid' style={{marginLeft: 'auto'}}>INTERMEDIATE</Badge>
                            </Flex>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>MATLAB</Text>
                                <Badge color='amber' variant='solid' style={{marginLeft: 'auto'}}>INTERMEDIATE</Badge>
                            </Flex>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>RUBY</Text>
                                <Badge color='white' variant='solid' style={{marginLeft: 'auto'}}>BEGINNER</Badge>
                            </Flex>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>RUST</Text>
                                <Badge color='white' variant='solid' style={{marginLeft: 'auto'}}>BEGINNER</Badge>
                            </Flex>
                        </Card>
                    </Box>
                </Grid>
            </Box>
            <Box>
                <div style={{marginTop: '35px', marginBottom: '35px'}}>
                    <Text color='indigo' weight='bold' size='2'>OTHERS</Text>
                    <Progress style={{marginTop: '10px', height: '3px'}} value={100} radius='none' color='indigo'/>
                </div>
                <Grid columns={{sm: '1', md: '2', lg: '3'}} gapX='5' gapY='2' width='auto'>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>RELATIONAL DATABASES</Text>
                                <Badge color='red' variant='solid' style={{marginLeft: 'auto'}}>SKILLED</Badge>
                            </Flex>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>IMAGE PROCESSING</Text>
                                <Badge color='amber' variant='solid' style={{marginLeft: 'auto'}}>INTERMEDIATE</Badge>
                            </Flex>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>SIGNAL PROCESSING</Text>
                                <Badge color='amber' variant='solid' style={{marginLeft: 'auto'}}>INTERMEDIATE</Badge>
                            </Flex>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>MACHINE LEARNING</Text>
                                <Badge color='amber' variant='solid' style={{marginLeft: 'auto'}}>INTERMEDIATE</Badge>
                            </Flex>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='ghost'>
                            <Flex gap='3' align='center'>
                                <Text as='div' size='2' weight='bold'>COMPUTER VISION</Text>
                                <Badge color='white' variant='solid' style={{marginLeft: 'auto'}}>BEGINNER</Badge>
                            </Flex>
                        </Card>
                    </Box>
                </Grid>
            </Box>
        </Container>
    );
}

export default Skills;
