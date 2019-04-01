/*=========================	BlockController.js	==============================|
|		Block Controller Definition to encapsulate routes to work with blocks			|
|============================================================================*/

const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./block.js');
const Blockchain = require('./simpleChain');

class BlockController {
	//	Constructor to create a new BlockController, you need to initialize here all 
	//	your endpoints @param {*} app
	constructor(app) {
		this.app = app;
		this.blocks = [];
		this.initializeMockData();
		this.getBlockByIndex();
		this.postNewBlock();
	}
	//	Implement a GET Endpoint to retrieve a block by index, url: "/api/block/:index"	
	getBlockByIndex() {
		this.app.get("/block/:index", (req, res) => {
			//	Add your code here
			try {
				const { height } = req.params;
				const block = chain.getBlock(height);
				console.log(block);
				return res.send(JSON.parse(block))
			} catch(error) {
				res.status(404).json({
					"message": "Error no block found"
				})
			}
		});
	}
	//	Implement a POST Endpoint to add a new Block, url: "/api/block"
	postNewBlock() {
		this.app.post("/block", (req, res) => {
			//	Add your code here
			if (req.body.body === "" || req.body.body === undefined) {
				return res.status(400).send("Pass data to the block");
			} else {
				let addNewBlock = new Block(req.body.body);
				chain.addBlock(addNewBlock).then(result => {
					return res.status(200).send(result);
				}).catch(error => {
					return res.status(400).send(error);
				});
			}
		});
	}
	//	Help method to inizialized Mock dataset, adds 10 test blocks to the blocks array
	initializeMockData() {
		if(this.blocks.length === 0){
			for (let index = 0; index < 10; index++) {
				let blockAux = new BlockClass.Block(`Test Data #${index}`);
				blockAux.height = index;
				blockAux.hash = SHA256(JSON.stringify(blockAux)).toString();
				this.blocks.push(blockAux);
			}
		}
	}
}

//	Exporting the BlockController class @param {*} app 
module.exports = (app) => { return new BlockController(app);}