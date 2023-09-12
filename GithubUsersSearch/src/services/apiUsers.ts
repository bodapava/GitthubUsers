import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
