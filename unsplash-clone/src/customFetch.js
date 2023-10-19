import axios from "axios";

let authId = `Client-ID BTCRRvbEobO2rikc6wWRWAamVskr0s2z3t2pMAhDAo0`;
const customFetch = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    "Accept-Version": "v1",
    Authorization: authId,
  },
});

export default customFetch;
