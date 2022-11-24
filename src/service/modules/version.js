import axios from "../index";

export function getVersion() {
  return axios({
    url: "/versionlist",
  });
}

export function uploadVersion(file) {
  return axios({
    method: "post",
    url: "/versionInfo",
    haders: {
      "Content-Type": "application/json",
    },
    data: {
      file,
    },
  });
}
