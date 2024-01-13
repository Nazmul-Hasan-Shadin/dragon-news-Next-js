 "use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '@/assets/logo.png'
import { IconButton, Stack } from '@mui/material';
import { Facebook } from '@mui/icons-material';
import Link from 'next/link';
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

function Navbar() {



  return (
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
   <Image src={logo} width={100} height={100} alt='logo' />
         
          <Box className='w-full text-center' >
            {navItems.map((item) => (
             <Link key={item} href={item.pathname}>
                <Button className='text-white'>
                    {item.route}
                </Button>
             </Link>
            ))}
          </Box>

          <Box>
            <IconButton>
              <Stack direction={'row'} sx={{
                "& svg": {
                    color:"white",
                }
              }} >
              <Facebook></Facebook>
                <Facebook></Facebook>
                <Facebook></Facebook>
              </Stack>
            </IconButton>
          </Box>

     
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;