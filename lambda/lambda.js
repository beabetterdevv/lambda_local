
exports.lambdaHandler = async (event, context) => {
    console.log(process.env)
    return 'received the following data as input: ' + event.data
};


//sam local invoke -e ./events/lambda_event.json LambdaDemoFunction  