
exports.lambdaHandler = async (event, context) => {
    return event.data;
};


//sam local invoke -e ./lambda/lambda_event.json LambdaDemoFunction  