import { Container } from '@mui/material';
import About from './pages/About';
import Artgallery from './pages/Artgallery';
import Banner from './pages/Banner';
import FAQ from './pages/FAQ';
import Navbar from './pages/Navbar';

function App() {
  return (
    <Container fullWidth >
      
      <Navbar />
      <Banner />
      <About />
      <Artgallery />
      <FAQ />
    </Container>
  );
}

export default App;
