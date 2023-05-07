import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography, Container } from '@mui/material';
import theme from "../theme";

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://owomarsllfpnkcuwxlvl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93b21hcnNsbGZwbmtjdXd4bHZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMDQ5NTcsImV4cCI6MTk5ODg4MDk1N30.TklK9CbeZXZLq2j4O-cRFWvnd343Scuvh0qcD1SPGRQ';
const supabase = createClient(supabaseUrl, supabaseKey);


const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const { data: contact, error } = await supabase.from('contacts').insert([{ name: data.name, email: data.email, message: data.message }]);
        if (error) {
            console.log(error);
        } else {
            console.log(contact);
        }
        reset();
    };

    return (
        <Container

            maxWidth="xl"
            sx={{
                minHeight: '50vh',
                p: 2,
                mx: '2',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: theme.palette.background.default,
            }}
        >
        <section id="contact-form">
        <Typography variant="h4"
                    align="center"
                    sx={{ mb: 2, color: '#000000', py: 2}}>
                Contact Us
            </Typography>
        </section>


            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', sm: 'row' },
                }}
            >
                <Container
                    sx={{ mr: { xs: 0, sm: 2} }}>

                <img src="https://assets.website-files.com/5daaade3e3e3f04da71daa8e/61a5c24b981fcb45e628d867_Travel-Blog%20Small.gif" alt="Email gif" />
                </Container>

                <form onSubmit={handleSubmit(onSubmit)} className="contact-form" >

                    <TextField
                        {...register('name', { required: true })}
                        label="Name"
                        fullWidth
                        error={errors.name}
                        helperText={errors.name && 'This field is required'}
                        sx={{ mb: 2, width: '100%',background:theme.palette.background.default }}
                        variant="outlined"
                        aria-label="Name"
                    />
                    <TextField
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        label="Email"
                        fullWidth
                        error={errors.email}
                        helperText={
                            errors.email &&
                            (errors.email.type === 'required'
                                ? 'This field is required'
                                : 'Invalid email address')
                        }
                        sx={{ mb: 2, width: '100%',background:theme.palette.background.default }}
                        variant="outlined"
                        aria-label="Email"
                    />
                    <TextField
                        {...register('message', { required: true })}
                        label="Message"
                        multiline
                        rows={4}
                        error={errors.message}
                        helperText={errors.message && 'This field is required'}
                        sx={{ mb: 2, width: '100%', background:theme.palette.background.default}}
                        variant="outlined"
                        aria-label="Message"

                    />
                    <Button
                        type="submit"
                        variant="contained"
                        aria-label="Send Message"

                        sx={{
                            mt: 2,
                            width: '50%',
                            color: theme.palette.primary.contrastText,
                            backgroundColor: theme.palette.primary.dark
                    }}>
                        Send Message
                    </Button>



                </form>
            </Container>
        </Container>
    );
};

export default ContactForm;
