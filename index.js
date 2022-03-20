const express = require('express')
const app = express()
const port = 5000
const pool = require('./db');

// req.body -> Accessing data from client side
app.use(express.json())  

// Routes 
app.get("/getName", async(req,res) => {
    try {
        const array = [];
        const getALlName = await pool.query("Select * from account;")
        var result = getALlName.rows
        // console.log(typeof result);
        for (var i=0; i< result.length; i++ ){
            console.log(result[i])
            var a = result[i]["username"]
            console.log(a)
            array.push(a);
        }
        res.status(200).json(array)
        console.log(array);
    } catch (err) {
        res.status(400).send(err)
    }
})
// get all account 
app.get("/getAllAccounts", async(req, res) => {
    try {
        const getAllAccount = await pool.query("SELECT * FROM account;")
        res.json(getAllAccount.rows)
    } catch (err) {
        console.error(err.message)
    }
})

// get a account 
app.get("/getAllAccounts/:user_id", async(req, res) => {
    try {
        const { user_id } = req.params
        const getAllAccount = await pool.query("SELECT * FROM account WHERE user_id = $1", [user_id])
        res.json(getAllAccount.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

// create a account 
app.post("/accounts", async(req, res) =>{
    try {
        const { user_id } = req.body
        const { username } = req.body
        const { password } = req.body
        const { email } = req.body
        const newAccount = await pool.query("INSERT INTO account (user_id, username, password, email) VALUES ($1, $2, $3, $4) RETURNING *", [user_id, username, password, email])

        res.json(newAccount.rows);
    } catch (err) {
        console.error(err.message)
    }
})

// update a account 
app.put("/updateAccount/:user_id", async(req, res) => {
    try {
        const { user_id } = req.params;
        const { password } = req.body;
        const updateAccount = await pool.query("UPDATE account SET password=$1 WHERE user_id=$2", [password,user_id])
        res.json("Account was updated!")
    } catch (err) {
        console.error(err.message)
    }
})

// delete a account 
app.delete("/deleteAccount/:user_id", async(req, res) => {
    try {
        const { user_id } = req.params;
        const deleteAccount = await pool.query("DELETE FROM account WHERE user_id = $1", [user_id])
        res.json("Account was deleated!")
    } catch (err) {
        console.error(err.message)
    }
})



app.listen(port, () => {
    console .log(`server is listening on port ${port}`)
});