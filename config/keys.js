if(process.env.NODE_ENV === 'production'){
  // We are in production - return the dev keys
  module.exports = require('./prod');
}else{
  // We are in develpoment - return the dev keys
  module.exports = require('./dev');
}
