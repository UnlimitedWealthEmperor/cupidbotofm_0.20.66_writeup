/**
 * Dashboard page - active platforms, bot status, quick actions, subscription info.
 */
import React, { useEffect } from 'react';
import { Box, Typography, Stack, Button, Card, CardContent, Chip } from '@mui/joy';
import { useApp } from '../context/AppContext';
import PlatformCard from '../components/PlatformCard';
import { requestData } from '../api';
import { PLATFORM_LIST } from '../../shared/constants';

export default function Dashboard() {
  const { user, subscription, platformStates, actions } = useApp();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      actions.setLoading(true);
      try {
        const [userData, subData, states] = await Promise.all([
          requestData('user').catch(() => null),
          requestData('subscription').catch(() => null),
          requestData('platformStates').catch(() => ({})),
        ]);
        if (!cancelled) {
          actions.setUser(userData);
          actions.setSubscription(subData);
          actions.setPlatformStates(states || {});
        }
      } catch (e) {
        if (!cancelled) actions.setError(e.message);
      } finally {
        if (!cancelled) actions.setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [actions]);

  return (
    <Stack spacing={3}>
      <Box>
        <Typography level="h3" sx={{ mb: 1 }}>
          Dashboard
        </Typography>
        <Typography level="body-md" color="neutral">
          Manage your bots and view status across platforms.
        </Typography>
      </Box>

      {subscription && (
        <Card variant="outlined">
          <CardContent>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
              <Typography level="title-md">Subscription</Typography>
              <Chip color="success" size="sm">
                {subscription.status || 'Active'}
              </Chip>
            </Stack>
            <Typography level="body-sm" color="neutral">
              {subscription.productId || subscription.plan || 'Active plan'}
            </Typography>
          </CardContent>
        </Card>
      )}

      <Box>
        <Typography level="title-md" sx={{ mb: 2 }}>
          Platforms
        </Typography>
        <Stack direction="row" flexWrap="wrap" useFlexGap spacing={2}>
          {PLATFORM_LIST.map((platform) => (
            <PlatformCard
              key={platform}
              platform={platform}
              status={platformStates[platform]?.status || 'stopped'}
              enabled={platformStates[platform]?.enabled ?? false}
              onToggle={() => {}}
              onSettings={(p) => {}}
            />
          ))}
        </Stack>
      </Box>

      <Stack direction="row" spacing={2}>
        <Button variant="solid" size="sm">
          Start All
        </Button>
        <Button variant="outlined" size="sm">
          Stop All
        </Button>
      </Stack>
    </Stack>
  );
}
