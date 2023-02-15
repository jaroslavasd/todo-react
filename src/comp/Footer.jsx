import qrcode from '../img/qrcode.png';
import { Grid, Typography } from '@mui/material';

export function Footer() {
  return (
    <Grid container sx={{ textAlign: 'center' }}>
      <Grid item xs={12}>
        <Typography>by Simona and Jaroslavas @Wix</Typography>
      </Grid>
      <Grid item xs={12}>
        <img
          alt=""
          src={qrcode}
          width="150em"
          height="150em"
          className="d-inline-block align-center"
        />
      </Grid>
    </Grid>
  );
}
