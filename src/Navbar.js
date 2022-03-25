import { Circle } from '@mui/icons-material';
import { AppBar, Button, Container, Grid, Stack, Toolbar } from '@mui/material'
import Box from '@mui/material/Box';
// import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <Container fullwidth sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2,display:"flex", justifyContent: 'flex-end' }} >
            <Circle
                sx={{w:'350px',
                h:"350px",
                color:'secondary.main',
                position:'absolute',
                mr:'80%',
                mt:'-150%',
                filter: "blur(290px)"
                }}
            />
            <Button variant='link' href='#' color='secondary'  >Drops </Button>
            <Button variant='link' href='#' >Marketplace </Button>
            <Button variant='link' href='#'>Creator </Button>
            <Button variant='link' href='#' >Community </Button>
        </Container >
    );


};
export default Navbar;