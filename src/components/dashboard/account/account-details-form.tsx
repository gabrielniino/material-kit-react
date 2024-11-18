'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';

const states = [
  { value: 'acre', label: 'Acre' },
  { value: 'alagoas', label: 'Alagoas' },
  { value: 'amapa', label: 'Amapá' },
  { value: 'amazonas', label: 'Amazonas' },
  { value: 'bahia', label: 'Bahia' },
  { value: 'ceara', label: 'Ceará' },
  { value: 'distrito-federal', label: 'Distrito Federal' },
  { value: 'espirito-santo', label: 'Espírito Santo' },
  { value: 'goias', label: 'Goiás' },
  { value: 'maranhao', label: 'Maranhão' },
  { value: 'mato-grosso', label: 'Mato Grosso' },
  { value: 'mato-grosso-do-sul', label: 'Mato Grosso do Sul' },
  { value: 'minas-gerais', label: 'Minas Gerais' },
  { value: 'para', label: 'Pará' },
  { value: 'paraiba', label: 'Paraíba' },
  { value: 'parana', label: 'Paraná' },
  { value: 'pernambuco', label: 'Pernambuco' },
  { value: 'piaui', label: 'Piauí' },
  { value: 'rio-de-janeiro', label: 'Rio de Janeiro' },
  { value: 'rio-grande-do-norte', label: 'Rio Grande do Norte' },
  { value: 'rio-grande-do-sul', label: 'Rio Grande do Sul' },
  { value: 'rondonia', label: 'Rondônia' },
  { value: 'roraima', label: 'Roraima' },
  { value: 'santa-catarina', label: 'Santa Catarina' },
  { value: 'sao-paulo', label: 'São Paulo' },
  { value: 'sergipe', label: 'Sergipe' },
  { value: 'tocantins', label: 'Tocantins' },
] as const;

export function AccountDetailsForm(): React.JSX.Element {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="Edite suas imformações pessoais." title="Perfil" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Primeiro nome</InputLabel>
                <OutlinedInput defaultValue="Sofia" label="Primeiro nome" name="firstName" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Sobrenome</InputLabel>
                <OutlinedInput defaultValue="Rivers" label="Sobrenome" name="lastName" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Email</InputLabel>
                <OutlinedInput defaultValue="sofia@devias.io" label="Email" name="email" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Numero de telefone</InputLabel>
                <OutlinedInput label="Numero de telefone" name="phone" type="tel" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Estado</InputLabel>
                <Select defaultValue="Paraná" label="Estado" name="state" variant="outlined">
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Cidade</InputLabel>
                <OutlinedInput label="Cidade" />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">Salvar</Button>
        </CardActions>
      </Card>
    </form>
  );
}
