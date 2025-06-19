module.exports = app => {
    const controller = require('../controllers/country.controller.js');
    const router = require('express').Router();
  
    router.get('/', controller.findAll);
    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);
  
    app.use('/api/countries', router);
  };
  