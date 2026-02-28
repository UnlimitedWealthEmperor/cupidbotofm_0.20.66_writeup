/**
 * Conversation list component - scrollable list with unread indicators and preview.
 */
import React from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Typography,
  Badge,
  Box,
  Stack,
} from '@mui/joy';
import { formatTimestamp, truncateText } from '../utils';

export default function ConversationList({
  conversations = [],
  selectedId,
  onSelect,
  loading,
}) {
  if (loading) {
    return (
      <Box sx={{ py: 2, textAlign: 'center' }}>
        <Typography level="body-sm" color="neutral">
          Loading...
        </Typography>
      </Box>
    );
  }

  if (!conversations.length) {
    return (
      <Box sx={{ py: 2, textAlign: 'center' }}>
        <Typography level="body-sm" color="neutral">
          No conversations
        </Typography>
      </Box>
    );
  }

  return (
    <List
      sx={{
        '--ListItem-radius': '8px',
        gap: 0.5,
      }}
    >
      {conversations.map((conv) => (
        <ListItem key={conv.id}>
          <ListItemButton
            selected={selectedId === conv.id}
            onClick={() => onSelect?.(conv.id)}
            sx={{ borderRadius: 'var(--ListItem-radius)' }}
          >
            <ListItemContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                <Typography level="title-sm">{conv.name || conv.id || 'Unknown'}</Typography>
                {conv.unreadCount > 0 && (
                  <Badge badgeContent={conv.unreadCount} size="sm" color="danger" />
                )}
              </Stack>
              <Typography level="body-sm" color="neutral" noWrap>
                {truncateText(conv.lastMessage?.text || conv.preview || '', 60)}
              </Typography>
              <Typography level="body-xs" color="neutral">
                {formatTimestamp(conv.lastMessage?.timestamp || conv.updatedAt)}
              </Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
