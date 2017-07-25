const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


exports.preTest = functions.https.onRequest((request, response) => {
    let my1 = function (){
        response.send('my1')
    }

    let my2 = function(){
        response.send('my2')
    }
})

exports.test101 = functions.https.onRequest((request, response) => {
    response.send ('test101')
})

exports.test = functions.https.onRequest((request, response) => {
    let msg = 'Hello !!!!'
    response.send("Hello from firebase test1 bb" + msg + testCall())
})

exports.test2 = functions.https.onRequest((request, response) => {
    response.send("Hello from firebase test2")
})




function testCall (){
    return 'testCall'
}