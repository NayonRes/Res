import axios from "axios";

const RefreshToken = (admin_user_auth, logout, login) => {
  const refresh = async () => {
    let token = admin_user_auth.access_token;
    console.log("token function", admin_user_auth);

    let user = admin_user_auth.user;
    let decodedTokenTime = user.exp * 1000; // for comparing numaric type

    let dateNow = new Date();
    let NumaricDate = dateNow.getTime();
    console.log("decodedTokenTime", decodedTokenTime);
    console.log("NumaricDate", NumaricDate);
    console.log("dateNow.getTime()", dateNow.getTime());
    try {
      if (user && decodedTokenTime > NumaricDate) {
        console.log("my access token:", token);
        return token;
      } else {
        let data = {
          client_secret: process.env.REACT_APP_CLIENT_SECRECT,
          refresh_token: admin_user_auth.refresh_token,
        };
        let res = await axios({
          url: "url",
          method: "POST",
          data: data,
          headers: {
            "Content-Type": "application/json",
          },
        });
        login(res.data.data);
        console.log("refresh token", res.data.data.access_token);
        return res.data.data.access_token;
      }
    } catch (error) {
      logout();
    }
  };
  return refresh();
};

export default RefreshToken;
