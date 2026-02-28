/**
 * Message bubble component - incoming/outgoing styling, timestamp, media indicators.
 */
import React from 'react';
import { Box, Typography, Sheet } from '@mui/joy';
import { formatTimestamp } from '../utils';

export default function MessageBubble({
  text,
  isOutgoing = false,
  timestamp,
  hasMedia = false,
  isReply = false,
  replyTo,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isOutgoing ? 'flex-end' : 'flex-start',
        mb: 1,
      }}
    >
      <Sheet
        variant={isOutgoing ? 'solid' : 'soft'}
        color={isOutgoing ? 'primary' : 'neutral'}
        sx={{
          maxWidth: '80%',
          px: 2,
          py: 1.5,
          borderRadius: 2,
          borderBottomRightRadius: isOutgoing ? 4 : 16,
          borderBottomLeftRadius: isOutgoing ? 16 : 4,
        }}
      >
        {isReply && replyTo && (
          <Typography level="body-xs" color="neutral" sx={{ mb: 0.5, opacity: 0.9 }}>
            Replying to: {replyTo}
          </Typography>
        )}
        {hasMedia && (
          <Typography level="body-xs" color="neutral" sx={{ mb: 0.5 }}>
            📎 Attachment
          </Typography>
        )}
        <Typography level="body-sm" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {text || '(empty)'}
        </Typography>
        {timestamp != null && (
          <Typography level="body-xs" color="neutral" sx={{ mt: 0.5, textAlign: 'right' }}>
            {formatTimestamp(timestamp)}
          </Typography>
        )}
      </Sheet>
    </Box>
  );
}
