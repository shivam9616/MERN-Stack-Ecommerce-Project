# MERN E-COMMERCE APP

Hi! My name is **Shivam Kushwaha**

# Prerequisite

1.  Must have basic knowledge of **Node**, **React**, **Express**, **MongoDB**
2.  Node 
3.  React 
4.  Express 
5.  MongoDB 
6.  RestApi _(optional)_

# Install Dependencies

**For Backend** - `npm i`

**For Frontend** - `cd frontend` ` npm i`

## Env Variables

Make Sure to Create a config.env file in backend/config directory and add appropriate variables in order to use the app.

**Essential Variables**
PORT=
DB_URI =
STRIPE_API_KEY=
STRIPE_SECRET_KEY=
JWT_SECRET=
JWT_EXPIRE=
COOKIE_EXPIRE=
SMTP_SERVICE =
SMTP_MAIL=
SMTP_PASSWORD=
SMTP_HOST=
SMTP_PORT=
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
_fill each filed with your info respectively_

FOR HEROKU 

heroku command to install dependencies and devdependencies both :

heroku config:set NPM_CONFIG_PRODUCTION=false YARN_PRODUCTION=false YARN2_SKIP_PRUNING=true
RESPECTIVELY

env variable for heroku

NODE_ENV = PRODUCTION
