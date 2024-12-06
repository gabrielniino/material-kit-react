'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import { alpha, useTheme } from '@mui/material/styles';
import type { SxProps } from '@mui/material/styles';
import { ArrowClockwise as ArrowClockwiseIcon } from '@phosphor-icons/react/dist/ssr/ArrowClockwise';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import type { ApexOptions } from 'apexcharts';

import { Chart } from '@/components/core/chart';

export interface CityRankingProps {
    chartSeries: { name: string; data: number[] }[];
    sx?: SxProps;
}

export function CityRanking({ chartSeries, sx }: CityRankingProps): React.JSX.Element {
    const chartOptions = useChartOptions();

    return (
        <Card sx={sx}>
            <CardHeader
                action={
                    <Button color="inherit" size="small" startIcon={<ArrowClockwiseIcon fontSize="var(--icon-fontSize-md)" />}>
                        Sync
                    </Button>
                }
                title="Ranking das Cidades Cadastradas"
            />
            <CardContent>
                <Chart height={350} options={chartOptions} series={chartSeries} type="bar" width="100%" />
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

function useChartOptions(): ApexOptions {
    const theme = useTheme();

    return {
        chart: { background: 'transparent', stacked: false, toolbar: { show: false } },
        colors: [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)],
        dataLabels: { enabled: false },
        fill: { opacity: 1, type: 'solid' },
        grid: {
            borderColor: theme.palette.divider,
            strokeDashArray: 2,
            xaxis: { lines: { show: true } },
            yaxis: { lines: { show: false } },
        },
        legend: { show: false },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '50%'
            }
        },
        stroke: { colors: ['transparent'], show: true, width: 2 },
        theme: { mode: theme.palette.mode },
        xaxis: {
            axisBorder: { color: theme.palette.divider, show: true },
            axisTicks: { color: theme.palette.divider, show: true },
            categories: ['Londrina', 'Assaí', 'Curitiba', 'Maringá', 'Ponta Grossa', 'Alvorada do Sul', 'Primeiro de Maio', 'Umuarama'],
            labels: { offsetY: 0, style: { colors: theme.palette.text.secondary } },
            min: 0, // Define o valor mínimo do eixo X
            max: 100, // Define o valor máximo do eixo X
        },
        yaxis: {
            labels: {
                formatter: (value) => (value > 0 ? `${value} %` : `${value}`),
                style: { colors: theme.palette.text.secondary },
            },
        },
    };
}
