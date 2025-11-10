require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname,'client_build')));
app.get('/api/health', (req,res)=>res.json({ok:true,message:'HCNTS API active'}));
app.post('/api/run-reminders',(req,res)=>res.json({ok:true,message:'Reminders executed manually'}));
app.listen(process.env.PORT||3001,()=>console.log('HCNTS server running'));
