AddRequestValidation {
	this.mempool = [];
	this.timeoutRequests = [];
}
setTimeOut {
	self.timeoutRequests[request.walletAddress]=setTimeout(function(){
		self.removeValidationRequest(request.walletAddress)
	}, TimeoutRequestsWindowTime );
	const TimeoutRequestsWindowTime = 5*60*1000;
	let timeElapse = (new Date().getTime().toString().slice(0,-3)) - req.requestTimeStamp;
	let timeLeft = (TimeoutRequestsWindowTime/1000) - timeElapse;
	req.validationWindow = timeLeft;
}
requestObject {
	"walletAddress": "19xaiMqayaNrn3x7AjV5cU4Mk5f5prRVpL",
	"requestTimeStamp": "1541605128",
	"message": "19xaiMqayaNrn3x7AjV5cU4Mk5f5prRVpL:1541605128:starRegistry",
	"validationWindow": 300
}
validateRequestByWallet {
	const bitcoinMessage = require('bitcoinjs-message'); 
	let isValid = bitcoinMessage.verify(message, address, signature);
	Create the new object and save it into the mempoolValid array
	this.registerStar = true;
	this.status = {
		address: walletAddress,
		requestTimeStamp: requestTimeStamp,
		message: message,
		validationWindow: validationWindow,
		messageSignature: valid
	};
}
validRequest {
	"registerStar": true,
	"status": {
		"address": "19xaiMqayaNrn3x7AjV5cU4Mk5f5prRVpL",
		"requestTimeStamp": "1541605128",
		"message": "19xaiMqayaNrn3x7AjV5cU4Mk5f5prRVpL:1541605128:starRegistry",
		"validationWindow": 200,
		"messageSignature": true
	}
}
verifyAddressRequest {

}
addblock(body) {
	let body = {
		address: req.body.address,
		star: {
			ra: RA,
			dec: DEC,
			mag: MAG,
			cen: CEN,
			story: Buffer(starStory).toString('hex')
		}
	};
	let block = new Block(body);
	//	Use your `addBlock(block)` method
}