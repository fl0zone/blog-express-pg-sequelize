require('dotenv').config();

module.exports = {
  "local": {
    "use_env_variable": "LOCAL_DATABASE_URL"
  },
  "development": {
    "use_env_variable": "DATABASE_URL"
  },
  "production": {
    "use_env_variable": "DATABASE_URL"
  }
}