 "use client"
import { Facebook } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import Link from 'next/link';




const Footer = () => {
    const navItems = [{
        route:"Home",
        pathname:'/'
    },
    {
        route:"pages",
        pathname:'/pages'
    },
    
    {
        route:"category",
        pathname:'/category'
    },
    
    {
        route:"contact",
        pathname:'/contact'
    },
    
    {
        route:"about",
        pathname:'/about'
    },
    
 ];
    return (
        <div>
            <Box className="bg-black px-2 py-10">
            <Container>
            <Box className='w-full text-center' sx={{
                "& svg": {
                    color:"white",
                }
              }} >
            <IconButton>
             
              <Facebook></Facebook>
                <Facebook></Facebook>
                <Facebook></Facebook>
            
            </IconButton>
          </Box>

          <Box className='w-full text-center' >
            {navItems.map((item) => (
             <Link key={item} href={item.pathname}>
                <Button className='text-white'>
                    {item.route}
                </Button>
             </Link>
            ))}
          </Box>

          <Typography color={'gray'} variant='body2' textAlign={'center'}>
            @2323 The Dragon New . Design By owner
          </Typography>

            </Container>
            </Box>
        </div>
    );
};

export default Footer;