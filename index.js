const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() )

app.get('/tshirt',(req,res) => {res.status(200).send({
        tshirt: 'helloworld',
        size: 'large'
    })
});

app.post('/tshirt/:id',(req,res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'Logo needed!' })
    }

    res.send({
        tshirt: `tshirt with your ${logo} and ID of ${id}`,
    });
});

app.listen(
    PORT,
    () => console.log(`Alive on http://localhost:${PORT}`)
)