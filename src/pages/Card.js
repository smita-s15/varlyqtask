import { Box, Container, Link, Stack, Typography } from "@mui/material"
import { Img } from "react-image"
import Grid from '@mui/material/Grid';
import { bgcolor } from "@mui/system";

export const Card = () => {
    return (
        <Container fullwidth='true' direction='column' sx={{ bgcolor: 'secondary.main', color: 'primary.contrastText', p: 2,display:"flex", justifyContent:'center'}}  >
            <Stack direction='column'alignContent='center' sx={{justify:'center'}}>
            <Stack  direction='row' sx={{justify:'space-between', bgcolor:'primary.main'}} align='center' >
                    <Typography variant='h5' >Nft </Typography>
                    <Typography variant='h6' >Marketplace</Typography>
            </Stack>
            <Stack  direction='row' align='center'  >
                <Typography variant="h3">
                    Hot Drops
                </Typography>
                <Box h="50px" w='50px'>
                    <Img src='/img/fire.png' l />
                </Box>
            </Stack>     
            </Stack>
            
            {/* <Stack>
                {ExploreArr?.map((item, index) => {
                    return <Stack key={index} href={item.link} >
                        <Link>
                            <Typography >
                                {item.title}
                            </Typography>
                        </Link>
                    </Stack>
                })
                }
            </Stack>

            <Stack   >
                <Grid container >
                    {CardArr.map((item, index) =>
                        <Stack key={index} >
                            <CardComponent  title={item.title} desc={item.desc} ether={item.ether} etherImage={item.etherImage} />
                        </Stack>
                    )}
                </Grid>
            </Stack> */}
        </Container>
    )
}
const ExploreArr = [
    {
        link: "#",
        title: "Music"
    },
    {
        link: "#",
        title: "Sports"
    },
    {
        link: "#",
        title: "Arts"
    },
    {
        link: "#",
        title: "Community"
    },
    {
        link: "#",
        title: "Trading Card"
    },
    {
        link: "#",
        title: "Virtual World"
    },
    {
        link: "#",
        title: "Videos"
    },
    {
        link: "#",
        title: "More"
    },
]

const CardArr = [
    {
        // image: RectOne.png,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        // etherImage: EtherIamge
    },
    {
        // image: Rect2.png,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        // etherImage: EtherIamge.png

    }, {
        // image: Rect3.png,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        // etherImage: EtherIamge.png

    }, {
        // image: Rect4.png,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        // etherImage: EtherIamge.png

    }, {
        // image: Rect5.png,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        // etherImage: EtherIamge.png

    }, {
        // image: Rect6.png,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        // etherImage: EtherIamge.png

    }, {
        // image: Rect7.png,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        // etherImage: EtherIamge.png

    }, {
        // image: Rect8.png,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        // etherImage: EtherIamge.png

    },
]

const CardComponent = ({ image, title, desc, ether, etherImage }) => {
    return <Container >
        
        {/* <Img src={image} alt="logo-image" /> */}
        <Stack >
            <Typography variant="h6" >{title}</Typography>
            <Typography variant="subtitle1" >...</Typography>
        </Stack>
        <Stack  >
            <Typography variant="subtitle1" >
                {desc}
            </Typography>
        </Stack>
        <Stack >
            <Typography variant="subtitle1">{ether}</Typography>
            {/* <Circle h='20px' w='20px' bg='#5F7FEC' > */}
                {/* <Img src={ETH} h='200px' w='200px' /> */}
            {/* </Circle> */}
        </Stack>

            {/* <HoverButton   /> */}
    </Container>
}

// const HoverButton = () => {
//     return (
//         <Button
//             bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 110%, #052FC2 10%   )'
//             w={{ sm: '80px', md: '130px' }}
//             h={{ sm: '40px', md: '50px' }}
//             fontSize={{ sm: '8px', md: '12px', lg: '14px', xl: '16px' }}
//             borderRadius={{ sm: '10px', md: '20px' }}
//             box-shadow='4px 38px 62px'
//             fontWeight='500'
//             variant='link'
//             letterSpacing='50%'
//             color='secondary'
//             data-aos="zoom-down"
//             className={styles.hoverCollectBtn}
//         >
//             Collect Now
//         </Button>
//     )
// }

