/**
 * Layout wrapper with navigation and content area.
 */
import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import {
  Box,
  Sheet,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Link,
} from '@mui/joy';
import { BRAND_NAME, DISCORD_URL, TELEGRAM_URL, WEBSITE_URL } from '../../shared/branding';

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/settings', label: 'Settings' },
  { path: '/conversations', label: 'Conversations' },
];

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Sheet
        variant="soft"
        sx={{
          px: 2,
          py: 1.5,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
          <Typography level="h4" component="h1" fontWeight="lg">
            {BRAND_NAME}
          </Typography>
          <List
            orientation="horizontal"
            sx={{
              '--ListItem-minHeight': '36px',
              gap: 0.5,
            }}
          >
            {navItems.map(({ path, label }) => (
              <ListItem key={path}>
                <ListItemButton
                  selected={location.pathname === path || (path !== '/' && location.pathname.startsWith(path))}
                  onClick={() => navigate(path)}
                >
                  <ListItemContent>{label}</ListItemContent>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Sheet>

      <Box sx={{ flex: 1, p: 2, overflow: 'auto' }}>
        <Outlet />
      </Box>

      <Sheet
        variant="plain"
        sx={{
          px: 2,
          py: 1,
          borderTop: '1px solid',
          borderColor: 'divider',
          fontSize: 'sm',
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
          {WEBSITE_URL && (
            <Link href={WEBSITE_URL} target="_blank" rel="noopener noreferrer">
              Website
            </Link>
          )}
          {DISCORD_URL && (
            <Link href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              Discord
            </Link>
          )}
          {TELEGRAM_URL && (
            <Link href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              Telegram
            </Link>
          )}
        </Stack>
      </Sheet>
    </Box>
  );
}
