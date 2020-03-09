const events = require('events');
const emitter = new events.EventEmitter();

// event teriak
var screamCall = function(nama) {
    console.log('awwwwww malu bgt,, ${nama},,, ' + nama);
}
emitter.on('scream', screamCall);

// menyalakan event nya 
emitter.emit('scream', 'willy');
/////////////////////////////////////////
var errorCallBack = function(e){
    console.log('error');
}
emitter.on('error', errorCallBack);

var a=1;
var b=0;

if (b==0){
    emitter.emit('error', 'invalid operation')
}