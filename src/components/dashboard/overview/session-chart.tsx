import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';
import { ArrowClockwise as ArrowClockwiseIcon } from '@phosphor-icons/react/dist/ssr/ArrowClockwise';

function AreaGradient({ color, id }: { color: string; id: string }) {
    return (
        <defs>
            <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor={color} stopOpacity={0.5} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
        </defs>
    );
}

function getDaysInMonth(month: number, year: number) {
    const date = new Date(year, month, 0);
    const monthName = date.toLocaleDateString('pt-br', {
        month: 'short',
    });
    const daysInMonth = date.getDate();
    const days = [];
    let i = 1;
    while (days.length < daysInMonth) {
        days.push(`${monthName} ${i}`);
        i += 1;
    }
    return days;
}

export default function SessionsChart() {
    const theme = useTheme();
    const data = getDaysInMonth(4, 2024);

    const colorPalette = [
        theme.palette.primary.light,
        theme.palette.primary.main,
        theme.palette.primary.dark,
    ];

    return (
        <Card sx={{ width: '100%' }}>
            <CardHeader
                action={
                    <Button color="inherit" size="small" startIcon={<ArrowClockwiseIcon fontSize="var(--icon-fontSize-md)" />}>
                        Sync
                    </Button>
                }
                title="Projetos concluidos"
            />
            <CardContent>
                <Stack sx={{ justifyContent: 'space-between' }}>
                    <Stack
                        direction="row"
                        sx={{
                            alignContent: { xs: 'center', sm: 'flex-start' },
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <Typography variant="h4" component="p">
                            13.277
                        </Typography>
                        <Chip size="small" color="success" label="+35%" />
                    </Stack>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Total de projetos concluidos
                    </Typography>
                </Stack>
                <LineChart
                    colors={colorPalette}
                    xAxis={[{ scaleType: 'point', data, tickInterval: (index, i) => (i + 1) % 5 === 0 }]}
                    series={[
                        {
                            id: 'csc',
                            label: 'CSC',
                            showMark: false,
                            curve: 'linear',
                            stack: 'total',
                            area: true,
                            stackOrder: 'ascending',
                            data: [
                                30, 90, 60, 120, 150, 180, 240, 210, 270, 300, 180, 330, 360, 390, 420, 450, 390, 480, 510, 540, 480, 570, 600, 630, 660, 690, 720, 700, 780, 810
                            ],
                        },
                        {
                            id: 'iese',
                            label: 'IESE',
                            showMark: false,
                            curve: 'linear',
                            stack: 'total',
                            area: true,
                            stackOrder: 'ascending',
                            data: [
                                50, 90, 70, 140, 110, 170, 230, 200, 260, 290, 230, 320, 350, 380, 410, 440, 290, 470, 500, 530, 560, 590, 620, 650, 560, 680, 710, 740, 770, 800
                            ],
                        },
                        {
                            id: 'bright-cities',
                            label: 'Bright Cities',
                            showMark: false,
                            curve: 'linear',
                            stack: 'total',
                            stackOrder: 'ascending',
                            data: [
                                100, 150, 120, 170, 130, 200, 240, 220, 260, 280, 250, 300, 340, 370, 320, 390, 410, 350, 430, 450, 400, 470, 500, 520, 480, 540, 560, 590, 610, 630
                            ],
                            area: true,
                        },
                        {
                            id: 'icf-ny',
                            label: 'ICF NY',
                            showMark: false,
                            curve: 'linear',
                            stack: 'total',
                            stackOrder: 'ascending',
                            data: [
                                100, 150, 120, 170, 130, 200, 240, 220, 260, 280, 250, 300, 340, 370, 320, 390, 410, 350, 430, 450, 400, 470, 500, 520, 480, 540, 560, 590, 610, 630
                            ],
                            area: true,
                        },
                    ]}
                    height={250}
                    margin={{ left: 50, right: 20, top: 20, bottom: 20 }}
                    grid={{ horizontal: true }}
                    sx={{
                        '& .MuiAreaElement-series-organic': {
                            fill: "url('#organic')",
                        },
                        '& .MuiAreaElement-series-referral': {
                            fill: "url('#referral')",
                        },
                        '& .MuiAreaElement-series-direct': {
                            fill: "url('#direct')",
                        },
                    }}
                    slotProps={{
                        legend: {
                            hidden: true,
                        },
                    }}
                >
                    <AreaGradient color={theme.palette.primary.dark} id="csc" />
                    <AreaGradient color={theme.palette.primary.main} id="iese" />
                    <AreaGradient color={theme.palette.primary.light} id="bright-cities" />
                    <AreaGradient color={theme.palette.primary.light} id="icf-ny" />
                </LineChart>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button color="inherit" endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />} size="small">
                    Ver Detalhes
                </Button>
            </CardActions>
        </Card>
    );
}