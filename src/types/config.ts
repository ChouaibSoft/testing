export type I18n = 'ar' | 'fr'; 
export type ThemeDirection = 'ltr' | 'rtl';
export type ThemeMode = 'light' | 'dark';

export type CustomizationProps = {
    defaultPath: string;
    i18n: I18n;
    mode: ThemeMode;
    themeDirection: ThemeDirection;
    onChangeContainer: VoidFunction;
    onChangeLocalization: (lang: I18n) => void;
    onChangeMode: (mode: ThemeMode) => void;
    onChangeDirection: (direction: ThemeDirection) => void;
};

export type DefaultConfigProps = {
    defaultPath: string;
    i18n: I18n;
    mode: ThemeMode;
    themeDirection: ThemeDirection;
};