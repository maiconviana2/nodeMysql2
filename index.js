(async() => {

    const db = require("./db")
    console.log('Começou')
    console.log("")
    const eventos = await db.selectCustomers()
    console.log(eventos)

})()