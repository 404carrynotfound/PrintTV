import Container from '@mui/material/Container';

import { Copyright } from '../Common/Copyrigth';

export default function Footer() {
    return (
        <Container maxWidth="md" component="footer" sx={{ borderTop: (theme) => `1px solid ${theme.palette.divider}`, mt: 8, py: [3, 6], }}>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    )
}