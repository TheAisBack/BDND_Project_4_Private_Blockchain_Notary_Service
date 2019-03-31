/*===================	Mempool Controller Class	==============================|
|										Mempool Controller Class File															|
|============================================================================*/

const bitcoinMessage = require('bitcoinjs-message');
const TimeoutRequestsWindowTime5MINS = 5*60*1000;
const TimeoutRequestsWindowTime30MINS = 30*60*1000;
const validateRequest = require('./validateRequest');
const block = require('./block');
const SHA256 = require('crypto-js/sha256');
const hex2ascii = require('hex2ascii');
const star = require('./star');

class MempoolController {
	constructor() {
		this.mempool = [];
		this.timeoutRequests = [];
		this.mempoolValid = [];
	}
	AddRequestValidation(address) {
		let self = this;
		//	http://localhost:8000/requestValidation
		this.app.post("/requestValidation", (req, res) => {

			let requestvalid = this.mempool[req.body.address];

			if (requestvalid){
				res.send({validateRequest})
			} else {
				TimeoutRequestsWindowTime5MINS
			}
		}
	}
	validateRequestByWallet(message, address, signature) {
		let self = this;
		//	http://localhost:8000/message-signature/validate
		this.app.post("/message-signature/validate", (req, res) => {

			let verifywallet = this.mempoolValid[req.body.address];
			let isValid = bitcoinMessage.verify(verifywallet.message, req.body.address, req.body.signature);

			if(isValid){
				res.send({validateRequest})
			} else {
				TimeoutRequestsWindowTime5MINS
			}
		}
	}
	verifyAddressRequest(address) {
		let self = this;
		//	http://localhost:8000/block
		this.app.post("/block", (req, res) => {

			let verifyrequest = this.mempool[req.body.address];

			if (verifyrequest) {
				res.send({star})
			} else {
				TimeoutRequestsWindowTime5MINS
			}
		}
	}
}