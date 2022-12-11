import { createContext, ReactNode } from 'react';

// project import
import config from 'config';
import useLocalStorage from 'hooks/useLocalStorage';

// types
import { CustomizationProps, I18n, ThemeDirection, ThemeMode } from 'types/config';
import { Language } from 'types/languages';

// initial state
const initialState: CustomizationProps = {
    ...config,
    onChangeContainer: () => {},
    onChangeLocalization: (lang: I18n) => {},
    onChangeMode: (mode: ThemeMode) => {},
    onChangeDirection: (direction: ThemeDirection) => {},
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState);

type ConfigProviderProps = {
    children: ReactNode;
};

function ConfigProvider({ children }: ConfigProviderProps) {
    const [config, setConfig] = useLocalStorage('admin-front-config', initialState);

    const onChangeContainer = () => {
        setConfig({
            ...config,
            container: !config.container
        });
    };

    const onChangeLocalization = (lang: I18n) => {
        let confs = {
            ...config,
            themeDirection: 'ltr',
            i18n: lang
        };
        if (lang === Language.ARABIC) {
            confs['themeDirection'] = 'rtl';
        }
        setConfig(confs);
    };

    const onChangeMode = (mode: ThemeMode) => {
        setConfig({
            ...config,
            mode
        });
    };


    const onChangeDirection = (direction: ThemeDirection) => {
        setConfig({
            ...config,
            themeDirection: direction
        });
    };


    return (
        <ConfigContext.Provider
            value={{
                ...config,
                onChangeContainer,
                onChangeLocalization,
                onChangeMode,
                onChangeDirection,
            }}
        >
            {children}
        </ConfigContext.Provider>
    );
}

export { ConfigProvider, ConfigContext };
