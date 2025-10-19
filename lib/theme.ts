// Theme configuration for Zallè Patisserie
// Change the primary and secondary colors here to update the entire site theme

export const theme = {
  colors: {
    // Primary brand color - change this to update the main theme color
    primary: "#B28BC2",

    // Secondary brand color - lighter version for gradients
    secondary: "#DFC5FE",

    // Derived colors for consistency
    get primaryLight() {
      return this.secondary;
    },

    get primaryDark() {
      return this.primary;
    },
  },

  gradients: {
    // Primary gradient used throughout the site
    get primary() {
      return {
        from: theme.colors.primary,
        to: theme.colors.secondary,
        deg: 45,
      };
    },

    // CSS gradient string for inline styles
    get primaryCSS() {
      return `linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.secondary})`;
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
