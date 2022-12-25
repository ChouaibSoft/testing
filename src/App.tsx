import { useState, useEffect } from "react";
import RTLLayout from "./components/layout/utils/RTLLayout";
import Locales from "./locales";
import {  Snackbar, ThemeProvider, Typography } from "@mui/material";
import bg from "./assets/bg.jpg";
import Home from "./pages/home";
import useConfig from "./hooks/useConfig";
import { useKeycloak } from "@react-keycloak/web";

import api from "utils/api";
import Spectator from "components/spectator";
import { theme } from "./theme";
import jwtDecode from "jwt-decode";

export function App() {
  const { themeDirection, mode } = useConfig();
  const [spectatorInfo, setSpectatorInfo] = useState(null);
  const [fetching, setFetching] = useState(false)
  const [prevState, setPrevState] = useState(false)
  const [allowed, setAllowed] = useState(false)

  const { keycloak } = useKeycloak();

  const fetchRecu = async (ref: number, callback: Function) => {
    if(!fetching){
      setFetching(true)
      api.get(`billet/referenceRecu/${ref}`).then((r) => {
        setFetching(false)
        setSpectatorInfo({
          ...r.data,
          ref
        })
      }).catch((e) => {
        setFetching(false)
        callback(e?.response ? e.response.data.errorMessage : 'UNKNOWN')
      })
    }
  }

  useEffect(() => {
    if(localStorage.getItem('spectator')){
      //@ts-ignore
      setSpectatorInfo(JSON.parse(localStorage.getItem('spectator')))
      setPrevState(true)
    }
    return () => {
      setPrevState(false)
    }
  }, [])

  useEffect(() => {
    if(!allowed){
      //@ts-ignore
      let decoedToken = jwtDecode(keycloak.token)
        //@ts-ignore
        if(!decoedToken.groups.includes('agentRetrait_role')){
          keycloak.logout()
        }else{
          setAllowed(true)
        }
    }
  
    keycloak.onTokenExpired = () => {
      keycloak.updateToken(3600).then(() => {
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
        config.headers.Authorization = `Bearer ${keycloak.token}`;
        return config;
      });
    }

    // Clear
    return () => {
      if (keycloak) keycloak.onTokenExpired = () => { };
      if (keycloak) keycloak.onAuthRefreshError = () => { };
    };

    // eslint-disable-next-line
  }, [keycloak]);


  return allowed ? (
    <ThemeProvider theme={theme(themeDirection, mode)}>
      <RTLLayout>
        <Locales>
          <Home spectatorInfo={spectatorInfo} fetchRecu={fetchRecu}></Home>

          <Spectator spectatorInfo={spectatorInfo} prevState={prevState}  setSpectatorInfo={setSpectatorInfo}></Spectator>
          <img className="app__bg" src={bg} alt="background image" />
          <div className="app__overlay"></div>
          <Snackbar />
        </Locales>
      </RTLLayout>
    </ThemeProvider>
  ) : null;
}

export default  App;
