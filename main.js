require('dotenv').config();
const express = require('express');
const swagger = require('swagger-ui-express');
const bodyParser = require('body-parser');
const { router } = require('./routes');
const { swaggerDocument } = require('./swagger');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/",router);
app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocument));

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server Listening PORT ${port}`);
})