const app = require('./app'); 

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on PORT ${listener.adress().port}`);
})