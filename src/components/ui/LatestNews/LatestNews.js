"use client"
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import topNews from '@/assets/top-news.png'
import topImg2 from '@/assets/top-news2.png'

import Image from 'next/image';
const LatestNews = () => {
    return (
        <Box className="my-5">
         <Card >
      <CardActionArea>
     <CardMedia>
        <Image src={topNews} alt='top news' width={800}></Image>
     </CardMedia>
        <CardContent>
           <span className='w-[100px] p-1 my-5  rounded bg-red-500 text-white'>Technology</span>
          <Typography gutterBottom  >
           Bitcoin climbs as ELon Musk Says Tesla Likely to Accept it again
          </Typography>

          <Typography className='my-3' gutterBottom >
            By Nazmul Hasan SHadin
          </Typography>


          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    

    <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <Card >
      <CardActionArea>
     <CardMedia>
        <Image  src={topImg2} alt='top news' width={800}></Image>
     </CardMedia>
        <CardContent>
           <span className='w-[100px] p-1 my-5  rounded bg-red-500 text-white'>Technology</span>
          <Typography gutterBottom  >
           Bitcoin climbs as ELon Musk Says Tesla Likely to Accept it again
          </Typography>

          <Typography className='my-3' gutterBottom >
            By Nazmul Hasan SHadin
          </Typography>


          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>   
  </Grid>
  <Grid item xs={6}>

  </Grid>

</Grid> 

        </Box>
    );
};

export default LatestNews;