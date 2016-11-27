/**
 * Created by Administrator on 2016/11/27.
 */
var sub = require('./sub');
require('./main.scss');
var $ = require('jquery');
var moment = require('moment');
var app = document.createElement('div');
app.innerHTML = '<h1>hello world webpack</h1>';
app.appendChild(sub());
$('body').append('<p>look at ! now is' + moment().format() +'</p>');
