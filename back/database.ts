const { Pool } = require('pg');
const test = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'food',
    password: 'foodworld',
    database: 'foodworld'
})
test.connect();
test.query(`select now()`, (err,res)=>{
    if(!err){
        console.log(res.row);}
    else {
        console.log(err.message);
    }
    test.end;
})

