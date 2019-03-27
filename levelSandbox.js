/*=========================	Persist data with LevelDB		======================|
|							Learn more:	level:	https://github.com/Level/level							|
|============================================================================*/

const level = require('level');
const chainDB = './chaindata';

//	Add data to levelDB with key/value pair
class LevelSandbox {
	constructor() {
		this.db = level(chainDB);
	}
	addLevelDBData(key) {
		let self = this
		return new Promise(function(resolve, reject) {
			self.db.put(key, value, function(error) {
				if (error) {
					console.log(key, error)
				}
			})
		})
	}
	//	Get data from levelDB with key
	//	const getLevelDBData = async (key) => db.get(key);
	//	Add data to levelDB with value
	addDataToLevelDB(value) {
		let self = this
		let i = 0
		return new Promise(function(resolve, reject) {
			self.db.createReadStream()
				.on('data', function(data) {
					i++;
				})
				.on('error', function(error) {
					return console.log('Unable to read data stream!', error)
				})
				.on('close', function() {
					console.log('Block #' + i);
					addLevelDBData(i, value);
				})
				.on('end', function (end) {
					resolve(end);
				})
		})
	}
	//	Get Blocks Count
	getBlocksCount() {
		let self = this
		let i = 0
		return new Promise(function(resolve, reject) {
			self.db.createReadStream()
				.on('data', function (data) {
					count += 1;
				})
				.on('error', function (error) {
					resolve(error);
				})
				.on('close', function (count) {
					resolve(count);
				})
				.on('end', function (end) {
					resolve(end);
				})
		})
	}
	//	Get block by hash
	getBlockByHash(hash) {
		let self = this
		let block = null
		return new Promise(function(resolve, reject) {
			self.db.createReadStream()
				.on('data', function (data) {
					if(data.hash === hash){
						block = data;
					}
				})
				.on('error', function (error) {
					reject(error);
				})
				.on('close', function (block) {
					resolve(block);
				})
				.on('end', function (end) {
					resolve(end);
				})
		})
	}
	//	Get Block By Address
	getBlockByWalletAddress(address) {
		let self = this
		let block = []
		return new Promise(function(resolve, reject) {
			self.db.createReadStream()
				.on('data', function (data) {
					if(JSON.parse(data.value).body.address == address){
						block.push(data.value)
					}
				})
				.on('error', function (error) {
					reject(error);
				})
				.on('close', function (block) {
					resolve(block);
				})
				.on('end', function (end) {
					resolve(end)
				})
		})
	}
	//	Get
	//	Get data from levelDB with key (Promise)
	getLevelDBData(key) {
		let self = this
		return new Promise(function(resolve, reject) {
			self.db.get(key, (err, value) => {
				if(error){
					if (error.type == 'NotFoundError') {
						resolve(undefined)
					} else {
						console.log('Block ' + key + ' get failed', error);
						reject(error)
					}
				} else {
					resolve(value)
				}
			})
		})
	}
}
module.exports.LevelSandbox = LevelSandbox;