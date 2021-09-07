import { useEffect, useState } from "react";
import { Stack } from "@chakra-ui/react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import HoverButton from "../../components/atoms/HoverButton";
import GroupList from "../../components/organisms/GroupList";
import { useAuthentication } from "./hooks/useAuthentication";

import { UserService } from "services/User";

import { Subscription } from "types";

const Feed = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  const {
    isAuthenticated,
    accessToken,
    handleGoogleAuthResponse,
    handleGoogleLogout,
  } = useAuthentication();

  const clientID = process.env.REACT_APP_CLIENT_ID;

  useEffect(() => {
    async function getSubscriptions() {
      if (!accessToken) {
        return;
      }

      const channelID = "UCDlFeY4sylL04DM6izwpF-A";

      const response = await UserService.getSubscriptionsByChannelID(
        channelID,
        accessToken
      );

      setSubscriptions(response.data.items);
    }

    if (accessToken && subscriptions.length === 0) {
      getSubscriptions();
    } else if (!accessToken && subscriptions.length > 0) {
      setSubscriptions([]);
    }
  }, [accessToken, subscriptions]);

  return (
    <div className="flex flex-col bg-gray-700">
      <div className="container flex flex-col mx-auto bg-gray-400">
        <HoverButton />
        <GroupList />
        <div className="mt-20">
          {clientID && !isAuthenticated && (
            <GoogleLogin
              clientId={clientID}
              buttonText="Login"
              onSuccess={handleGoogleAuthResponse}
              onFailure={handleGoogleAuthResponse}
              cookiePolicy={"single_host_origin"}
              scope="https://www.googleapis.com/auth/youtube.readonly"
              isSignedIn={accessToken !== null}
            />
          )}

          {clientID && isAuthenticated && (
            <GoogleLogout
              clientId={clientID}
              buttonText="Logout"
              onLogoutSuccess={handleGoogleLogout}
            />
          )}

          {accessToken}
          <Stack>
            {subscriptions.map((sub, i) => (
              <span key={i}>{sub?.snippet?.title}</span>
            ))}
          </Stack>
          {/* <ThumbnailList /> */}
        </div>
      </div>
    </div>
  );
};

export default Feed;
