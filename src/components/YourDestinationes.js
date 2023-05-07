import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import ExploreIcon from '@mui/icons-material/Explore';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import theme from '../theme';

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://owomarsllfpnkcuwxlvl.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93b21hcnNsbGZwbmtjdXd4bHZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMDQ5NTcsImV4cCI6MTk5ODg4MDk1N30.TklK9CbeZXZLq2j4O-cRFWvnd343Scuvh0qcD1SPGRQ')

const YourDestinations = () => {
    const [note, setNote] = useState('');

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    };

    const add = async () => {
        const { data, error } = await supabase
            .from('destinations')
            .insert([
                { destinations: 'someValue' },
            ])

    }

    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'flex' },
                backgroundImage: 'url(/images/background.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                py: 4,
            }}
        >
            <Typography
                variant="h4"
                noWrap
                sx={{
                    fontFamily: 'Raleway',
                    fontWeight: 800,
                    letterSpacing: '.2rem',
                    mb: 2,
                }}
            >
                Your Destinations
            </Typography>
            <ButtonGroup
                fullWidth
                variant="contained"
                aria-label="Your Destinations"
            >
                <Button
                    startIcon={<ExploreIcon />}
                    sx={{
                        color: theme.palette.primary.dark,
                        backgroundColor: theme.palette.primary.light,
                        fontFamily: 'Raleway',
                        fontWeight: 900,
                        letterSpacing: '.2rem',
                        textDecoration: 'none',
                        textTransform: 'none',
                        justifyContent: 'center',
                        py: 2,
                    }}
                >
                    My Destinations
                </Button>
                <Button
                    endIcon={<AddIcon />}
                    sx={{
                        color: theme.palette.primary.dark,
                        backgroundColor: theme.palette.secondary.light,
                        fontFamily: 'Raleway',
                        fontWeight: 800,
                        letterSpacing: '.2rem',
                        textDecoration: 'none',
                        textTransform: 'none',
                        py: 2,
                    }}
                    onClick={() => add()}
                >
                    Create new destination
                </Button>
            </ButtonGroup>
            <TextField
                label="Note"
                multiline
                rows={4}
                value={note}
                onChange={handleNoteChange}
                sx={{
                    width: '100%',
                    mt: 2,
                }}
            />
        </Stack>
    );
};

export default YourDestinations;
