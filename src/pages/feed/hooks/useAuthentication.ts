import {
  selectIsAuthenticated,
  authenticationSuccess,
  authenticationFailure,
} from "app/authenticationSlice";
import { useState, useEffect } from "react";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useSelector, useDispatch } from "react-redux";

export const useAuthentication = () => {
  const [accessToken, setAccessToken] = useState<null | string>(null);

  const isAuthenticated = useSelector(selectIsAuthenticated);

  const dispatch = useDispatch();

  const handleGoogleAuthResponse = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log(response);
    if (response.code === undefined) {
      dispatch(authenticationSuccess());
      //@ts-ignore
      setAccessToken(response?.accessToken);
      //@ts-ignore
      localStorage.setItem("access_token", response?.accessToken || "");
    } else {
      dispatch(authenticationFailure());
      alert("Error authenticating with Google");
    }
  };

  const handleGoogleLogout = () => {
    localStorage.removeItem("access_token");
    dispatch(authenticationFailure());
    setAccessToken(null);
  };

  // hydrate access token from local storage
  useEffect(() => {
    if (!accessToken) {
      const token = localStorage.getItem("access_token");

      if (token) {
        setAccessToken(token);
        dispatch(authenticationSuccess());
      }
    }
  }, [accessToken, dispatch]);

  return {
    isAuthenticated,
    accessToken,
    handleGoogleAuthResponse,
    handleGoogleLogout,
  };
};
