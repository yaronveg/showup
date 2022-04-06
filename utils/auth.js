export const failedAuth = (res) => {
  res.sendFile(__dirname + "/client/build/Pages/Login.html");
};
