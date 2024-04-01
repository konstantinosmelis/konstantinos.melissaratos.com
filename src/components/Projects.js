import { PropTypes } from 'prop-types'
import { Container } from 'react-bootstrap';
import { Text, Grid, Box, HoverCard, Card, Flex, Avatar } from '@radix-ui/themes';

function Projects({theme}) {
    return (
        <Container style={{marginTop: '1cm'}}>
            <Text color='indigo' weight='bold' size='8'>Projects</Text>
            <Grid style={{marginTop: '35px', marginBottom: '35px'}} columns={{sm: '1', md: '2', lg: '3'}} gap='5' rows='1' width='auto'>
                <HoverCard.Root>
                    <HoverCard.Trigger>
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
                    </HoverCard.Trigger>
                    <HoverCard.Content size='2' maxWidth='350px'>
                        <Text as='div' size='2' trim='both'>
                            This is an application written in C for compressing and decompressing text files using the Huffman compression algorithm.
                        </Text>
                    </HoverCard.Content>
                </HoverCard.Root>
                <HoverCard.Root>
                    <HoverCard.Trigger>
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
                    </HoverCard.Trigger>
                    <HoverCard.Content size='2' maxWidth='350px'>
                        <Text as='div' size='2' trim='both'>
                            The <i>SuperBeeLive</i> research project, created by the LIRMM laboratory, is based on real-time monitoring of a bee colony, from birth to death, in order to track its homeostasis and state of health in detail. For this purpose, we have designed a hive whose instrumentation enables the collection of several types of digital and video data streams in parallel, in a systematic, automatic and non-invasive way. This instrumented hive is currently populated and video data is recorded continuously. 
                        </Text>
                    </HoverCard.Content>
                </HoverCard.Root>
                <HoverCard.Root>
                    <HoverCard.Trigger>
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
                    </HoverCard.Trigger>
                    <HoverCard.Content size='2' maxWidth='350px'>
                        <Text as='div' size='2' trim='both'>
                            This project looks at how to retrieve information from the web. The context is the social network Reddit and the r/EarthPorn/ community, which offers magnificent photos of the earth and the goal is to position these photos on a map automatically.
                        </Text>
                    </HoverCard.Content>
                </HoverCard.Root>
                <HoverCard.Root>
                    <HoverCard.Trigger>
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
                    </HoverCard.Trigger>
                    <HoverCard.Content size='2' maxWidth='350px'>
                        <Text as='div' size='2' trim='both'>
                            𝕏 makes it possible, in just a few characters, to inform the whole world in real time about important events. For example, in the case of flooding, it's not unusual to be warned first by people who are very close to the scene, rather than by the authorities. Here we'll be focusing on events associated with natural disasters such as fires, earthquakes and floods.
                        </Text>
                    </HoverCard.Content>
                </HoverCard.Root>
                <HoverCard.Root>
                    <HoverCard.Trigger>
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
                    </HoverCard.Trigger>
                    <HoverCard.Content size='2' maxWidth='350px'>
                        <Text as='div' size='2' trim='both'>
                            This is an API for interacting with MySql databases in Java. It allows table management and SQL query execution.
                        </Text>
                    </HoverCard.Content>
                </HoverCard.Root>
                <HoverCard.Root>
                    <HoverCard.Trigger>
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
                    </HoverCard.Trigger>
                    <HoverCard.Content size='2' maxWidth='350px'>
                        <Text as='div' size='2' trim='both'>
                            This is an image library management and image processing application, written in C++. A graphical user interface was created using Qt. Some images applications and memory management is performed by OpenCV.
                        </Text>
                    </HoverCard.Content>
                </HoverCard.Root>
            </Grid>
        </Container>
    );
}

Projects.propTypes = {
    theme: PropTypes.string.isRequired
}

export default Projects;
