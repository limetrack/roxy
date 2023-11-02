import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import MediaCard from '../components/MediaCard';

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <div>
        <Alert severity="info" sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Hello, ROXY 👋</AlertTitle>
          You are awesome!
        </Alert>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid xs={6}>
            <MediaCard
              heading="CMYK"
              text="The CMYK color model (also known as process color, or four color)"
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="HSL and HSV"
              text="HSL (for hue, saturation, lightness)"
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="RGB"
              text="An RGB color space is any additive color space"
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="CIELAB"
              text="The CIELAB color space, also referred to as L*a*b*"
            />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
