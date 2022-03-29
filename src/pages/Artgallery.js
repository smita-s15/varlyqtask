import { Button, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Img } from 'react-image'

export default function Artgallery() {
  return (
    <Container fullwidth='true' sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2,display:"flex", justifyContent: 'space-between' }} >
        <Stack sx={{ justifyContent:'center' }}>
                <Img   src='/img/art.png'  style={{height:'300px', width:'300px'}}  position='absolute' />
        </Stack>
        <Stack sx={{width:'50%' }}>
         <Typography variant='h2' >
             Art Gallery
        </Typography> 
        <Typography variant='subtitle1' >
            At a very high level, most NFTs are part of the Ethereum blockchain. Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain also supports these NFTs, which store extra information that makes them work differently from, say, an ETH coin. It is worth noting that other blockchains can implement their own versions of NFTs.
        </Typography> 
        <Button sx={{borderRadius:'20px' }}>Explore</Button>
        </Stack> 
    </Container >
  )
}
