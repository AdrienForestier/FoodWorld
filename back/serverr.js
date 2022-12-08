const express=require('express');
const app=express();
const cors= require("cors");
const pool = require('./databasee.js');
const morgan = require('morgan');

app.use(cors());
app.use(express.json());

app.listen(5000, ()=>{console.log('server has started on port 5000.')})
app.use(morgan('tiny'));

app.get('/specialite', async(req,res)=>{
    try{
        const allSpecialites = await pool.query("SELECT pays, capitale, specialite, lattitude, longitude FROM specialite")
        res.json(allSpecialites.rows)
    }
    catch(err){
        console.error(err.message)
    }
})

app.get('/specialite/:pays', async(req,res)=>{
    try{
        const { pays } = req.params
        const plats = await pool.query("SELECT specialite, pays, capitale FROM specialite WHERE pays = $1", [pays])
        res.json(plats?.rows)
    }
    catch(err){
        console.error(err.message)
    }
})

app.post('/specialite/', async(req,res)=>{
    try{
        const { speciality, country, capital, latitude, longitude } = req.body;
        console.log(req.body)
        const newSpeciality = await pool.query("INSERT INTO specialite (specialite, pays, capitale, lattitude, longitude) VALUES ($1, $2, $3, $4, $5)", [speciality, country, capital, latitude, longitude])

        res.json()
    }
    catch(err){
        console.error(err.message)
    }
})

app.get('/restaurant', async(req,res)=>{
    try{
        const allRestaurants = await pool.query("SELECT * FROM restaurants")
        res.json(allRestaurants.rows)
    }
    catch(err){
        console.error(err.message)
    }
})

app.get('/restaurant/:pays', async(req,res)=>{
    try{
        const { pays } = req.params
        const restaurants = await pool.query("SELECT * FROM restaurants WHERE pays = $1", [pays])
        res.json(restaurants?.rows)
    }
    catch(err){
        console.error(err.message)
    }
})
