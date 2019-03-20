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