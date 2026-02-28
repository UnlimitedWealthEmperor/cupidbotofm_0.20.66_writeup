/**
 * Conversations viewer - list, message preview, reply interface, filters.
 */
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Select,
  Option,
  Textarea,
  Button,
  Input,
} from '@mui/joy';
import { useApp } from '../context/AppContext';
import ConversationList from '../components/ConversationList';
import MessageBubble from '../components/MessageBubble';
import { requestData } from '../api';
import { PLATFORM_LIST } from '../../shared/constants';
import { getPlatformDisplayName } from '../utils';

export default function Conversations() {
  const { selectedPlatform, selectedConversationId, conversations, platformStates, actions } = useApp();
  const [filter, setFilter] = useState('');
  const [replyText, setReplyText] = useState('');
  const [conversationList, setConversationList] = useState([]);
  const [selectedConv, setSelectedConv] = useState(null);

  const platform = selectedPlatform || PLATFORM_LIST[0];

  useEffect(() => {
    actions.setSelectedPlatform(platform);
  }, [platform, actions]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await requestData('conversations');
        if (!cancelled && data?.[platform]) {
          const list = Array.isArray(data[platform]) ? data[platform] : Object.values(data[platform] || {});
          setConversationList(list);
        }
      } catch (e) {
        if (!cancelled) actions.setError(e.message);
      }
    })();
    return () => { cancelled = true; };
  }, [platform, actions]);

  useEffect(() => {
    if (!selectedConversationId || !conversationList.length) {
      setSelectedConv(null);
      return;
    }
    const conv = conversationList.find((c) => c.id === selectedConversationId);
    setSelectedConv(conv || null);
  }, [selectedConversationId, conversationList]);

  const filteredConversations = filter
    ? conversationList.filter((c) =>
        (c.name || '').toLowerCase().includes(filter.toLowerCase()) ||
        (c.preview || '').toLowerCase().includes(filter.toLowerCase())
      )
    : conversationList;

  return (
    <Stack spacing={2}>
      <Box>
        <Typography level="h3" sx={{ mb: 1 }}>
          Conversations
        </Typography>
        <Typography level="body-md" color="neutral">
          View and reply to messages across platforms.
        </Typography>
      </Box>

      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Select
          value={platform}
          onChange={(_, v) => actions.setSelectedPlatform(v)}
          sx={{ minWidth: 140 }}
        >
          {PLATFORM_LIST.map((p) => (
            <Option key={p} value={p}>
              {getPlatformDisplayName(p)}
            </Option>
          ))}
        </Select>
        <Input
          placeholder="Filter conversations..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          sx={{ flex: 1, minWidth: 160 }}
        />
      </Stack>

      <Stack direction="row" spacing={2} sx={{ flex: 1, minHeight: 300, alignItems: 'stretch' }}>
        <Box sx={{ width: 280, flexShrink: 0, overflow: 'auto' }}>
          <ConversationList
            conversations={filteredConversations}
            selectedId={selectedConversationId}
            onSelect={(id) => actions.setSelectedConversation(id)}
          />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          {selectedConv ? (
            <>
              <Box sx={{ flex: 1, overflow: 'auto', p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 8 }}>
                {(selectedConv.messages || []).map((msg, i) => (
                  <MessageBubble
                    key={i}
                    text={msg.text}
                    isOutgoing={msg.isOutgoing}
                    timestamp={msg.timestamp}
                    hasMedia={msg.hasMedia}
                  />
                ))}
              </Box>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                <Textarea
                  placeholder="Type a reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  minRows={2}
                  maxRows={4}
                  sx={{ flex: 1 }}
                />
                <Button onClick={() => {}}>Send</Button>
              </Stack>
            </>
          ) : (
            <Box sx={{ p: 4, textAlign: 'center' }}>
              <Typography level="body-md" color="neutral">
                Select a conversation
              </Typography>
            </Box>
          )}
        </Box>
      </Stack>
    </Stack>
  );
}
