import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "d598ddfecb1f488387fe34b067d58a34",
  },
});
