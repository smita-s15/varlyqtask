import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Img } from 'react-image'

export default function About() {
  return (
    <Container fullwidth='true' sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2,display:"flex", justifyContent: 'space-between' }} >
        <Stack sx={{width:'50%'}}>
         <Typography variant='h2' >
             About
        </Typography> 
        <Typography variant='subtitle1' >
            At a very high level, most NFTs are part of the Ethereum blockchain. Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain also supports these NFTs, which store extra information that makes them work differently from, say, an ETH coin. It is worth noting that other blockchains can implement their own versions of NFTs.
        </Typography> 
        </Stack> 
        <Stack sx={{ justifyContent:'center' }}>
                <Img   src='/img/about.png' style={{height:'300px', width:'300px'}}  />
        </Stack>
    </Container >
  )
}
