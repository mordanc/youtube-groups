import axios from "axios";

import { UserSubscriptionsResponse } from "types";

export const UserService = {
  getSubscriptionsByChannelID: async (
    channelID: string,
    accessToken: string
  ) => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    return axios.get<UserSubscriptionsResponse>(
      `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=${channelID}&pageToken=CAUQAA&key=${API_KEY}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  },
};
