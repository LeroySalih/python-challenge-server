


export const msalConfig = {
    auth: {
        clientId: "9acf3705-515a-4ee6-81af-85b5e9663734",
        redirectUri: process.env.NEXT_PUBLIC_SERVER_ID,
        postLogoutRedirectUri: process.env.NEXT_PUBLIC_SERVER_ID
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};
