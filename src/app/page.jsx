import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const WIDE_AREA_PARAMS = {
  xs: 0,
  sm: 5,
  md: 10,
  lg: 20,
  xl: 40,
};

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={0}
        sx={{
          pt: 10,
          px: WIDE_AREA_PARAMS,
          minWidth: '100%',
          height: '100vh',
          backgroundImage: 'url(/IMG_4891.JPG)',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Grid xs={12}>
          <Typography variant="h5" sx={{ ml: 0.9, mt: 20, textTransform: 'uppercase' }}>
            Психологические консультации онлайн
          </Typography>
          <Typography variant="h1" sx={{ mt: 0, textTransform: 'uppercase' }}>
            Роксолана
          </Typography>
          <Typography variant="h1" sx={{ ml: 13, mt: 2, textTransform: 'uppercase' }}>
            Микитин
          </Typography>
          <Box sx={{
            maxWidth: '560px', backgroundColor: 'transparent', p: 2, mt: 8, borderRadius: '6px', opacity: 0.9,
          }}
          >
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Box sx={{
                minWidth: '100px',
                height: '100px',
                backgroundImage: 'url(/IMG_5497.JPG)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '50%',
              }}
              />
              <Typography variant="subtitle1" sx={{ mx: 4 }}>
                У каждого человека есть свой путь разрушения и путь развития,
                и я точно знаю, по какому стоит пройти индивидуально лично ТЕБЕ
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
