/* eslint-disable max-len */

'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const WIDE_AREA_PARAMS = {
  xs: 3,
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

const DIPLOMAS = [
  'IMG_3055.JPG',
  'IMG_3484.PNG',
  'IMG_7242.JPG',
  'IMG_7974.jpg',
];

const plan = [
  'Вы озвучиваете свою проблему, как давно она существует, и как уже пробовали с ней работать',
  'Выясняем, какой результат хотите и что надеетесь получить',
  'Прокладываем к нему индивидуальный, выгодный вам маршрут',
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
          pt: { xs: 0, sm: 10 },
          px: WIDE_AREA_PARAMS,
          minWidth: '100%',
          height: '100vh',
          backgroundImage: 'url(/IMG_4891.JPG)',
          backgroundPosition: { xs: 'right -120px center', sm: 'right' },
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Grid xs={12}>
          <Typography
            variant="h5"
            sx={{
              ml: { xs: 0.2, sm: 0.9 },
              mt: { xs: 10, sm: 20 },
              textTransform: 'uppercase',
              letterSpacing: '1px',
              width: { xs: 60, sm: '100%' },
            }}
          >
            Психологические консультации онлайн
          </Typography>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Typography variant="h4" sx={{ mt: 8, textTransform: 'uppercase' }}>
              Роксолана
            </Typography>
            <Typography variant="h4" sx={{ ml: 5, mt: 0, textTransform: 'uppercase' }}>
              Микитин
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography variant="h1" sx={{ mt: 0, textTransform: 'uppercase' }}>
              Роксолана
            </Typography>
            <Typography variant="h1" sx={{ ml: 21, mt: 0, textTransform: 'uppercase' }}>
              Микитин
            </Typography>
          </Box>
          <Stack
            direction="column"
            justifyContent="flex-end"
            sx={{
              height: { xs: '45%', sm: 'auto' },
            }}
          >
            <Box sx={{
              maxWidth: '800px',
              backgroundColor: { xs: 'white', sm: 'transparent' },
              p: 2,
              mt: { xs: 10, sm: 8 },
              borderRadius: '6px',
              opacity: { xs: 0.9, sm: 1 },
            }}
            >
              <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
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
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle2" align="left">
                      Кожна людина має вибір.
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      І вона може обрати жити своє найкраще життя, правильно вибудувавши свою стратегію.
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      <strong>Чи готовий ти створити</strong>
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      <strong>ЖИТТЯ СВОЄЇ МРЇЇ ?</strong>
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
                  <Box sx={{ mx: 4 }}>
                    <Typography variant="h6">
                      Кожна людина має вибір.
                      І вона може обрати жити своє найкраще життя, правильно вибудувавши свою стратегію.
                    </Typography>
                    <Typography variant="h6">
                      <strong>Чи готовий ти створити ЖИТТЯ СВОЄЇ МРЇЇ ?</strong>
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={0}
        sx={{
          px: WIDE_AREA_PARAMS,
          minWidth: '100%',
          pt: 16,
          pb: { xs: 8, sm: 16 },
          // borderBottom: `1px solid ${BORDER_COLOR}`,
        }}
      >
        {expirience.map((exp) => (
          <Grid
            container
            key={exp.title}
            xs={12}
            sm={4}
            justifyContent="center"
            alignItems="center"
            sx={{
              mb: { xs: 8, sm: 0 },
            }}
          >
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
          // height: '800px',
          py: 16,
          // borderBottom: `1px solid ${BORDER_COLOR}`,
          // background: 'rgb(238,238,238)',
          background: 'linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(221,221,221,0.9150253851540616) 17%, rgba(255,255,255,1) 100%)',
        }}
      >
        <Grid container xs={12} sm={6} justifyContent="center" alignItems="center">
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
        <Grid container xs={12} sm={6} justifyContent="center" alignItems="center">
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
            <Typography variant="body1" textAlign="left" sx={{ pb: 4 }}>
              Ключ к счастью, спокойствию и уверенности лежит через знания и понимание себя, что про вас, а где иллюзия.
              Избавляясь от балласта чужих ожиданий, вы выходите на новый уровень отношений с собой и начинаете руководить
              реальностью, а не подчиняться обстоятельствам.
            </Typography>

            <Button
              sx={{ color: 'initial' }}
              variant="outlined"
              color="primary"
              size="large"
              target="_blank"
              href="https://t.me/RoksolanaMik"
              endIcon={<TelegramIcon color="primary" />}
            >
              Записаться
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        id="cases"
        container
        rowSpacing={0}
        columnSpacing={0}
        justifyContent="center"
        sx={{
          px: WIDE_AREA_PARAMS,
          py: 16,
          minWidth: '100%',
        }}
      >
        <Grid container xs={12} justifyContent="center" alignItems="center">
          <Stack spacing={4} direction="column" justifyContent="flex-start" alignItems="center">
            <Typography variant="h2" textAlign="center" sx={{ width: '100%', pb: 4 }}>
              С чем я работаю
            </Typography>
            <Grid container rowSpacing={2} columnSpacing={4}>
              {cases.map((text) => (
                <Grid key={text} xs={12} sm={6} spacing={8}>
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
        <Grid
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
          columnSpacing={2}
          sx={{
            pt: 8,
          }}
        >
          {DIPLOMAS.map((diploma) => (
            <Grid key={diploma} xs={12} sm={3}>
              <Zoom>
                <Box
                  aria-label="That Wanaka Tree, New Zealand by Laura Smetsers"
                  role="img"
                  sx={{
                    width: '100%',
                    height: { xs: '280px', sm: '180px' },
                    backgroundImage: `url(/${diploma})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    border: '1px solid #bebebe',
                  }}
                />
              </Zoom>
            </Grid>
          ))}
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
                <Grid key={text} xs={6} sm={3} alignItems="center" justifyContent="center">
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
      <Grid
        id="plan"
        container
        rowSpacing={0}
        columnSpacing={0}
        justifyContent="center"
        sx={{
          px: WIDE_AREA_PARAMS,
          pt: 16,
          pb: { xs: 8, sm: 16 },
          minWidth: '100%',
          // height: '800px',
          // borderBottom: `1px solid ${BORDER_COLOR}`,
          // background: 'rgb(238,238,238)',
          // background: 'linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(221,221,221,0.9150253851540616) 17%, rgba(255,255,255,1) 100%)',
        }}
      >
        <Grid container xs={12} justifyContent="center" alignItems="center" columnSpacing={4}>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Typography variant="h3" textAlign="center" sx={{ width: '100%', pr: 0 }}>
              Ход нашей
            </Typography>
            <Typography variant="h3" textAlign="center" sx={{ width: '100%', pl: 16, pb: 12 }}>
              работы
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography variant="h1" textAlign="center" sx={{ width: '100%', pr: 24 }}>
              Ход нашей
            </Typography>
            <Typography variant="h1" textAlign="center" sx={{ width: '100%', pl: 24, pb: 12 }}>
              работы
            </Typography>
          </Box>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            divider={<Divider orientation="vertical" flexItem />}
          >
            {plan.map((exp, index) => (
              <Grid
                container
                key={exp.title}
                xs={12}
                sm={4}
                justifyContent="center"
                alignItems="center"
                sx={{
                  mb: { xs: 8, sm: 0 },
                }}
              >
                <Stack spacing={4} direction="column" justifyContent="center" alignItems="center">
                  <Box sx={{
                    width: '100px',
                    height: '100px',
                    border: `2px solid ${BORDER_COLOR}`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  >
                    <Typography variant="h3">
                      {index + 1}
                    </Typography>
                  </Box>
                  <Typography variant="h5" textAlign="center">
                    {exp}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        id="variant"
        container
        rowSpacing={0}
        columnSpacing={0}
        justifyContent="center"
        sx={{
          px: WIDE_AREA_PARAMS,
          py: 16,
          minWidth: '100%',
          background: 'linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(221,221,221,0.9150253851540616) 17%, rgba(255,255,255,1) 100%)',
        }}
      >
        <Grid container xs={12} justifyContent="center" alignItems="center">
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Typography variant="h3" textAlign="left" sx={{ ml: 0 }}>
              Вариант
            </Typography>
            <Typography variant="h3" textAlign="left" sx={{ pl: 8, pb: 12 }}>
              проведения
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography variant="h1" textAlign="left" sx={{ width: '100%', pr: 24 }}>
              Вариант
            </Typography>
            <Typography variant="h1" textAlign="left" sx={{ width: '100%', pl: 24, pb: 12 }}>
              проведения
            </Typography>
          </Box>
          <Grid container sx={{ width: '100%' }}>
            <Grid xs={12} sm={6}>
              <Stack direction="row" sx={{ ml: { xs: 4, sm: 8 }, mb: 8 }}>
                <Typography variant="h5" textAlign="left" sx={{ width: '260px' }}>
                  1 час
                </Typography>
                <Typography variant="h5" textAlign="left">
                  1600₴
                </Typography>
              </Stack>
              <Stack direction="row" sx={{ ml: { xs: 4, sm: 8 }, mb: 8 }}>
                <Typography variant="h5" textAlign="left" sx={{ width: '260px' }}>
                  4 сессии (месяц)
                </Typography>
                <Typography variant="h5" textAlign="left">
                  5000₴
                </Typography>
              </Stack>
              <Stack direction="row" sx={{ ml: { xs: 4, sm: 8 }, mb: 8 }}>
                <Typography variant="h5" textAlign="left" sx={{ width: '260px' }}>
                  8 сессий (2 месяца)
                </Typography>
                <Typography variant="h5" textAlign="left">
                  10000₴
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} sm={6}>
              <Typography variant="h5" textAlign="left" sx={{ ml: { xs: 4, sm: 0 }, mb: { xs: 4, sm: 4 } }}>
                Выбранные вами дата и время бронируются после перевода оплаты на карту monobank
              </Typography>
              <Typography variant="h5" textAlign="left" sx={{ ml: { xs: 4, sm: 0 }, mb: { xs: 4, sm: 8 } }}>
                Встреча проходит с помощью видео-звонка в Telegram
              </Typography>
              <Typography variant="h5" textAlign="left" sx={{ ml: { xs: 4, sm: 0 }, mb: { xs: 4, sm: 8 } }}>
                При себе необходимо иметь блокнот и ручку
              </Typography>
              <Button
                sx={{
                  color: 'initial',
                  mt: 2,
                  ml: { xs: 12, sm: 0 },
                }}
                variant="outlined"
                color="primary"
                size="large"
                target="_blank"
                href="https://t.me/RoksolanaMik"
                endIcon={<TelegramIcon color="primary" />}
              >
                Записаться
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        id="plan"
        container
        rowSpacing={0}
        columnSpacing={0}
        justifyContent="center"
        sx={{
          px: WIDE_AREA_PARAMS,
          minWidth: '100%',
          // height: '800px',
          // borderBottom: `1px solid ${BORDER_COLOR}`,
          // background: 'rgb(238,238,238)',
          background: 'linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(221,221,221,0.9150253851540616) 17%, rgba(255,255,255,1) 100%)',
        }}
      >
        <Grid
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
          sx={{
            py: 2,
            borderTop: '1px solid #bebebe',
          }}
        >
          <Grid xs={12} sm={4}>
            <Typography variant="h6" textAlign="left" sx={{ flex: 1, display: { xs: 'none', sm: 'block' } }}>
              PSYCHOLOGIST
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              spacing={2}
              sx={{ display: { xs: 'flex', sm: 'none' } }}
            >
              <Typography variant="h6" textAlign="left" sx={{ flex: 1 }}>
                PSYCHOLOGIST
              </Typography>
              <IconButton
                aria-label="telegram"
                size="large"
                color="primary"
                target="_blank"
                href="https://t.me/RoksolanaMik"
              >
                <TelegramIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                aria-label="instagram"
                size="large"
                color="error"
                target="_blank"
                href="https://instagram.com/roksolana.psychologist"
              >
                <InstagramIcon fontSize="inherit" />
              </IconButton>
            </Stack>
          </Grid>
          <Grid xs={12} sm={4}>
            <Typography variant="h6" textAlign={{ xs: 'left', sm: 'center' }}>
              Микитин Роксолана Владимировна
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={2}>
              <IconButton
                aria-label="telegram"
                size="large"
                color="primary"
                target="_blank"
                href="https://t.me/RoksolanaMik"
              >
                <TelegramIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                aria-label="instagram"
                size="large"
                color="error"
                target="_blank"
                href="https://instagram.com/roksolana.psychologist"
              >
                <InstagramIcon fontSize="inherit" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
