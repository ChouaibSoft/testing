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
  const [spectatorInfo, setSpectatorInfo] = useState("null");

  // const { keycloak } = useKeycloak();

  const fetchRecu = async (ref: number, callback: Function) => {
    api.get(`billet/referenceRecu/${ref}`).then((r) => 
    setSpectatorInfo(r.data)).catch((e) => (
      callback(e.message)
    ))
  }


  // useEffect(() => {
  //   // keycloak.onTokenExpired = () => {
  //   //   keycloak.updateToken(3600).then(() => {
  //   //     api.interceptors.request.use(function (config) {
  //   //       //@ts-ignore
  //   //       config.headers.Authorization = keycloak.token;
  //   //       return config;
  //   //     });
  //   //   });
  //   // };
  //   // keycloak.onAuthRefreshError = () => {
  //   //   keycloak.login();
  //   // };
  //   if (keycloak.authenticated) {
  //     api.interceptors.request.use(function (config) {
  //       //@ts-ignore
  //       config.headers.Authorization = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJyU09HeVZUMnY1Z0RhOHlwdHk2YTlsZ1M5T1V1aU5Vc0Jwb3pkRGNETVpNIn0.eyJleHAiOjE2NzE2MTQ0NDgsImlhdCI6MTY3MTYxNDE0OCwiYXV0aF90aW1lIjoxNjcxNjEzODYzLCJqdGkiOiI2ZGUxMTA0Mi0yM2QxLTQzOWUtODljOC1jMTk0YmYxN2RmMjMiLCJpc3MiOiJodHRwczovL3Rlc3QuZWFkbi5kei9hdXRoL3JlYWxtcy9UQURLSVJBVEktUkVBTE0iLCJzdWIiOiIzOTAwNGJiZS00ODE2LTQ0NzQtYjZiNi1iZmNiOWQ3ZGQwZmIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ0YWRraXJhdGktZnJvbnRlbmQiLCJub25jZSI6IjFlN2UxMjJiLTgwZGYtNGRjNC1hODQ4LTBiMDQ2MjQwMzllOCIsInNlc3Npb25fc3RhdGUiOiJkMTE2YTNkZS00OTU3LTQ2ZTQtODY2NS1lOWI2YWQ3MTY5YzIiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vdGVzdC5lYWRuLmR6IiwiKiIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJdLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIG1pY3JvcHJvZmlsZS1qd3QgZW1haWwiLCJzaWQiOiJkMTE2YTNkZS00OTU3LTQ2ZTQtODY2NS1lOWI2YWQ3MTY5YzIiLCJncm91cHMtbWVtYmVyc2hpcCI6WyIvdGFka2lyYXRpX2dyb3Vwcy9hY2Nlc19ib29raW5nIiwiL3RhZGtpcmF0aV9ncm91cHMvbWFuYWdlci9vcmFuL2FnZW50X29yYW4iLCIvdGFka2lyYXRpX2dyb3Vwcy9mcm9tUmVnaXN0ZXIiLCIvdGFka2lyYXRpX2dyb3Vwcy9tYW5hZ2VyL29yYW4vc3VwZXJfYWRtaW4iLCIvdGFka2lyYXRpX2dyb3Vwcy91c2VyU3BlY3RhdGV1ciJdLCJ1cG4iOiJ0YXJlayIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoidGFyZWsgbWFsa2kiLCJncm91cHMiOlsiYWdlbnRSZXRyYWl0X3JvbGUiLCJhY2Nlc19ib29raW5nIiwiZnJvbVJlZ2lzdGVyX3JvbGUiLCJ1c2VyU3BlY3RhdGV1cl9yb2xlIl0sInByZWZlcnJlZF91c2VybmFtZSI6InRhcmVrIiwiZ2l2ZW5fbmFtZSI6InRhcmVrIiwibG9jYWxlIjoiZnIiLCJmYW1pbHlfbmFtZSI6Im1hbGtpIiwiZW1haWwiOiJ0YXJlay5tYWxraUBlYWRuLmR6In0.be0vVU1r4UDVGer0MFA_Z2bF5K33Ag-rrdiLyWSPOjp1QozVieUUYved7S-XjTCgHENeEBt2bhxH2g6GIzcTLjg3hOURE052FvACOdXNkyojWJqKXvYRuYNm9L-YvksU8K4CG1Y-p_JOZ6UPbesujHqC09EqbUODb7Mygn4mjBgLA-QUcQmrXL67pTp0vDSQHeyckOhKgdlbGHkg6bcDwMWi-Pj2KMGE2JJOeaUNMorizhhMmrKriQo2yCjUU77EswDTQABUKycoifZnUOtF9l9TqH0OK72XakSO_QvCDOs3FAl5Egwj8de36OBIX-3JNvhM6jv5F2z1UFciK1jjFA`;
  //       return config;
  //     });
  //   }

  //   // Clear
  //   return () => {
  //     if (keycloak) keycloak.onTokenExpired = () => {};
  //     if (keycloak) keycloak.onAuthRefreshError = () => {};
  //   };

  //   // eslint-disable-next-line
  // }, [keycloak]);

  useEffect(() => {
    api.interceptors.request.use(function (config) {
      //@ts-ignore
      config.headers.Authorization = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJyU09HeVZUMnY1Z0RhOHlwdHk2YTlsZ1M5T1V1aU5Vc0Jwb3pkRGNETVpNIn0.eyJleHAiOjE2NzE2MzMyNTUsImlhdCI6MTY3MTYxNTI1NSwiYXV0aF90aW1lIjoxNjcxNTQzNDA5LCJqdGkiOiI0ODQ0NTgwMi1kMzQ3LTRmM2UtOGEyMy00ZDAyYzRmMmU2MDYiLCJpc3MiOiJodHRwczovL3Rlc3QuZWFkbi5kei9hdXRoL3JlYWxtcy9UQURLSVJBVEktUkVBTE0iLCJzdWIiOiIzOTAwNGJiZS00ODE2LTQ0NzQtYjZiNi1iZmNiOWQ3ZGQwZmIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ0YWRraXJhdGktZnJvbnRlbmQiLCJub25jZSI6IjU2NjljMThhLTYxMDMtNGY1YS04OGFiLTAyODgzNTdkMTkxNSIsInNlc3Npb25fc3RhdGUiOiJjYzJjOTBlMS0wNGMwLTRlNDktODg0MC02YjEwZDZkNTI4NmEiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vdGVzdC5lYWRuLmR6IiwiKiIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJdLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIG1pY3JvcHJvZmlsZS1qd3QgZW1haWwiLCJzaWQiOiJjYzJjOTBlMS0wNGMwLTRlNDktODg0MC02YjEwZDZkNTI4NmEiLCJncm91cHMtbWVtYmVyc2hpcCI6WyIvdGFka2lyYXRpX2dyb3Vwcy9hY2Nlc19ib29raW5nIiwiL3RhZGtpcmF0aV9ncm91cHMvbWFuYWdlci9vcmFuL2FnZW50X29yYW4iLCIvdGFka2lyYXRpX2dyb3Vwcy9mcm9tUmVnaXN0ZXIiLCIvdGFka2lyYXRpX2dyb3Vwcy9tYW5hZ2VyL29yYW4vc3VwZXJfYWRtaW4iLCIvdGFka2lyYXRpX2dyb3Vwcy91c2VyU3BlY3RhdGV1ciJdLCJ1cG4iOiJ0YXJlayIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoidGFyZWsgbWFsa2kiLCJncm91cHMiOlsiYWdlbnRSZXRyYWl0X3JvbGUiLCJhY2Nlc19ib29raW5nIiwiZnJvbVJlZ2lzdGVyX3JvbGUiLCJ1c2VyU3BlY3RhdGV1cl9yb2xlIl0sInByZWZlcnJlZF91c2VybmFtZSI6InRhcmVrIiwiZ2l2ZW5fbmFtZSI6InRhcmVrIiwibG9jYWxlIjoiZnIiLCJmYW1pbHlfbmFtZSI6Im1hbGtpIiwiZW1haWwiOiJ0YXJlay5tYWxraUBlYWRuLmR6In0.cN8mWgdE00aL_RUGoirm2ZBy4n1OhRs4eo3lLfuJBl82r3jXGZjdH9DyM313VEv7C6PMeeX7JMG_cGUGPgK-cj5ICFOcCA5LkK_f-3aj7JP8tYVrnbPTv8wqBLb-IrC-vDWreQrxabjU2KvoX58CiYeSmOFl-ci7YrVFfIM1l3WzaQMe1NI_0_f2lDLOaRQu2ijdiQflT15t3MWgk3hlroIDgUbhROvqwuondaajFkGZfLv3RDuib_LPonBnwNmTJN84GPowpk8Ha2OIVkCpxVmdTcD1CTaORsuwLaTOrQiLpOCIQRgjmPaNG5mfP4zU2MY7rMT04nPPMP8T78TjqQ`;
      return config;
    });
  }, [])

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
