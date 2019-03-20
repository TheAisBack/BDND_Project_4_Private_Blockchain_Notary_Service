/*=========================	Persist data with LevelDB		======================|
|							Learn more:	level:	https://github.com/Level/level							|
|============================================================================*/

const level = require('level');
const chainDB = './chaindata';
const db = level(chainDB);

//	Add data to levelDB with key/value pair

const addLevelDBData = async (key,value) => {
	db.put(key, value, function(err) {
		if (err) {
			console.log(key, err);
		}
	})
};

//  Get data from levelDB with key
//	const getLevelDBData = async (key) => db.get(key);

//	Add data to levelDB with value
function addDataToLevelDB(value) {
	let i = 0;
	db.createReadStream().on('data', function(data) {
		i++;
	}).on('error', function(err) {
		return console.log('Unable to read data stream!', err)
	}).on('close', function() {
		console.log('Block #' + i);
		addLevelDBData(i, value);
	});
}

//	Get block by hash
function getBlockByHash(hash) {
	let self = this;
	let block = null;
	return new Promise(function(resolve, reject){
		self.db.createReadStream()
		.on('data', function (data) {
			if(data.hash === hash){
				block = data;
			}
		})
		.on('error', function (err) {
			reject(err)
		})
		.on('close', function () {
			resolve(block);
		});
	});
}

//	getBlockByWalletAddress(address)
//	db.createReadStream()

//	Get data from levelDB with key (Promise)
function getLevelDBData(key) {
	let self = this;
	return new Promise(function(resolve, reject) {
		self.db.get(key, (err, value) => {
			if(err){
				if (err.type == 'NotFoundError') {
					resolve(undefined);
				} else {
					console.log('Block ' + key + ' get failed', err);
					reject(err);
				}
			} else {
				resolve(value);
			}
		});
	});
}

module.exports = {
	addLevelDBData,
	getLevelDBData,
	getBlockByHash,
};