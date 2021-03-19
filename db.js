async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection

    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:admin@localhost:3306/mysql")
    console.log("Conectado.")
    global.connection = connection
    return connection;

}
connect();

async function selectCustomers() {
    const conn = await connect()
    return await conn.query('SELECT * FROM events;')
}



module.exports = { selectCustomers }