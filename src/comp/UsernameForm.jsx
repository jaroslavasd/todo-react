import React from 'react';

import { Box, Button, TextField, Alert, Grid } from '@mui/material';

export function UsernameForm() {
  const [username, setUsername] = React.useState('');
  const [displayName, setDisplayName] = React.useState('');
  const isLowerCase = username === username.toLowerCase();
  const error = isLowerCase ? null : 'Username must be lower case';

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayName(username);
  };

  const handleChange = (event) => {
    setDisplayName('');
    setUsername(event.target.value);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ textAlign: 'center', m: 2 }}
      >
        <Grid container direction="row" justifyContent="center">
          <Grid item xs="auto">
            <Button
              style={{ fontWeight: 100 }}
              color="success"
              type="submit"
              variant="contained"
              disabled={Boolean(error)}
              sx={{ mr: 1 }}
            >
              Success
            </Button>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              placeholder="Your name"
              size="small"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
      {!Boolean(error) || <Alert severity="error">{error}</Alert>}

      {!Boolean(displayName) || (
        <Alert severity="info">Hello {displayName}</Alert>
      )}
    </>
  );
}
