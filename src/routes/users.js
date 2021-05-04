const { Router } = require('express');
const router = Router();
const users = require('../users.json');
const ListUsers = [];
const _ = require('underscore');

router.get('/skill/:skills', (req, res) =>{ 
    const {skills} = req.params; 
    console.log(skills)
    if (skills) {
        _.each(users, (users, i) => {
            _.each(users.skills, (skillsUser, i) => {
                if (skillsUser === skills) {
                    ListUsers.push(users); 
                }            
            });
        });
        res.json(newUser);               
    }else{
        res.status(500).json({error: 'There was an error.'});
    }
});
router.post('/', (req, res) =>{
    const { name,
            position,
            skills
        } = req.body;
    if (name && position && skills) {
        const id = users.length + 1;
        const newUser = {...req.body, id};
        users.push(newUser);
        res.json(users);
    }
    else{
        res.status(500).json({error: 'There was an error.'});
    }
});
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(users, (users, i) => {
            if (users.id == id) {
                users.splice(i, 1);
            }
        });
        res.json(users);
    }
});
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name,
            position,
            skills } = req.body;
    if (id && name && position && skills) {
        _.each(users, (users, i) => {
            if (users.id === id) {
                users.name = name;
                users.position = position;
                users.skills = skills;
            }
        });
        res.json(users);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});
module.exports = router;
