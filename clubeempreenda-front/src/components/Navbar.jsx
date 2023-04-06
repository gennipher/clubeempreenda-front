import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { useRouter } from 'next/router'

export default function NavbarDeslogada() {
  const router = useRouter()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', cursor: 'pointer'  } }}
            onClick={() => router.push('/')}
          >
            Clube Empreenda
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }}
              onClick={() => router.push('/Login')}
            >
              Entrar
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 5, cursor: 'pointer'}}
              onClick={() => router.push('/Cadastro')}
            >
              Cadastrar
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
