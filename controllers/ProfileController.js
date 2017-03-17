var Profile = require('../models/Profile')

module.exports = {

	get: function(params, callback){
		Profile.find(params, function(err, profiles){
			if (err){
				if (callback != null)
					callback(err, null)

				return
			}

			if (callback != null){
				
				callback(null, profiles)
			}
		})
	},

	getById: function(id, callback){
		Profile.findById(id, function(err, profile){
			if (err){
				if (callback != null)
					callback({message:'Entry Not Found'}, null)

				return
			}

			if (callback != null)
				callback(null, profile)
		})
	},

	post: function(params,callback){
		Profile.create(params, function(err, profile){
			if (err){
				if (callback != null)
					callback({message:'Entry Not Found'}, null)

				return
			}

			if (callback != null)
				callback(null, profile)
		})
	},
}
