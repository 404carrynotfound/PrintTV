import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';

export default function PriceCard({tier}) {
    return (
        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4} >
            <Card>
                <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                        align: 'center',
                    }}
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[700],
                    }}
                />
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2, }}>
                        <Typography component="h2" variant="h3" color="text.primary">
                            ${tier.price}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            /mo
                        </Typography>
                    </Box>
                    <ul>
                        {tier.description.map((line) => (
                            <Typography component="li" variant="subtitle1" align="center" key={line} >
                                {line}
                            </Typography>
                        ))}
                    </ul>
                </CardContent>
                <CardActions>
                    {/* add route for pricing */}
                    <Button fullWidth variant={tier.buttonVariant}>
                        {tier.buttonText}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}