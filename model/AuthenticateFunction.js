const pg_connection = require('./pg-config');
async function AuthenticatedFuntion(user, pass){
    var authenticated = false;
    const acc_query = {
        text: 'select * from users where username = $1 and password = $2',
        values: [user, pass]
    }
    var query_data = await pg_connection.query(acc_query)
    console.log(query_data)
    if(query_data.rows.length==1){
        authenticated = true
    }
    console.log(authenticated)
    return authenticated;
}
module.exports = AuthenticatedFuntion