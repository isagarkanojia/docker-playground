const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
  REDIS_URL,
  REDIS_PORT,
  SESSION_SECRET,
  USER_SESSION_TIMEOUT,
} = require("./config/config");

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const redis = require("redis");

let RedisStore = require("connect-redis")(session);

let redisClient = redis.createClient({
  legacyMode: true,
  socket: {
    port: REDIS_PORT,
    host: REDIS_URL,
  },
});

redisClient.connect().catch(console.error);

const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

//TODO some issue with this config, check later
const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const connectWithRetry = () => {
  mongoose
    .connect(mongoURL)
    .then(() => console.log("successfully connected to DB"))
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    cookie: {
      secure: false,
      saveUninitialized: false,
      resave: false,
      httpOnly: true,
      maxAge: USER_SESSION_TIMEOUT,
    },
  })
);
// middelware needed to rest apis
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2>Hey there!!!</h2>");
});

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
