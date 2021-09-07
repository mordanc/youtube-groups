import { Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { Subscription, UserSubscriptionsResponse } from "types";
import HoverButton from "../../components/atoms/HoverButton";
import GroupList from "../../components/organisms/GroupList";

const Feed = () => {
  const [accessToken, setAccessToken] = useState<null | string>(null);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  const clientID = process.env.REACT_APP_CLIENT_ID;

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log(response);
    if (response.code === undefined) {
      //@ts-ignore
      setAccessToken(response?.accessToken);
    } else {
      alert("Error authenticating with Google");
    }
  };

  useEffect(() => {
    async function hi() {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const response = await axios.get<UserSubscriptionsResponse>(
        `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=UCDlFeY4sylL04DM6izwpF-A&pageToken=CAUQAA&key=${API_KEY}`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      console.log("-----------------------------------------");
      console.log({ response });

      setSubscriptions(response.data.items);
    }

    if (accessToken) {
      hi();
    }
  }, [accessToken]);

  return (
    <div className="flex flex-col bg-gray-700">
      <div className="container flex flex-col mx-auto bg-gray-400">
        <HoverButton />
        <GroupList />
        <div className="mt-20">
          {clientID && (
            <GoogleLogin
              clientId={clientID}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              scope="https://www.googleapis.com/auth/youtube.readonly"
            />
          )}

          {accessToken}
          <Stack>
            {subscriptions.map((sub) => (
              <span>{sub?.snippet?.title}</span>
            ))}
          </Stack>
          {/* <ThumbnailList /> */}
        </div>
      </div>
    </div>
  );
};

export default Feed;
