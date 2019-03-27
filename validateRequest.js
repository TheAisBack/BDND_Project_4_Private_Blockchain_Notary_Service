/*=============================	validateRequest.js	==========================|
|														Validate the Wallet Class													|
|============================================================================*/

class validateRequestByWallet {
	constructor(body) {
		this.registerStar = true;
		this.status = {
			address: body.walletAddress,
			requestTimeStamp: body.requestTimeStamp,
			message: body.message,
			validationWindow: body.validationWindow,
			messageSignature: "valid"
		}
	};
}

module.exports.validateRequestByWallet = validateRequestByWallet;