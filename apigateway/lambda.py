import json

def handler(event, context):
    personId = event['queryStringParameters']['personId']
    #print(data)
    return {
        'statusCode':200,
        "body": json.dumps('PersonId : {}'.format(personId))
    }

# sam local invoke -e ./lambda/lambda_event.json LambdaDemoFunction