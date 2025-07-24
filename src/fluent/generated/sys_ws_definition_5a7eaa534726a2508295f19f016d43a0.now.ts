import { RestApi } from '@servicenow/sdk/core'

export default RestApi({
    $id: 'generated0',
    enforce_acl: ['cf9d01d3e73003009d6247e603f6a990'],
    name: 'Test',
    service_id: 'test',
    routes: [
        {
            name: 'gitdemo',
            consumes: 'application/json,application/xml,text/xml',
            produces: 'application/json,application/xml,text/xml',
            path: '/demo',
            enforce_acl: ['cf9d01d3e73003009d6247e603f6a990'],
            script: script`
                     (function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
                     
                         // implement resource here
                     	response.setBody({ 'msg' : 'success'});
                     	response.setStatus(200);
                     
                     })(request, response);`,
            $id: 'generated1',
        },
    ],
})
