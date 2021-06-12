const userRoute = require('./userRoutes');
const transactionRoute = require('./transactionRoute');
const adminRoute = require('./adminRoutes');
const gameRoute = require('./gameRoute');


const routes = [
    {path:'/user', router: userRoute },
    {path:'/transaction',  router: transactionRoute},
    {path:'/admin', router: adminRoute},
    {path:'/game', router: gameRoute}
];

const setRoutes = app =>{
    routes.forEach(route => {
        app.use(route.path, route.router)
    });
}

module.exports = setRoutes;
