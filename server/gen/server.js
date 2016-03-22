'use strict';
// for attendees who are sitting on a very old node version
require('es5-shim');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var db = require('./contacts.js');
app.use(bodyParser.json());
app.use(cors());
var singleResponse = function (item) { return { item: item }; };
var multipleResponse = function (items) { return { items: items }; };
var isContact = function (contact) { return contact.name !== undefined; };
var getNextId = function () { return db.length; };
var emailIsAvailable = function (email) {
    var contact = db.find(function (contact) { return contact.email == email; });
    return contact ? false : true;
};
app.get('/search', function (req, res) {
    var text = req.query.text;
    var matches = db.filter(function (contact) { return contact.name.indexOf(text) > -1; });
    res.json(multipleResponse(matches));
});
app.get('/contacts', function (req, res) {
    res.json(multipleResponse(db));
});
app.get('/contacts/:id', function (req, res) {
    var contact = db.find(function (contact) { return contact.id == req.params.id; });
    contact ? res.json(singleResponse(contact)) : res.status(404).json({ error: 'contact not found' });
});
app.put('/contacts/:id', function (req, res) {
    var contact = db.find(function (contact) { return contact.id == req.params.id; });
    if (contact) {
        Object.assign(contact, req.body);
        res.json(singleResponse(contact));
    }
    else {
        res.status(404).json({ error: 'contact not found' });
    }
});
app.post('/contacts', function (req, res) {
    if (isContact(req.body)) {
        req.body.id = getNextId();
        db.push(req.body);
        res.json(singleResponse(req.body));
    }
    else {
        res.status(404).json({ error: 'invalid structure' });
    }
});
app.get('/check-email', function (req, res) {
    if (emailIsAvailable(req.query.email)) {
        res.json({ msg: 'AVAILABLE' });
    }
    else {
        res.json({ error: 'NOT_AVAILABLE' });
    }
});
var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Angular 2 Master Class app server listening at http://%s:%s', host, port);
});
