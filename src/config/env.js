import dotenv from 'dotenv';
dotenv.config();

const env = {
    app_name: process.env.APP_NAME,
    port: process.env.PORT,

    db_uri: process.env.DB_URI,

    jwt_secret: process.env.JWT_SECRET
};

export { env };
