const functions = require('firebase-functions'); // The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const admin = require("firebase-admin");

exports.timestamps = functions.https.onRequest((req, res) => {

    var dataModel = {
        id: "001",
        name: "TAN"
    }

    if (req.method === 'GET') {
        res.status(200).send(dataModel);
    }
    else if (req.method === 'POST') {
        res.status(200).send("is http POST");
    }
    else if (req.method === 'PUT') {
        res.status(200).send("is http PUT");
    }
    else if (req.method === 'DELETE') {

        let itemId = req.param('itemId')
        if (itemId != undefined)
            res.status(200).send(itemId);
        else
            res.status(200).send("ItemId Not found")
    }

});