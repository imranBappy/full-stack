const userRoute = require('./userRoutes');
const transactionRoute = require('./transactionRoute');
const adminRoute = require('./adminRoutes');
const gameRoute = require('./gameRoute');
const betRoute = require('./betRoute');



const routes = [
    {path:'/user', router: userRoute },
    {path:'/transaction',  router: transactionRoute},
    {path:'/admin', router: adminRoute},
    {path:'/game', router: gameRoute},
    {path:'/bet', router: betRoute},

];

const setRoutes = app =>{
    routes.forEach(route => {
        app.use(route.path, route.router)
    });
}

module.exports = setRoutes;
