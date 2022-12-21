import { useState, useEffect } from "react";
import RTLLayout from "./components/layout/utils/RTLLayout";
import Locales from "./locales";
import { Box, CircularProgress, Snackbar, ThemeProvider, Typography } from "@mui/material";
import bg from "./assets/bg.jpg";
import Home from "./pages/home";
import useConfig from "./hooks/useConfig";
import { useKeycloak } from "@react-keycloak/web";

import api from "utils/api";
import Spectator from "components/spectator";
import {theme} from "./theme";

export function App() {
  const { themeDirection, mode } = useConfig();
  const [spectatorInfo, setSpectatorInfo] = useState(null);

  const { keycloak } = useKeycloak();

  const fetchRecu = async (ref: number, callback: Function) => {
    api.get(`billet/referenceRecu/${ref}`).then((r) => 
    setSpectatorInfo(r.data)).catch((e) => (
      callback(e.message)
    ))
  }


  useEffect(() => {
    // keycloak.onTokenExpired = () => {
    //   keycloak.updateToken(3600).then(() => {
    //     api.interceptors.request.use(function (config) {
    //       //@ts-ignore
    //       config.headers.Authorization = keycloak.token;
    //       return config;
    //     });
    //   });
    // };
    // keycloak.onAuthRefreshError = () => {
    //   keycloak.login();
    // };
    if (keycloak.authenticated) {
      api.interceptors.request.use(function (config) {
        //@ts-ignore
        config.headers.Authorization = `Bearer ${keycloak.token}`;
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
    <ThemeProvider theme={theme(themeDirection, mode)}>
      <RTLLayout>
        <Locales>
          <Home spectatorInfo={spectatorInfo} fetchRecu={fetchRecu}></Home>
 
          <Spectator  spectatorInfo={spectatorInfo}></Spectator>
          <img className="app__bg" src={bg} alt="background image" />
          <div className="app__overlay"></div>
          <Snackbar />
        </Locales>
      </RTLLayout>
    </ThemeProvider>
  );
}

export default App;
