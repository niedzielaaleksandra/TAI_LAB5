'use strict';
import business from '../business/business.container';
const postEndpoint = (router) => {
router.get('/api/post', async (request, response, next)
=> {
 try {
           	let result = await
	            business(request).getCategoryManager().query();
           	response.status(200).send(result);
       	} catch (error) {
           	console.error("error");
       	}
   	});
	};
	export default postEndpoint;
