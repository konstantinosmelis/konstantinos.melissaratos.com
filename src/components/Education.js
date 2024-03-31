import { Container } from 'react-bootstrap';
import { Text, Grid, Box, Card, Flex, Avatar } from '@radix-ui/themes';

function Education({theme}) {
    return (
        <Container style={{marginTop: '1cm'}}>
            <Text color='indigo' weight='bold' size='8'>Education</Text>
            <Grid style={{marginTop: '35px', marginBottom: '35px'}} columns={{sm: '1', md: '2'}} gap='5' rows='1' width='auto'>
                <Box>
                    <Card>
                        <Flex gap='3' align='center'>
                            <Avatar
                                size='4'
                                src={'/images/um_logo.png'}
                                fallback='T'
                            />
                            <Box>
                                <Text as='div' size='3' weight='bold'>Faculté des Sciences - Université de Montpellier</Text>
                                <Text as='div' size='3' weight='regular'>Bachelor's degree - Computer Science</Text>
                                <Text as='div' size='3' weight='light' color='gray'><i>2019 - 2022</i></Text>
                            </Box>
                        </Flex>
                    </Card>
                </Box>
                <Box>
                    <Card>
                        <Flex gap='3' align='center'>
                            <Avatar
                                size='4'
                                src={'/images/ut_logo_' + (theme === 'light' ? 'black' : 'white') + '.png'}
                                fallback='T'
                            />
                            <Box>
                                <Text as='div' size='3' weight='bold'>Faculté des Sciences et Ingénierie - Université de Toulouse III</Text>
                                <Text as='div' size='3' weight='regular'>Master's degree - Signal and image processing and machine learning</Text>
                                <Text as='div' size='3' weight='light' color='gray'><i>2022 - present</i></Text>
                            </Box>
                        </Flex>
                    </Card>
                </Box>
            </Grid>
        </Container>
    );
}

export default Education;
