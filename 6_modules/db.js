console.log('db.js');
const users = require('./users');


function getUsers(){
    return users;
}
module.exports.getUsers = getUsers;
