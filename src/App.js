import { Container } from '@mui/material';
import About from './pages/About';
import Artgallery from './pages/Artgallery';
import Banner from './pages/Banner';
import { Card } from './pages/Card';
import FAQ from './pages/FAQ';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';

function App() {
  return (
    <Container fullwidth='true' >
      <Navbar />
      <Banner />
      <Card />
      <About />
      <Artgallery />
      <FAQ />
      <Footer />
    </Container>
  );
}

export default App;
