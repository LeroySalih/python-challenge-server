import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { InteractionStatus, InteractionType } from "@azure/msal-browser";
import { loginRequest } from "../components/authConfig";

export default function Profile() {
    const authRequest = {
        ...loginRequest
    };

    return (
        <div>Profile</div>
      )


}

const ErrorComponent = ({error}) => {
    return <div variant="h6">An Error Occurred: {error.errorCode}</div>;
}

const Loading = () => {
    return <div variant="h6">Authentication in progress...</div>
}