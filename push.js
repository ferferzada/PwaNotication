const express = require('express');
const push = require('web-push');
const app = express();

let keyPush = {
    publicKey: 'BF-CXKmlD3HsaQSp2RX3U4TusiOEDbsDKwvPtXc6CHEh5-qegFJZxxs4JyeBVYktqNYjBLw0xbBmoo--9OrUSLg',
    privateKey: 'bnbLqYTpTxhONeIYbvqnUIlq8vL-RHqHm1nvulKQ3c0'
};

push.setVapidDetails("https://ferferzada.github.io/PwaNotication/",keyPush.publicKey,keyPush.privateKey);

app.get('/push', function(req, res){
    let keyBrowser = req.query.keyBrowser;  // get keyBrowser from the query parameters
    let sub = {
        "endpoint":keyBrowser,
        "expirationTime":null,
        "keys":{"p256dh":"BAJ9XNPHp3W9eXtfVWCTHF59OQr3mdUYdwKPKRP_ExneizlIsiCi666fGhVkcdf2dpKOTUcyqjRkf9qjEQVTRF4","auth":"BCCtiWd553LyzGYZVpHS1g"}
    };
    push.sendNotification(sub, 'teste mensage');
    res.send('Notification sent.');
});

app.listen(3000, function(){
    console.log('App listening on port 3000.');
});
