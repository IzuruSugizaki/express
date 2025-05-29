var express = require('express');
var router = express.Router();

//レスポンスのデータ
const resposeObjectDataAll = {
  textObject1: {
    id: 1,
    title:'ノート1のタイトルです',
    subTitle: 'ノート1のサブタイトルです',
    bodyText: 'ノート1の本文です。ここにノートの内容が入ります。',
  },
  textObject2: {
    id: 2,
    title:'ノート2のタイトルです',
    subTitle: 'ノート2のサブタイトルです',
    bodyText: 'ノート2の本文です。ここにノートの内容が入ります。',
  },
};

/**
 * メモを全件取得する
 * @returns {Object{}} data
 * @returns {number} data.id - 
 * @returns {string} data.title - タイトル
 * @returns {string} data.text - 内容
 */
router.get('/', function(req, res, next) {
  // レスポンスのデータを返す
  res.json(resposeObjectDataAll);
});

module.exports = router;