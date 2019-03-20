/*==============================	Block Class	================================|
|											Class with a constructor for block											|
|============================================================================*/

class Block {
	constructor(data) {
		this.hash = "",
		this.height = 0,
		this.body = {
			address: req.body.address,
			star: {
				ra: RA,
				dec: DEC,
				mag: MAG,
				cen: CEN,
				story: Buffer(starStory).toString('hex')
			}
		},
		this.time = 0,
		this.previousBlockHash = ""
	}
}

module.exports = Block