import { Container, Stack, Typography, Button, Chip } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Img } from 'react-image'

export default function About() {
  return (
    <Container fullwidth sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2,display:"flex", justifyContent: 'space-between' }} >
        <Stack sx={{width:'50%'}}>
         <Typography variant='h2' >
             About
        </Typography> 
        <Typography variant='' >
            At a very high level, most NFTs are part of the Ethereum blockchain. Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain also supports these NFTs, which store extra information that makes them work differently from, say, an ETH coin. It is worth noting that other blockchains can implement their own versions of NFTs.
        </Typography> 
        <Chip style={{width: 120, background: 'linear-gradient(to right bottom, #430089, #82ffa1)'}}>
            <Button sx={{borderRadius:'20px', backgroundColor:'secondary.main'  }}>Explore</Button>
            </Chip>
        </Stack> 
        {/* <Stack sx={{width:'50%' }}>
            <Box sx={{width:'10%' , height:'100px' }}>
                <Img   src='/img/about.png'  />
            </Box>
        </Stack> */}
    </Container >
  )
}
