/**
 * MUI Joy UI theme configuration for actualPopup.
 */
import { extendTheme } from '@mui/joy/styles';

export const theme = extendTheme({
  colorSchemes: {
    dark: {
      default: true,
    },
    light: {},
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'solid' && {
            fontWeight: 600,
          }),
        }),
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    JoySheet: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});
