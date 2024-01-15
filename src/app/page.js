import LatestNews from '@/components/ui/LatestNews/LatestNews';
import dynamic from 'next/dynamic';

const Grid = dynamic(() => import('@mui/material/Grid'), {
  ssr: false, // Set ssr to false to disable server-side rendering
});

const HomePage = () => {
  return (
    <>
      <h2>welcome to home page</h2>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <LatestNews></LatestNews>
        </Grid>
        <Grid item xs={4}>
          <h2>hi</h2>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
