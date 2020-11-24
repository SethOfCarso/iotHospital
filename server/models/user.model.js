'use strict';

const mongoose = require('../db/mongodb-connection')
const DataBaseWrapper = require('../db/DataBaseWrapper');

class User extends DataBaseWrapper {
    //_schema;

    constructor() {
        super();
        
        this._schema = new mongoose.Schema({
            username: {
                type: String,
                unique: true,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            nombre: {
                type: String,
                required: true
            }
        });
        
        this._model = mongoose.model('IOT', this._schema);
    }
    
    async getUsers(query = {}, projection = "", options = {}) {
        return await super.query(query, projection, options);
    }

    async getUserByUsername(username, projection = "", options = {}) {
        const userUID = { username }
        return await super.queryOne(userUID, projection, options);
    }

    async getUser(query = {}, projection = "", options = {}) {
        return await super.queryOne(query, projection, options);
    }
    
    async exists(conditions) {
        return await super.exists(conditions);
    }

    async add(document) {
        return await super.add(document);
    }

    async update(query, data) {
        return await super.update(query, data);
    }

    async delete(query) {
        return await super.delete(query);
    }
}
const user = new User();


module.exports = user;