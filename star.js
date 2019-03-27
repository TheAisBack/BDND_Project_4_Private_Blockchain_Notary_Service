/*=============================	Star Class	==================================|
|															Star Class File																	|
|============================================================================*/

class Star {
	constructor(body) {
		this.address = req.body.address,
		this.star = {
			ra: body.star.RA,
			dec: body.star.DEC,
			mag: body.star.MAG,
			cen: body.star.CEN,
			story: Buffer(body.star.story).toString('hex')
		}
	}
}
module.exports.Star = Star;