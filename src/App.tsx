import { useState, useEffect} from "react";
import RTLLayout from "./components/layout/utils/RTLLayout";
import Locales from "./locales";
import { Snackbar, ThemeProvider, Typography } from "@mui/material";
import bg from './assets/bg.jpg'
import Home from './pages/home'
import useConfig from "./hooks/useConfig";
import { useKeycloak } from "@react-keycloak/web";

import api from 'utils/api'
import Spectator from "components/spectator";

export function App() {
  const {i18n} = useConfig()
  const [spectatorInfo, setSpectatorInfo] = useState("null")

  const { keycloak } = useKeycloak();

  useEffect(() => {
      keycloak.onTokenExpired = () => {
          keycloak.updateToken(60).then(() => {
              api.interceptors.request.use(function (config) {
                  //@ts-ignore
                  config.headers.Authorization = keycloak.token;
                  return config;
              });
          });
      };
      keycloak.onAuthRefreshError = () => {
          keycloak.login();
      };
      if (keycloak.authenticated) {
          api.interceptors.request.use(function (config) {
              //@ts-ignore
              config.headers.Authorization = keycloak.token;
              return config;
          });
      }
      // Clear
      return () => {
          if (keycloak) keycloak.onTokenExpired = () => {};
          if (keycloak) keycloak.onAuthRefreshError = () => {};
      };
      // eslint-disable-next-line
  }, [keycloak]);

  return (
      <RTLLayout>
     <Locales>
        <Home spectatorInfo={spectatorInfo}></Home>
        <Spectator spectatorInfo={spectatorInfo}></Spectator>
        <img className='app__bg' src={bg} alt="background image" />
        <div className='app__overlay'></div>
        <Snackbar />
      </Locales>
    </RTLLayout>
  );
}

export default App;
