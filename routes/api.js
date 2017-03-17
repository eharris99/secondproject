// var express = require('express');
// var router = express.Router();


/* GET users listing. */
// router.get('/:resource', function(req, res, next) {
// 	var resource = req.params.resource
// 		var data = {
// 		  	confirmation: 'success',
// 		  	resource: resource
// 		  }
//   res.json(data)
// });

// module.exports = router;


var express = require('express');
var router = express.Router();
var Profile = require('../models/Profile')

router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource
  if (resource=='profile'){
  	Profile.find(req.query, function(err, results){
  		if (err){
				res.json({
						confirmation:'fail',
						message:err
					})
					return
				}

				res.json({
					confirmation:'success',
					results:results
				})
				return

		})
	}
});

router.post('/:resource', function(req, res, next) {
		var resource = req.params.resource
		if (resource == 'profile') {
			Profile.create(req.body, function(err,result){
				if (err){
					res.json({
						confirmation:'fail',
						message:err
					})
					return
				}

				res.json({
					confirmation:'success',
					result:result

				})

			})
		}
})

router.get('/:resource/:id', function(req, res, next) {
	var resource = req.params.resource
	var id = req.params.id
	Profile.findById(id, function(err, result){
			if (err){
					res.json({
						confirmation:'fail',
						message:err
					})
					return
				}
			res.json({
				confirmation:'success',
				result:result
			})
			return

		})

})

module.exports = router;

// var express = require('express');
// var router = express.Router();
// var Profile = require('../models/Profile')
// var ProfileController = require('../controllers/ProfileController')

// var controllers = {
// 	profile: ProfileController
// }

// router.get('/:resource/:id', function(req, res, next) {
// 	var resource = req.params.resource
// 	var id = req.params.id
// 	var controller = controllers[resource]

// 	if (controller == null){
// 		res.json({
// 			confirmation: 'fail',
// 			message: 'invalid resource request'
// 		})
// 		return
// 	}

// 		controller.getById(id, function(err, result){
// 			if (err){
// 					res.json({
// 						confirmation:'fail',
// 						message:err
// 					})
// 					return
// 				}
// 				res.json({
// 					confirmation:'success',
// 					result:result
// 				})
// 				return
// 				})
// 	});

// /*post */
// router.post('/:resource', function(req, res, next) {
// var resource = req.params.resource
// var controller = controllers[resource]
  
//   if (controller == null){
// 		res.json({
// 			confirmation: 'fail',
// 			message: 'invalid resource request'
// 		})
// 		return
// 	}

//   	controller.post(req.body, function(err, result){
//   		if (err){
// 				res.json({
// 						confirmation:'fail',
// 						message:err
// 					})
// 					return
// 				}

// 				res.json({
// 					confirmation:'success',
// 					result:result
// 				})
// 				return

// 		})
// 	});


// /* GET profiles listing. */
// router.get('/:resource', function(req, res, next) {
// 	var resource = req.params.resource
// 	var controller = controllers[resource]
  
//   if (controller == null){
// 		res.json({
// 			confirmation: 'fail',
// 			message: 'invalid resource request'
// 		})
// 		return
// 	}

//   	controller.get(req.query, function(err, results){
// 			if (err){
// 					res.json({
// 						confirmation:'fail',
// 						message:err
// 					})
// 					return
// 				}

// 				res.json({
// 					confirmation:'success',
// 					results:results
// 				})
// 				return

// 		})
// });
  
// module.exports = router;
