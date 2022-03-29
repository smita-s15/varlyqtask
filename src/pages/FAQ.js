import { Container, Typography, Box, Stack } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { height } from '@mui/system';

export default function FAQ() {
    return (
        <Container fullwidth='true' sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2, display: "flex", justifyContent: 'center', }} >
            <Stack align='center'spacing={5} fullwidth='true'  >
                <Typography variant='h3' >
                    FAQs
                </Typography>
                <Stack spacing={5} textalign='left' >
                    {AccordItems.map((item, index) => {
                        return <Accordion key={index} sx={{bgcolor:'secondary.light', color: 'primary.contrastText', borderRadius:'20px'}} >
                            <AccordionSummary
                                expandIcon={<AddIcon style={{ color: "white" }}  />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography textalign='left' >
                                    {item.heading}
                                </Typography>
                            </AccordionSummary>
                                <Box />
                            <AccordionDetails align='left' >
                                {item.desc.map((desc, keyIndex) => <Typography key={keyIndex}  >{desc}</Typography>)}
                            </AccordionDetails>
                        </Accordion>
                    })}
                </Stack >
                <Stack sx={{bgcolor:'secondary.light', color: 'primary.contrastText', borderRadius:'20px', p:4}}>
                    <Typography as='h3'>Join Our Community</Typography>
                    <Typography as='subtitle1'>At a very high level, most NFTs are part of the Ethereum blockchain.</Typography>
                </Stack>
            </Stack>
        </Container>
    )
}

const AccordItems = [
    {
        heading: "What is NFT?",
        desc: ["nFT stands for ‘non-fugible token’.", "a NFT is basically data that is accounted for in a digital ledger, and data represents something specific and unique.", "A NFT can, for example, represent a unique piece of art or a game token."]
    },
    {
        heading: "What is NFT?",
        desc: ["nFT stands for ‘non-fugible token’.", "a NFT is basically data that is accounted for in a digital ledger, and data represents something specific and unique.", "A NFT can, for example, represent a unique piece of art or a game token."]
    },
    {
        heading: "What is NFT?",
        desc: ["nFT stands for ‘non-fugible token’.", "a NFT is basically data that is accounted for in a digital ledger, and data represents something specific and unique.", "A NFT can, for example, represent a unique piece of art or a game token."]
    },
    {
        heading: "What is NFT?",
        desc: ["nFT stands for ‘non-fugible token’.", "a NFT is basically data that is accounted for in a digital ledger, and data represents something specific and unique.", "A NFT can, for example, represent a unique piece of art or a game token."]
    },
]
