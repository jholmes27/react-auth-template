const REACT_APP_CLIENT_ID=process.env.REACT_APP_CLIENT_ID;
const REACT_APP_OKTA_DOMAIN=process.env.REACT_APP_OKTA_DOMAIN;
const REACT_APP_HOST=process.env.REACT_APP_HOST;
// const REACT_APP_PORT=process.env.REACT_APP_PORT;

export const oktaConfig = {
    clientId: `${REACT_APP_CLIENT_ID}`,
    issuer: `${REACT_APP_OKTA_DOMAIN}`,
    redirectUri: `${REACT_APP_HOST}/implicit/callback`,
    postLogoutRedirectUri: `${REACT_APP_HOST}`,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}