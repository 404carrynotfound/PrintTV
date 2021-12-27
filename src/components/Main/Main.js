import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import Header from '../Header';

import PriceCard from './PriceCard';

import { useAuthContext } from '../../contexts/AuthContext.js';
import { Navigate } from 'react-router-dom';

const tiers = [
    {
        title: 'Free',
        price: '0',
        description: [
            '100 channels',
            '4K channels',
            'FHD channels',
            'Email support',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro',
        subheader: 'Most popular',
        price: '15',
        description: [
            '500 channels',
            '4K channels',
            'FHD channels',
            'Email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '30',
        description: [
            '8000 channels',
            '4K channels',
            'FHD channels',
            'Email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];

const mainText = `Quickly build an effective pricing table for your potential customers with
this layout. It's built with default MUI components with little
customization.`;

function PricingContent() {

    const { user } = useAuthContext();

    if (user.email) return <Navigate to="/player"/>

    return (
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Header />
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom >
                    Pricing
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    {mainText}
                </Typography>
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (<PriceCard key={tier.price} tier={tier} />))}
                </Grid>
            </Container>
        </>
    );
}

export default function Pricing() {
    return <PricingContent />;
}