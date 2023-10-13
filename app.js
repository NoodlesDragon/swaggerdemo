const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Wilsons Calorie Intake Monitor',
            version: '1.0.0'
        }
    },
    apis: ['app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /entry:
 *   get:
 *     description: Get all entries
 *     responses:
 *       200:
 *         description: Success
 * 
 */

app.get('/entry',(req,res) => {
    res.send([
        {
            entryid: 1,
            name: "My breakfast",
            calories: "2000 cal"
        }
    ])
});

/**
 * @swagger
 * /entry:
 *   post:
 *     description: Create a new entry
 *     parameters:
 *     - entryid: id
 *       name: title
 *       calories: Calories consumed
 *       in: formData
 *       required: true
 *       type: string
 *     responses:
 *       201:
 *         description: Created
 * 
 */

app.post('/entry', (req,res) => {
    res.status(201).send();

})

/**
 * @swagger
 * /entry:
 *   put:
 *     description: Update an entry
 *     responses:
 *       201:
 *         description: Updated
 * 
 */

app.put('/entry', (req,res) => {
    res.status(200).send("Successfully updated");

})

app.listen(5000, () => console.log("listening on 5000"))