import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import theme from '../theme';
import Button from "@mui/material/Button";
import { BASE_URL } from "../helper/api";


const MainPage = () => {
    const customFont = {
        fontFamily: 'Alkatra',
        fontWeight: 400,
        fontSize: '3.5rem',
    };

    return (
        <Container
            maxWidth="xl"
            sx={{
                py: 4,
                px: 4,
                mx: 'auto',
                mt: 12,
                mb: 12,
                backgroundColor: theme.palette.background.default,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >

            <Typography variant="h1" align="center" style={customFont} gutterBottom>
                Another adventure awaits!
            </Typography>
            <Typography variant="h3" align="center" style={customFont} gutterBottom mb={8}>
                Explore the world with TravelBuddy
            </Typography>


            <Button
                variant="contained"
                component="a"
                href={`${BASE_URL}/#/sign-in`}
                sx={{
                    paddingTop: 20,
                    px: 1,
                    py: 1,
                    p: 1,
                    mx: 2,
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.dark,
                    textDecoration: 'none',
                    width: '20%',
                    height: '50%',
                    border: '2px solid ' + theme.palette.primary.dark,
                }}
            >
                Sign Up
            </Button>


            <Grid container spacing={2} sx={{ mt: theme.spacing(2), pt: theme.spacing(4) }}>
                <Grid item xs={12} sm={6} md={4} sx={{ mb: theme.spacing(2) }}>
                    <Card sx={{ display: 'flex', justifyContent: 'center', p: 0 }}>
                        <CardMedia
                            component="img"
                            height="500"
                            width="100%"
                            image="https://mediaim.expedia.com/localexpert/504447/0cbb64e6-0eea-437f-8464-1594620b50c8.jpg?impolicy=resizecrop&rw=1005&rh=565"
                            alt="Travel"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{ mb: theme.spacing(2) }}>
                    <Card sx={{ display: 'flex', justifyContent: 'center', p: 0 }}>
                        <CardMedia
                            component="img"
                            height="500"
                            width="100%"
                            image="https://storage.googleapis.com/pod_public/1300/103141.jpg"
                            alt="Vacation"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{ mb: theme.spacing(2) }}>
                    <Card sx={{ display: 'flex', justifyContent: 'center', p: 0 }}>
                        <CardMedia
                            component="img"
                            height="500"
                            width="100%"
                            image="https://cdn.shopify.com/s/files/1/0554/0115/2649/articles/An_20empty_20page_20in_20a_20travel_20journal_1100x.jpg?v=1641393781"
                            alt="Explore"
                        />
                    </Card>
                </Grid>
            </Grid>


        </Container>
    );
};

export default MainPage;
