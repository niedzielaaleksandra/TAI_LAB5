'use strict';

import postEndpoint from './post.endpoint';
// import productEndpoint from './product.endpoint';


const routes = (router, config) => {
    postEndpoint(router);
    // productEndpoint(router);
};

export default routes;
