/* eslint-disable max-len */
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

const expirience = [
  { title: 'Клиентов', value: 140 },
  { title: 'Часов консультирования', value: 3700 },
  { title: 'Часов обучения', value: 2200 },
];

const BORDER_COLOR = '#696969';

const cases = [
  'Обида, ревность, кризис/тупик в отношениях',
  'Проблемы из семьи, детско-родительские отношения',
  'Стыд, сравнение себя с другими, неуверенность',
  'Любовный треугольник, интерес к занятым партерам',
  'Я ненужна / незначима / Я «сама» / я одна',
  'Чувство вины, неумение отказывать, личные границы',
  'Эмоциональная и любовная зависимость',
  'Нарушения пищевого поведения (РПП)',
  'Тревожность, раздражительность, навязчивые мысли, скучно',
  'Самореализация, карьера / не знаю чего хочу / выбор предназначения и дела жизни',
  'Обесценивание себя, критика, хроническое недовольство собой или другими / вижу в себе только недостатки',
  'Страх чужих оценок и мнений / не соответствовать ожиданиям / что ничего не получится',
];

const negativeCases = [
  'Депрессия',
  'Алкоголизм',
  'Игромания',
  'Наркомания',
];

export default function HomePage() {
  return (
    <Box>
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
          <Typography
            variant="h5"
            sx={{
              ml: 0.9, mt: 20, textTransform: 'uppercase', letterSpacing: '1px',
            }}
          >
            Психологические консультации онлайн
          </Typography>
          <Typography variant="h1" sx={{ mt: 0, textTransform: 'uppercase' }}>
            Роксолана
          </Typography>
          <Typography variant="h1" sx={{ ml: 21, mt: 0, textTransform: 'uppercase' }}>
            Микитин
          </Typography>
          <Box sx={{
            maxWidth: '700px', backgroundColor: 'transparent', p: 2, mt: 8, borderRadius: '6px', opacity: 0.9,
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
              <Typography variant="h6" sx={{ mx: 4 }}>
                У каждого человека есть свой путь разрушения и путь развития,
                и я точно знаю, по какому стоит пройти индивидуально лично ТЕБЕ
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={0}
        sx={{
          px: WIDE_AREA_PARAMS,
          minWidth: '100%',
          height: '500px',
          // borderBottom: `1px solid ${BORDER_COLOR}`,
        }}
      >
        {expirience.map((exp) => (
          <Grid container key={exp.title} xs={4} justifyContent="center" alignItems="center">
            <Stack spacing={4} direction="column" justifyContent="center" alignItems="center">
              <Box sx={{
                width: '180px',
                height: '180px',
                border: `2px solid ${BORDER_COLOR}`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              >
                <Typography variant="h3">
                  {exp.value}
                  +
                </Typography>
              </Box>
              <Typography variant="h5" textAlign="center">
                {exp.title}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={0}
        sx={{
          px: WIDE_AREA_PARAMS,
          minWidth: '100%',
          height: '800px',
          // borderBottom: `1px solid ${BORDER_COLOR}`,
          // background: 'rgb(238,238,238)',
          background: 'linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(221,221,221,0.9150253851540616) 17%, rgba(255,255,255,1) 100%)',
        }}
      >
        <Grid container xs={6} justifyContent="center" alignItems="center">
          <Stack spacing={4} direction="column" justifyContent="center" alignItems="center">
            <Box sx={{
              width: '300px',
              height: '600px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'url(/image_20232.png)',
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            />
          </Stack>
        </Grid>
        <Grid container xs={6} justifyContent="center" alignItems="center">
          <Stack spacing={4} direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h5" textAlign="left">
              Все люди очень разные, как и их ценности, потребности, желания, особенности и нужды.
            </Typography>
            <Typography variant="body1" textAlign="left">
              Ровняя себя под среднее значение (нормально, «ни туда, ни сюда») - человек идет не по своему пути,
              а значит и к счастью таким образом никогда не придет, будет выживать с ощущением тревоги, нереализованности,
              страха и уверенности - что он не в силах изменить свою жизнь.
            </Typography>
            <Typography variant="h4" textAlign="center">
              ЗАВИСИМОСТЕЙ У СЧАСТЛИВЫХ ЛЮДЕЙ НЕ БЫВАЕТ
            </Typography>
            <Typography variant="body1" textAlign="left">
              Ключ к счастью, спокойствию и уверенности лежит через знания и понимание себя, что про вас, а где иллюзия.
              Избавляясь от балласта чужих ожиданий, вы выходите на новый уровень отношений с собой и начинаете руководить
              реальностью, а не подчиняться обстоятельствам.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={0}
        justifyContent="center"
        sx={{
          px: WIDE_AREA_PARAMS,
          py: 16,
          minWidth: '100%',
          // height: '800px',
          // borderBottom: `1px solid ${BORDER_COLOR}`,
          // background: 'rgb(238,238,238)',
          // background: 'linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(221,221,221,0.9150253851540616) 17%, rgba(255,255,255,1) 100%)',
        }}
      >
        <Grid container xs={12} justifyContent="center" alignItems="center">
          <Stack spacing={4} direction="column" justifyContent="flex-start" alignItems="center">
            <Typography variant="h2" textAlign="center" sx={{ width: '100%', pb: 4 }}>
              С чем я работаю
            </Typography>
            <Grid container rowSpacing={2}>
              {cases.map((text) => (
                <Grid key={text} xs={6} spacing={8}>
                  <Stack direction="row">
                    <Typography variant="h6" textAlign="left">
                      •
                    </Typography>
                    <Typography variant="h6" textAlign="left" sx={{ ml: 2 }}>
                      {text}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={0}
        justifyContent="center"
        sx={{
          px: WIDE_AREA_PARAMS,
          py: 16,
          minWidth: '100%',
          // height: '800px',
          // borderBottom: `1px solid ${BORDER_COLOR}`,
          // background: 'rgb(238,238,238)',
          background: 'linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(221,221,221,0.9150253851540616) 17%, rgba(255,255,255,1) 100%)',
        }}
      >
        <Grid container xs={12} justifyContent="center" alignItems="center">
          <Stack spacing={4} direction="column" justifyContent="flex-start" alignItems="center">
            <Typography variant="h2" textAlign="center" sx={{ width: '100%', pb: 8 }}>
              Запросы, с которыми я не работаю
            </Typography>
            <Grid container rowSpacing={2}>
              {negativeCases.map((text) => (
                <Grid key={text} xs={3} alignItems="center" justifyContent="center">
                  <Stack direction="row" sx={{ mx: 4 }}>
                    {/* <Typography variant="h6" textAlign="left">
                      •
                    </Typography> */}
                    <Typography variant="h6" textAlign="center" sx={{ ml: 2 }}>
                      {text}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
            <Typography
              variant="h5"
              sx={{ py: 8 }}
              textAlign="center"
            >
              Работа с депрессией, алкоголизмом, игроманией и наркоманией требует специализированной
              помощи и обычно не решается только психологическим консультированием.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
