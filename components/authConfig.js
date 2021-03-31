export const msalConfig = {
    auth: {
        clientId: "9acf3705-515a-4ee6-81af-85b5e9663734",
        redirectUri: "https://3000-crimson-earwig-bzsjx0xu.ws-eu03.gitpod.io",
        postLogoutRedirectUri: "https://3000-crimson-earwig-bzsjx0xu.ws-eu03.gitpod.io"
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};
