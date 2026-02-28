import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import CircularProgress from '@mui/joy/CircularProgress';

const theme = {
  cssVarPrefix: 'wingman',
  colorSchemes: {
    dark: {},
  },
};

export default function LoadingScreen() {
  return (
    <CssVarsProvider defaultMode="dark" theme={theme}>
      <Sheet
        variant="soft"
        sx={{
          overflow: 'auto',
          width: 'calc(100% - 32px)',
          height: '100%',
          p: 2,
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          sx={{ height: '100%' }}
        >
          <Typography level="h2" textAlign="center">
            RUSocial
          </Typography>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%', height: '100%' }}
          >
            <CircularProgress size="lg" />
          </Stack>
        </Stack>
      </Sheet>
    </CssVarsProvider>
  );
}
