const express = require('express');
const router = express.Router();
const fs = require('fs');

let routes = fs.readdirSync(__dirname);

for(let route of routes) {
    if(route.includes('.js') && route !== 'index.js') {
        const routePath = '/' + route.replace('.js','');
        const routeModule = require(`./${route}`);
        router.use(routePath, routeModule);
    }
}

module.exports = router;
