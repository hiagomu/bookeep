import { TwitterApi as Twitter } from 'twitter-api-v2';

const client = new Twitter({
    appKey: process.env.TWITTER_CONSUMER_KEY || "",
    appSecret: process.env.TWITTER_CONSUMER_KEY_SECRET || "",
    accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

export default client