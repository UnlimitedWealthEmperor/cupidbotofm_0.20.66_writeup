/**
 * Settings page - general, platform-specific, account, presets.
 */
import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Stack,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Divider,
  Switch,
} from '@mui/joy';
import { useApp } from '../context/AppContext';
import { requestData, saveSettings } from '../api';

export default function Settings() {
  const { settings, actions } = useApp();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await requestData('settings');
        if (!cancelled && data) actions.setSettings(data);
      } catch (e) {
        if (!cancelled) actions.setError(e.message);
      }
    })();
    return () => { cancelled = true; };
  }, [actions]);

  const handleChange = (key, value) => {
    const next = { ...settings, [key]: value };
    actions.setSettings(next);
    saveSettings(next).catch(console.error);
  };

  return (
    <Stack spacing={3}>
      <Box>
        <Typography level="h3" sx={{ mb: 1 }}>
          Settings
        </Typography>
        <Typography level="body-md" color="neutral">
          Configure bot behavior and platform options.
        </Typography>
      </Box>

      <Box>
        <Typography level="title-lg" sx={{ mb: 2 }}>
          General
        </Typography>
        <Stack spacing={2}>
          <FormControl>
            <FormLabel>Auto-reply delay (seconds)</FormLabel>
            <Input
              type="number"
              value={settings.autoReplyDelay ?? 30}
              onChange={(e) => handleChange('autoReplyDelay', Number(e.target.value) || 30)}
              slotProps={{ input: { min: 5, max: 300 } }}
            />
            <FormHelperText>Minimum seconds between auto-replies</FormHelperText>
          </FormControl>
          <FormControl>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Switch
                checked={settings.autoReplyEnabled ?? true}
                onChange={(e) => handleChange('autoReplyEnabled', e.target.checked)}
              />
              <FormLabel>Enable auto-reply</FormLabel>
            </Stack>
          </FormControl>
        </Stack>
      </Box>

      <Divider />

      <Box>
        <Typography level="title-lg" sx={{ mb: 2 }}>
          Account
        </Typography>
        <Typography level="body-sm" color="neutral">
          Manage your account and billing from the website.
        </Typography>
      </Box>

      <Box>
        <Typography level="title-lg" sx={{ mb: 2 }}>
          Presets
        </Typography>
        <Typography level="body-sm" color="neutral">
          Configure message presets and templates.
        </Typography>
      </Box>
    </Stack>
  );
}
