export type SushiColorPalette = {
    primary: string;    // Main brand color (Navy vs Hacker Red)
    secondary: string;  // Accent/Highlight (Gold vs Electric Blue)
    background: string; // Component background (White vs Terminal Black)
    border: string;     // Structural lines (Navy vs Green)
    text: {
        heading: string;
        body: string;
        code: string;
    }
};

export type SushiTypography = {
    heading: string; // Serif vs Mono
    body: string;    // Sans vs Mono
    mono: string;    // Mono vs Mono
};

export type SushiTheme = {
    name: 'storefront' | 'factory';
    colors: SushiColorPalette;
    fonts: SushiTypography;
    // Visual characteristics
    borderRadius: string; // '0px' vs '4px' etc.
    borderWidth: string;  // '4px' vs '1px'
    shadow: string;       // Brutalist vs Glow
};
