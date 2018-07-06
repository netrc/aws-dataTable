var AWS = require('aws-sdk');
    AWS.config.update({ region: 'us-east-1' }); // var dynamoDBConfiguration = { "accessKeyId": "AccessKey", "secretAccessKey": "Secratekey",  "region": "us-west-2" };
var ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

exports.handler =  (event, context, callback) => {   //async ; can be done, but not sure about returns....
    var b = JSON.parse(event.body);   // TODO: try/catch
    var params = {
      TableName: 'dataTable',
      Item: {
        userSourceID : {S: b.userSourceID},
        epochSeconds : {N: (new Date()).getTime().toString()},
        dedDepth : {N: b.dedDepth}
      }
    };

    ddb.putItem(params, function(err, data) {
      if (err) {
        console.log("ddb putItems Error" + err);
        callback({statusCode: '500', body: err });  //context.fail("ddb putItem error" + err);
      } else {
        console.log("ddb putItems Success");  // , data
        callback(null, {  statusCode: '200', body: 'ddb putitems success'} ); // old//context.succeed("ddb putItem ok");
      }
    });
};

