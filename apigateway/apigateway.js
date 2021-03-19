exports.lambdaHandler = async (event, context) => {
    return 'foo';
};

//sam local invoke -e ./events/apigateway_event.json ApiGatewayFunction
//sam local start-api
