import { Facebook } from '@mui/icons-material';
import { Box, Container, IconButton, Stack } from '@mui/material';




const Footer = () => {
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

            </Container>
            </Box>
        </div>
    );
};

export default Footer;