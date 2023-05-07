import React from 'react';
import { Container, Typography } from '@mui/material';
import theme from '../theme';

function AboutUs() {


    return (
        <Container id="about-us"
            maxWidth="xl"
            sx={{
                py: 4,
                px: 4,
                mx: 'auto',
                mt: 8,
                mb: 8,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    py: 0,
                    px: 4,
                    mx: 'auto',
                    mt: 8,
                    mb: 12,
                    backgroundColor: theme.palette.background.default,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <img
                    src="https://images.pexels.com/photos/14817984/pexels-photo-14817984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Travel Buddy"
                    style={{ height: 'auto',width: '50%', marginRight: '32px' }}
                />
                <div>
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{
                            mb: 6,
                            color: '#000000',
                            fontFamily: 'Alkatra',
                            fontWeight: 300,
                            fontSize: '3rem', }}
                    >
                        About Us
                    </Typography>
                    <Typography
                        variant="body1"
                        align="justify"

                        sx={{
                            color: '#000000',
                            maxWidth: '600px',
                            mx: 'auto',
                            fontFamily: 'Alkatra',
                            fontWeight: 100,
                            fontSize: '1.3rem',
                            px:4,
                        }}
                    >
                        TravelBuddy is an app that helps users organize notes about
                        their travels. Thanks to our app, you can easily plan, find interesting
                        places, and share your experiences with other users. Our app is ideal for
                        people who want to discover new places, enjoy their travels to the fullest,
                        and document all of their journeys with ease.
                    </Typography>
                </div>
            </Container>
        </Container>
    );
}

export default AboutUs;
