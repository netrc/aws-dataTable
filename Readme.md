

* edit Lambda - https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/dataTablePut
* dynamodb - https://console.aws.amazon.com/dynamodb/home?region=us-east-1#tables:selected=dataTable
* policy edit - https://console.aws.amazon.com/iam/home?region=us-east-1#/policies/arn:aws:iam::200702499952:policy/dataTableAll$jsonEditor
* log stream - https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logStream:group=/aws/lambda/dataTablePut;streamFilter=typeLogStreamPrefix
* API gw metrics - https://us-east-1.console.aws.amazon.com/apigateway/home?region=us-east-1#/apis/1i3ubimrj8/dashboard


Todo:
* PUT only
* Auth key
* async/await (await putItem().promise) - https://javascript.info/async-await
