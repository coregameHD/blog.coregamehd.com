export type PaddingSize = 'small' | 'base' | 'large';
export type ThemeColor = 'base' | 'light' | 'dark';

interface PaddingOptions {
    padding?: PaddingSize;
    paddingTop?: PaddingSize;
    paddingBottom?: PaddingSize;
}

export const getPaddingClass = ({ padding, paddingTop, paddingBottom }: PaddingOptions): string => {
    if (padding) return `py-${padding}`;
    
    const classes = [];
    if (paddingTop) classes.push(`pt-${paddingTop}`);
    if (paddingBottom) classes.push(`pb-${paddingBottom}`);
    return classes.join(' ');
};

export const getBackgroundColor = (background: ThemeColor = 'base'): string => {
    const bgColors = {
        base: 'bg-background-base',
        light: 'bg-background-light',
        dark: 'bg-background-dark'
    };
    return bgColors[background];
};

export const getTextColor = (background: ThemeColor = 'base'): string => {
    const textColors = {
        base: 'text-text-base',
        light: 'text-text-light',
        dark: 'text-text-dark'
    };
    return textColors[background];
};

export const getHeadlineColor = (background: ThemeColor = 'base'): string => {
    const headlineColors = {
        base: 'text-headline-base',
        light: 'text-headline-light',
        dark: 'text-headline-dark'
    };
    return headlineColors[background];
};

export const getEyebrowColor = (background: ThemeColor = 'base'): string => {
    const eyebrowColors = {
        base: 'text-eyebrow-base',
        light: 'text-eyebrow-light',
        dark: 'text-eyebrow-dark'
    };
    return eyebrowColors[background];
};