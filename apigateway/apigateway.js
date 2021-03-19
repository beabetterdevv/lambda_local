exports.lambdaHandler = async (event, context) => {
    return event.queryStringParameters.foo;
};

//sam local invoke -e ./apigateway/apigateway_event.json ApiGatewayFunction
//sam local start-api
