import App from "./App";
import keycloak from "./keycloak";
import ReactDOM from 'react-dom/client';



import "moment-timezone";
import "moment/locale/fr";
import "moment/locale/ar-dz";

import '@fontsource/tajawal';
import '@fontsource/poppins';

import "./index.css";
import Loader from "components/loader";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import {  ConfigProvider } from "./contexts/configContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement

);
const keycloakInitOptions = { onLoad: "login-required" };


root.render(
  <ReactKeycloakProvider
    initOptions={keycloakInitOptions}
    authClient={keycloak}
    LoadingComponent={<Loader />}
  >
    <ConfigProvider>
       <App />
    </ConfigProvider>
  </ReactKeycloakProvider>
);
