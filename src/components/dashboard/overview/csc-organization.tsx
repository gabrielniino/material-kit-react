import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { CurrencyDollar as CurrencyDollarIcon } from '@phosphor-icons/react/dist/ssr/CurrencyDollar';

export interface BudgetProps {
  diff?: number;
  trend: 'up' | 'down';
  sx?: SxProps;
  value: string;
}

export function CscOrganization({ diff, sx }: BudgetProps): React.JSX.Element {

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="h5">
                CSC
              </Typography>
            </Stack>
            <Avatar sx={{ backgroundColor: 'var(--mui-palette-primary-main)', height: '56px', width: '56px' }}>
              <CurrencyDollarIcon fontSize="var(--icon-fontSize-lg)" />
            </Avatar>
          </Stack>
          {diff ? (
            <Stack sx={{ alignItems: 'flex-start' }} direction="column" spacing={2}>
              <Stack sx={{ alignItems: 'flex-start' }} direction="column" spacing={0.5}>
              </Stack>
              <Typography color="text.secondary" variant="caption">
                64 Dimensões
              </Typography>
              <Typography color="text.secondary" variant="caption">
                74 Indicadores
              </Typography>
            </Stack>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
}
