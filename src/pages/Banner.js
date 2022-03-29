import { Container, Box } from "@mui/material"
import Typography from "@mui/material/Typography"
import { Img } from "react-image"

export default function Banner() {
  return (
    <Container  sx={{  color: 'primary.contrastText',display:"flex", justifyContent:'center' }} >
        <Typography variant="h1" align='center' >
            Discover
            <Img   src='/img/bannerRect.png' />
             Collect
            And Sell Rare 
            <Img   src='/img/bannerRect2.png' />
            <Img   src='/img/bannerRect3.png' />
            Nfts
        </Typography>
    </Container>
  )
}
