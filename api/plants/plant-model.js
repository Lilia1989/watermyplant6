const db = require('../data/db-config')

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('plants')
}


function findBy(filter) {
    return db('plants').where(filter);
}

function findById(id) {
    return db("plants").where({ id }).first();
}


async function add(plant) {
    const [id] = await db('plants').insert(plant, 'id');
    return findById(id);
}


async function update(id, changes) {
    await db("plants").where({ id }).update(changes);
    return findById(id);
}

function remove(id) {
    return db('plants')
        .where('id', id)
        .del();
}