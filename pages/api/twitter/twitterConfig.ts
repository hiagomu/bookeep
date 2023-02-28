import Twitter from "twitter-lite";

const client = new Twitter({
    consumer_key: String(process.env.TWITTER_CONSUMER_KEY),
    consumer_secret: String(process.env.TWITTER_CONSUMER_KEY_SECRET),
    access_token_key: String(process.env.TWITTER_ACCESS_TOKEN_KEY),
    access_token_secret: String(process.env.TWITTER_ACCESS_TOKEN_SECRET)
  });

export default client