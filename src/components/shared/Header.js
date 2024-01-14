import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImg from '@/assets/dragon.png'
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
    const currentDate = getCurrentDate()
    return (
        <Box className="w-full text-center">
            <Container>
                <Image  src={headingImg} width={500} height={500} alt="logo" className="mx-auto" />
            <Typography variant="body2" color='gray' textAlign={'center'}>
 Journalist without feee bro .
            </Typography>

            <Typography variant="body2" color='gray' textAlign={'center'}>
           {currentDate}
            </Typography>
             </Container> 
        </Box>
    );
};

export default Header;