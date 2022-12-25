import Keycloak from 'keycloak-js';


const keycloak = new Keycloak({
    url: process.env.REACT_APP_KEYCLOAK_API_URL,
    realm: process.env.REACT_APP_KEYCLOAK_REALM,
    clientId: process.env.REACT_APP_KEYCLOAK_CLIENT
});

if(process.env.NODE_ENV === 'production'){
  // Keycloak initConfig
  keycloak.init({
    checkLoginIframe: false,
    redirectUri: 'http://localhost/keycloak'
  });
}



export default keycloak;
