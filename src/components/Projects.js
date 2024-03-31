import { Container } from 'react-bootstrap';
import { Text, Grid, Box, Card, Flex, Avatar } from '@radix-ui/themes';

function Projects({theme}) {
    return (
        <Container style={{marginTop: '1cm'}}>
            <Text color='indigo' weight='bold' size='8'>Projects</Text>
            <Grid style={{marginTop: '35px', marginBottom: '35px'}} columns={{sm: '1', md: '2', lg: '3'}} gap='5' rows='1' width='auto'>
                <Box>
                    <Card asChild>
                        <a href='https://github.com/konstantinosmelis/huffman_compressor' target='_blank' rel='noreferrer'>
                            <Flex gap='3' align='center'>
                                <Avatar
                                    size='3'
                                    src={'/images/tree_' + (theme === 'light' ? 'black' : 'white') + '.png'}
                                    fallback='T'
                                />
                                <Box>
                                    <Text as='div' size='3' weight='bold'>Huffman Compressor</Text>
                                </Box>
                            </Flex>
                        </a>
                    </Card>
                </Box>
                <Box>
                    <Card asChild>
                        <a href='https://gitlab.com/jules_cassan/ter-s6-sociometrie-des-abeilles' target='_blank' rel='noreferrer'>
                            <Flex gap='3' align='center'>
                                <Avatar
                                    size='3'
                                    src={'/images/bee.png'}
                                    fallback='T'
                                />
                                <Box>
                                    <Text as='div' size='3' weight='bold'>SuperBee</Text>
                                </Box>
                            </Flex>
                        </a>
                    </Card>
                </Box>
                <Box>
                    <Card asChild>
                        <a href='https://github.com/konstantinosmelis/reddit_scrapping' target='_blank' rel='noreferrer'>
                            <Flex gap='3' align='center'>
                                <Avatar
                                    size='3'
                                    src={'/images/reddit.png'}
                                    fallback='T'
                                />
                                <Box>
                                    <Text as='div' size='3' weight='bold'>Reddit Scrapping</Text>
                                </Box>
                            </Flex>
                        </a>
                    </Card>
                </Box>
                <Box>
                    <Card asChild>
                        <a href='https://github.com/konstantinosmelis/natural-event-finder' target='_blank' rel='noreferrer'>
                            <Flex gap='3' align='center'>
                                <Avatar
                                    size='3'
                                    src={'/images/naturalevent.png'}
                                    fallback='T'
                                />
                                <Box>
                                    <Text as='div' size='3' weight='bold'>Natural Event Finder</Text>
                                </Box>
                            </Flex>
                        </a>
                    </Card>
                </Box>
                <Box>
                    <Card asChild>
                        <a href='https://github.com/konstantinosmelis/java-sql-api' target='_blank' rel='noreferrer'>
                            <Flex gap='3' align='center'>
                                <Avatar
                                    size='3'
                                    src={'/images/mysqlapi.png'}
                                    fallback='T'
                                />
                                <Box>
                                    <Text as='div' size='3' weight='bold'>MySql java API</Text>
                                </Box>
                            </Flex>
                        </a>
                    </Card>
                </Box>
                <Box>
                    <Card asChild>
                        <a href='https://github.com/konstantinosmelis/projet-informatique' target='_blank' rel='noreferrer'>
                            <Flex gap='3' align='center'>
                                <Avatar
                                    size='3'
                                    src={'/images/image_processor.png'}
                                    fallback='T'
                                />
                                <Box>
                                    <Text as='div' size='3' weight='bold'>Image Processing App</Text>
                                </Box>
                            </Flex>
                        </a>
                    </Card>
                </Box>
            </Grid>
        </Container>
    );
}

export default Projects;
