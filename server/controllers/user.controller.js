'use strict';

const User = require('../models/user.model');
// const jwt = require('jsonwebtoken');
const config = require('../config/config');

class UserController {
    async getUsers(req, res) {
        let query = {}          // Search by some criteria
        let options = {}        // Page or limit
        let projection = "";    // Which fields are wanted
        
            const docs = await User.getUsers(query, projection, options);
            const users = JSON.parse(JSON.stringify(docs));
            console.log(users);
            res.json(users);
        
    }

    async getUsersName(req, res) {
        let query = {}          // Search by some criteria
        let options = {}        // Page or limit
        let projection = "";    // Which fields are wanted
        const docs = await User.getUsers(query, projection, options);
        const users = JSON.parse(JSON.stringify(docs));
        res.json(users);
        
    }

    async getUserByEmail(req, res) {
        let query = {}          // Search by name or uid
        let options = {}        // Page or limit
        let projection = "";    // Which fields are wanted
        let searchedUser = {};

        // Check for email in the url
        if(req.params.email !== undefined){
            const email = req.params.email;
            const docs = await User.getUserByEmail(email, projection, options);
            searchedUser = JSON.parse(JSON.stringify(docs));
            res.status(200);
        }
        else{
            res.status(404);
        }

        res.json(searchedUser);
    }

    async getUserByUID(req, res) {
        let query = {}          // Search by name or uid
        let options = {}        // Page or limit
        let projection = "";    // Which fields are wanted
        let searchedUser = {};

        // Check for email in the url
        if(req.params.username !== undefined){
            const username = req.params.username;
            const docs = await User.getUserByUsername(username, projection, options);
            searchedUser = JSON.parse(JSON.stringify(docs));
            res.status(200);
        }
        else{
            res.status(404);
        }

        res.json(searchedUser);
    }

    async updateUserByUID(req, res) {
        // Check for email in the url
        if (req.params.username) {
            const username = req.params.username;
            const query = { username };
            const data = req.body;
            
            const updatedUser = await User.update(query, data);
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({msg: 'Usuario por username no encontrado'});
            }
            
        } else {
            res.status(400).json({msg: 'Error en la petición'});
        }
    }

    async deleteUserByUID(req, res) {
        // Check for email in the url
        if (req.params.username) {
            const username = req.params.username;
            const query = { username };
            
            const deletedUser = await User.delete(query);
            if (deletedUser) {
                res.status(200).json(deletedUser);
            } else {
                res.status(404).json({msg: 'Usuario por username no encontrado'});
            }
            
        } else {
            res.status(400).json({msg: 'Error en la petición'});
        }
    }

    async saveUser(req, res) {
        const newUser = await User.add(req.body); 
        if (newUser.error) {
            res.status(401).json({msg: 'Ya hay un usuario registrado con ese usuario'});
        } else {
            res.status(201).json(newUser);
        }
    }

    async updateUser(req, res) {
        // Check for email in the url
        if (req.params.email) {
            const email = req.params.email;
            const query = { email };
            const data = req.body;
            
            const updatedUser = await User.update(query, data);
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({msg: 'Usuario no encontrado por Email'});
            }
            
        } else {
            res.status(400).json({msg: 'Error en la petición'});
        }
    }

    async deleteUser(req, res) {
        // Check for email in the url
        if (req.params.email) {
            const email = req.params.email;
            const query = { email };
            
            const deletedUser = await User.delete(query);
            if (deletedUser) {
                res.status(200).json(deletedUser);
            } else {
                res.status(404).json({msg: 'Usuario no encontrado por Email'});
            }
            
        } else {
            res.status(400).json({msg: 'Error en la petición'});
        }
    }

}




const userController = new UserController();
module.exports = userController;