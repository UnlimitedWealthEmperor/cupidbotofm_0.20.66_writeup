/**
 * Platform card component - platform icon, name, status, toggle, settings button.
 */
import React from 'react';
import { Card, CardContent, Typography, Switch, IconButton, Stack, Chip } from '@mui/joy';
import { getPlatformDisplayName } from '../utils';

function SettingsIcon() {
  return <span style={{ fontSize: '1.2rem' }}>&#9881;</span>;
}

const STATUS_LABELS = {
  running: 'Running',
  stopped: 'Stopped',
  error: 'Error',
};

const STATUS_COLORS = {
  running: 'success',
  stopped: 'neutral',
  error: 'danger',
};

export default function PlatformCard({
  platform,
  status = 'stopped',
  enabled = false,
  onToggle,
  onSettings,
  disabled,
}) {
  const displayName = getPlatformDisplayName(platform);

  return (
    <Card variant="outlined" sx={{ minWidth: 200 }}>
      <CardContent>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Typography level="title-md">{displayName}</Typography>
            <Chip size="sm" color={STATUS_COLORS[status] || 'neutral'} variant="soft">
              {STATUS_LABELS[status] || status}
            </Chip>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Switch
              checked={enabled}
              onChange={(e) => onToggle?.(e.target.checked)}
              disabled={disabled}
            />
            <IconButton
              variant="plain"
              color="neutral"
              size="sm"
              onClick={() => onSettings?.(platform)}
              aria-label="Settings"
            >
              <SettingsIcon />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
