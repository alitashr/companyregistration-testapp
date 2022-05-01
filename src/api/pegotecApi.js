import HttpClient from "./httpClient";
const domain = "https://api.framework.pegotec.dev/api/auth/login";

const postHttpClient = (data, config, sendErrorReport = true) => {
  return new Promise((resolve, reject) => {
    HttpClient.post(`${domain}`, data, config)
      .then((response) => resolve(response.data))
      .catch((error) => {
        reject(error);
      });
  });
};

export const login = ({ email, password }) => {
  let data = new FormData();
  data.append("action", "login");
  data.append("email", email);
  data.append("password", password);

  return new Promise((resolve, reject) => {
    postHttpClient(data)
      .then((res) => {
        console.log("postHttpClient -> res", res);
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};
