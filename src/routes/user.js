const passport = require('passport');
require('../middelwares/passport');


module.exports = (router, controller) => {

    router.use(passport.initialize());
    // router.use(passport.session());

    router.post('/addUser', controller.addUser);
    router.get('/hello', controller.hello);
    router.get('/js', controller.js);
}   

