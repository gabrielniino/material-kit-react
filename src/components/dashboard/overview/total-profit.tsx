import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Receipt as ReceiptIcon } from '@phosphor-icons/react/dist/ssr/Receipt';

export interface TotalProfitProps {
  sx?: SxProps;
  value: string;
}

export function TotalProfit({ sx }: TotalProfitProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" gutterBottom variant="h5">
                ICF NY
              </Typography>
              {/* <Typography variant="h4">{value}%</Typography> */}
            </Stack>
            <Avatar sx={{ backgroundColor: 'var(--mui-palette-primary-main)', height: '56px', width: '56px' }}>
              <ReceiptIcon fontSize="var(--icon-fontSize-lg)" />
            </Avatar>
          </Stack>
          <Stack sx={{ alignItems: 'flex-start' }} direction="column" spacing={2}>
            <Stack sx={{ alignItems: 'flex-start' }} direction="column" spacing={0.5}>
            </Stack>
            <Typography color="text.secondary" variant="caption">
              6 Dimensões
            </Typography>
            <Typography color="text.secondary" variant="caption">
              + Indicadores
            </Typography>
          </Stack>
          {/* <div>
            <LinearProgress value={value} variant="determinate" />
          </div> */}
        </Stack>
      </CardContent>
    </Card>
  );
}
