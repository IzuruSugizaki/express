var express = require('express');
var router = express.Router();

//接続情報の設定
const{MongoClient} = require('mongodb');
const url = "mongodb+srv://DBizuru:izuru3k@cluster0.nrdk9ke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const Client = new MongoClient(uri);

router.get('/', async (req, res) => {
//データベース、コレクションを指定  
 const database = Client.db('notes');
 const notes = database.collection('notes');

 //idが１のドキュメントを取得
 const query = { id: 2};
 const note = await notes.findOne(query);

 res.json(note);
})

module.exports = router;