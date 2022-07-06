const {Pool}  = require('pg')
const pg_connection = new Pool({
    user: 'oxdvookezbyonc',
    host: 'ec2-52-3-200-138.compute-1.amazonaws.com',
    database: 'd4rl08mdmfh2ve',
    password: 'fce4291485e94b1a0e4a6a68ac0e48802378ce6e77df8bdb7a6c7ab2c0732f07',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
})
module.exports = pg_connection