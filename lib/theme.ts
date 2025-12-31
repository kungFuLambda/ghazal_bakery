// Theme configuration for Zallè Patisserie
// Change the primary and secondary colors here to update the entire site theme

export const theme = {
  colors: {
    // Primary brand color - change this to update the main theme color
    primary: "#D6C6E9",

    // Secondary brand color - same as primary (no gradients)
    secondary: "#D6C6E9",

    // Derived colors for consistency
    get primaryLight() {
      return this.primary;
    },

    get primaryDark() {
      return this.primary;
    },
  },

  gradients: {
    // Primary gradient - now solid color (no gradients)
    get primary() {
      return {
        from: theme.colors.primary,
        to: theme.colors.primary,
        deg: 45,
      };
    },

    // CSS background string for inline styles (solid color)
    get primaryCSS() {
      return theme.colors.primary;
    },
  },

  // Font families
  fonts: {
    heading: "var(--font-playfair)",
    body: "var(--font-inter)",
  },
} as const;

// Export individual values for convenience
export const { colors, gradients, fonts } = theme;

// Helper function to get theme colors
export const getThemeColor = (colorName: keyof typeof colors) => {
  return colors[colorName];
};

// Helper function to get gradient
export const getGradient = () => {
  return gradients.primary;
};

// Helper function to get CSS gradient string
export const getGradientCSS = () => {
  return gradients.primaryCSS;
};
