import { Button, Container, Divider, Input, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Img } from 'react-image'
import { Link } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (
        <Container fullwidth='true' sx={{ bgcolor: 'secondary.light', color: 'primary.contrastText', p: 2, display: "flex", justifyContent: 'space-between' }}>
            <Stack spacing="4" flex="1" align='center' >
                <Img src='/img/Logo.png' style={{width:'100px', height:'100px'}} alt="logo" />
            </Stack>
            <Stack direction='row'   >
                <Stack >
                <Typography >
                    Sitemap
                </Typography>
                    {SocialArr?.map((item, index) => {
                        return <Stack key={index} href={item.link} >
                            <Button color='secondary'>{item.title}</Button>
                        </Stack>
                    })}
                </Stack>
                <Stack >
                    <Typography >
                        Sitemap
                    </Typography>
                    {SitemapArr?.map((item, index) => {
                        return <Stack key={index} href={item.link} >
                            <Button color='secondary'>{item.title}</Button>
                        </Stack>
                    })}
                </Stack>
            </Stack>
            <Stack   >
                <Typography >
                    Head Office
                </Typography>
                <Typography  >
                    Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22, Charlottesville, CA 45565
                </Typography>
                <Typography >
                    News Letter
                </Typography>
                <Box justifyContent='space-between' alignContent='center' align='center'>
                    <EmailIcon
    
                    />
                </Box>
                <Divider opacity='0.5' />
            </Stack>
        </Container>
    )
}

const SocialArr = [
    {
        link: "#",
        title: "Facebook"
    },
    {
        link: "#",
        title: "LinkdIn"
    },
    {
        link: "#",
        title: "Instagram"
    },
    {
        link: "#",
        title: "Twitter"
    },
]
const SitemapArr = [
    {
        link: "#",
        title: "Home"
    },
    {
        link: "#",
        title: "Abouts"
    },
    {
        link: "#",
        title: "Growers"
    },
    {
        link: "#",
        title: "Merchants"
    },
    {
        link: "#",
        title: "Contact"
    },
]


