const express = require('express');

const router = express.Router();

// GET http://localhost:3000/api/v1/
router.get('/',function(req,res){
    res.json({
        "posts": [
          {
            "id": 1,
            "title": "json-server",
            "author": "typicode"
          }
        ],
        "comments": [
          {
            "id": 1,
            "body": "some comment",
            "postId": 1
          }
        ],
        "profile": {
          "name": "typicode"
        },
        "users": {
          "b1018001": {
            "number": "b1018001",
            "name": "テスト太郎"
          },
          "b1018002": {
            "number": "b1018002",
            "name": "佐藤太郎"
          }
        },
        "works": {
          "b1018001": {
            "number": "b1018001",
            "uploads": {
              "20191104": {
                "work_title": "react todoアプリ画面",
                "file_url": "ここにstorageに保存した際に生成されるurlの文字列が入る",
                "description": "reactでtodoアプリ作ってみました! ここレビューして欲しいです!"
              },
              "20191205": {
                "work_title": "typescript clean architecture",
                "file_url": "https://firebasestorage.googleapis.com/v0/b/takashi-s-works-uploads.appspot.com/o/images%2Fface.jpg?alt=media&token=8247b8f6-7239-4285-932f-04f03284ce7d",
                "description": "〜をレビューして欲しいです"
              },
              "20191015131255": {
                "work_title": "ggslkfgsdf",
                "file_url": "file_url",
                "description": "kkdfsfddfg"
              },
              "2019101815025": {
                "work_title": "タイトル",
                "file_url": "https://pbs.twimg.com/media/D9Bx40QUEAcIKVf?format=jpg&name=4096x4096",
                "description": "コメント"
              },
              "201910181568": {
                "work_title": "タイトル２",
                "file_url": "file_url",
                "description": "コメントだよー"
              },
              "20191018154222": {
                "work_title": "ｄｆｓｇｓｄｆ",
                "file_url": "https://i.pximg.net/img-master/img/2018/05/04/17/10/17/68571067_p0_master1200.jpg",
                "description": "ｚｄｆｇｓ"
              },
              "2019101815596": {
                "work_title": "hoho",
                "file_url": "https://firebasestorage.googleapis.com/v0/b/takashi-s-works-uploads.appspot.com/o/images%2FThe%20Girl%20of%20the%20nightjpg.jpg?alt=media&amp;token=4655abd4-94bb-414e-9c01-3f8be485b283",
                "description": "hihih"
              }
            }
          }
        }
      });
});

module.exports = router;
/*
1.各ログインしているユーザーの情報
2.みんなの作品を表示するための情報
---新着順、古い順など

*/