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
		let requestvalid = this.mempool[address];
		if (requestvalid === undefined){
			newrequestvalid = this.validateRequest(address);
			this.mempool[address] = newrequestvalid;
			self.timeoutRequests[newrequestvalid.address]=setTimeout(function(){
				self.removeValidationRequest(newrequestvalid.address)
			}, TimeoutRequestsWindowTime5MINS);
		}
		return newrequestvalid;
	}
	validateRequestByWallet(message, address, signature) {
		let self = this;
		let isValid = bitcoinMessage.verify(message, address, signature);
		let verifywallet = this.mempoolValid[address];
		if(isValid){
			let valid = self.timeoutRequests[isValid.address]=setTimeout(function(){
				self.removeValidationRequest(isValid.address)
			}, TimeoutRequestsWindowTime30MINS);
			return valid
		}
	}
	verifyAddressRequest(address) {
		let self = this;
		let verifyrequest = this.mempool[address];
		if (verifyrequest) {
			let valid = self.timeoutRequests[verifyrequest.address]=setTimeout(function(){
				self.removeValidationRequest(verifyrequest.address)
			}, TimeoutRequestsWindowTime30MINS);
			return valid;
		}
	}
}