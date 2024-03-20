const tokensfiat_gateway = require('tokensfiat-gateway');
const tokensfiat_gateway_integration = require('tokensfiat-gateway-integration');
const react = require('react');
const web3_utils = require('web3-utils');
const react_dom = require('react-dom');
const firebase = require('firebase');
const ganache_cli = require('ganache-cli');
const web3 = require('web3');
const underscore = require('underscore');
const jest = require('jest');
const moment = require('moment');
const truffle = require('truffle');
const eslint = require('eslint');

const { Writable } = require('stream');
const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});
process.stdin.pipe(outStream);

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => console.log('An event occurred!'));
myEmitter.emit('event');

// Get the gas price from the Ethereum network
web3.eth.getGasPrice().then(gasPrice => {
  console.log('Gas price:', web3.utils.fromWei(gasPrice, 'gwei'), 'gwei');
}).catch(err => {
  console.error('Error getting gas price:', err);
});

for (const char of 'Hello') {
  console.log(char);
}

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.once('event', () => {
  console.log('This event will only be triggered once');
});
myEmitter.emit('event');
myEmitter.emit('event');

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => console.log('An event occurred!'));
myEmitter.emit('event');

class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}
console.log(new Polygon(4, 3).area);

// Create a JWT token using jsonwebtoken library
const jwt = require('jsonwebtoken');
const generateJWTToken = (payload, secret, options) => {
  return jwt.sign(payload, secret, options);
}
const userPayload = { userId: 12345, username: 'john_doe' };
const jwtSecret = 'secret_key';
const jwtOptions = { expiresIn: '1h' };
const token = generateJWTToken(userPayload, jwtSecret, jwtOptions);
console.log('JWT Token:', token);

// Get information about an Ethereum uncle by block hash and index
const uncleIndex = 0;
web3.eth.getBlock('0xblockHash').then(block => {
  if (block && block.uncles && block.uncles.length > uncleIndex) {
    console.log('Uncle details:', block.uncles[uncleIndex]);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details:', err);
});