import { AppBar, Button, Container, Grid, Stack, Toolbar } from '@mui/material'
import Box from '@mui/material/Box';

const Navbar = () => {
    return (
        <Container fullwidth sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2,display:"flex", justifyContent: 'flex-end' }} >
            <Button variant='link' href='#' color='secondary'  >Drops </Button>
            <Button variant='link' href='#' >Marketplace </Button>
            <Button variant='link' href='#'>Creator </Button>
            <Button variant='link' href='#' >Community </Button>
        </Container >
    );
};
export default Navbar;