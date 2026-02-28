/**
 * Login/auth page - access token input, subscription validation, purchase links.
 */
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Link,
} from '@mui/joy';
import { BRAND_NAME, WEBSITE_URL, STRIPE_PORTAL_URL } from '../../shared/branding';

export default function Login() {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // Validation happens via API
      await window.parent?.postMessage?.(
        {
          source: 'actualPopup',
          action: 'setAccessToken',
          data: { token: token.trim() },
        },
        '*'
      );
      setToken('');
    } catch (e) {
      setError(e.message || 'Failed to save token');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 4,
        p: 3,
      }}
    >
      <Typography level="h2" sx={{ mb: 2, textAlign: 'center' }}>
        {BRAND_NAME}
      </Typography>
      <Typography level="body-md" color="neutral" sx={{ mb: 3, textAlign: 'center' }}>
        Enter your access token to activate the extension.
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <FormControl error={!!error}>
            <FormLabel>Access Token</FormLabel>
            <Input
              type="password"
              placeholder="Paste your access token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              disabled={loading}
            />
            {error && <FormHelperText>{error}</FormHelperText>}
          </FormControl>
          <Button type="submit" loading={loading} fullWidth>
            Save Token
          </Button>
        </Stack>
      </form>

      <Stack spacing={1} sx={{ mt: 3 }}>
        {WEBSITE_URL && (
          <Typography level="body-sm">
            Don&apos;t have a token?{' '}
            <Link href={WEBSITE_URL} target="_blank" rel="noopener noreferrer">
              Get a subscription
            </Link>
          </Typography>
        )}
        {STRIPE_PORTAL_URL && (
          <Typography level="body-sm">
            Manage billing:{' '}
            <Link href={STRIPE_PORTAL_URL} target="_blank" rel="noopener noreferrer">
              Customer Portal
            </Link>
          </Typography>
        )}
      </Stack>
    </Box>
  );
}
