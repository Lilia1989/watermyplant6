const router = require('express').Router()
const Plants = require('./plant-model')
// const { restrict } = require('../users/users-middleware.js');
const authenticate = require('../auth/auth-middleware.js');

router.get('/', authenticate, (req, res, next) => {
    Plants.find()
        .then(plant => {
            res.json(plant)
        })
        .catch(next)
})


router.get('/:id', authenticate, (req, res, next) => {
    const { id } = req.params;

    Plants.findById(id)
        .then((plant) => {
            if (plant) {
                res.status(200).json(plant);
            } else {
                res.status(404).json({ message: `Could not find Item with id ${id}.` });
            }
        })
        .catch(next);
})

router.post('/', authenticate, (req, res, next) => {
    let plant = req.body
    Plants.add(plant)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(next)


})

router.put('/:id', authenticate, (req, res, next) => {
    const changes = req.body
    const { id } = req.params;

    Plants.update(id, changes)
        .then(plant => {
            if (plant) {
                Plants.findById(req.params.id)
                    .then(updatedItem => {
                        res.status(200).json(
                            {
                                updatedItem,
                                message: "plant successfully updated",
                            }
                        );
                    })
                    .catch(next)
            } else {
                res.status(404).json({ message: 'Could not find plant with given id' })
            }
        })
        .catch(next)
})



router.delete('/:id', authenticate, (req, res, next) => {
    const { id } = req.params;
    Plants.remove(id)
        .then(deletedItem => {
            if (deletedItem) {
                res.json({
                    message: `removed: ${deletedItem} successfully`
                })
            } else {
                res.status(404).json({
                    error: 'plant could not be deleted. given id not found in db'
                })
            }
        })
        .catch(next)
})


module.exports = router