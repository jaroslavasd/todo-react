import logo from '../img/logo192.png';
import { createTheme } from '@mui/material/styles';

import { AppBar, Typography, Toolbar, Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: grey[100]
    }
  }
});

export function Header() {
  return (
    <AppBar position="static" theme={theme}>
      <Toolbar>
        <Avatar alt="logo" src={logo} variant="square" />
        <Typography component="div" sx={{ p: 2 }}>
          TODO Awesome React App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
