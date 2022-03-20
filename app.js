const express = require('express')
const app = express()
const port = 6000

app.use(express.json())  

app.post("/", async(req, res) =>{
    try {
        const { a } = req.body
        const { b } = req.body
        const c = await add(a,b)
        res.json(c)
    } catch (err) {
        console.error(err.message)
    }
})

function add(a, b){
    return a+b
}



app.listen(port, () => {
    console .log(`server is listening on port ${port}`)
});