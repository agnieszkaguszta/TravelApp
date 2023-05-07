import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import theme from "../theme";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor:theme.palette.primary.main,
        color: theme.palette.primary.light,
        padding: theme.spacing(6),
    },
    link: {
        color: theme.palette.primary.light,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={3}>
                    <Typography sx={{
                        mb:4,
                    }}
                                variant="h5" align="center" gutterBottom >
                        Social Media
                    </Typography>
                    <Grid container justifyContent="center">
                        <Grid item xs={2}>
                            <FacebookIcon />
                        </Grid>
                        <Grid item xs={10}>
                            <Link href="#facebook_travelbuddy" className={classes.link}>
                                Facebook
                            </Link>
                        </Grid>
                        <Grid item xs={2}>
                            <TwitterIcon />
                        </Grid>
                        <Grid item xs={10}>
                            <Link href="#twitter_travelbuddy" className={classes.link}>
                                Twitter
                            </Link>
                        </Grid>
                        <Grid item xs={2}>
                            <InstagramIcon />
                        </Grid>
                        <Grid item xs={10}>
                            <Link href="#instagram_travelbuddy" className={classes.link}>
                                Instagram
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Links
                    </Typography>
                    <Grid container justifyContent="center">
                        <Grid item xs={2}>
                            <HomeIcon />
                        </Grid>
                        <Grid item xs={10}>
                            <Link href="#" className={classes.link}>
                                Home
                            </Link>
                        </Grid>
                        <Grid item xs={2}>
                            <InfoIcon />
                        </Grid>
                        <Grid item xs={10}>
                            <Link href="/#/about-us" className={classes.link}>
                                About us
                            </Link>
                        </Grid>
                        <Grid item xs={2}>
                            <AlternateEmailIcon />
                        </Grid>
                        <Grid item xs={10}>
                            <Link href="/#/contact-form" className={classes.link}>
                                Contact Us
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography sx={{
                        mb:4,
                    }}
                                variant="h5" align="center" gutterBottom >
                        TravelBuddy
                    </Typography>
                    <Grid container justifyContent="center">
                        <Typography sx={{
                            mb:4,
                        }}
                                    variant="h5" align="center" gutterBottom >
                            <span style={{ color: theme.palette.primary.light }}>Explore the world with TravelBuddy</span>
                                    <br />
                                    <span style={{ color: theme.palette.primary.light }}>© 2023 TravelBuddy</span>
                        </Typography>
                    </Grid>
                </Grid>
                </Grid>
        </footer>
    );
}

export default Footer;
