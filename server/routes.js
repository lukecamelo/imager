const express = require('express')
const multer = require('multer')
const router = express.Router()
const Image = require('./models/Image')
const fs = require('fs')
const path = require('path')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './storage')
  },
  filename: function (req, file, cb) {
    let fileName = req.body.imageName
    cb(null, fileName + '-' + Date.now() + '.png')
  }
});

const upload = multer({ storage, limits: {fieldSize: 25 * 1024 * 1024} }).single('file');

const storagePath = path.join(__dirname, '/storage')


const readDirectory = (path, cb) => {
  let images = []
  fs.readdir(path, function(err, items) {
    images.push(items);
    cb(images);       
 }); 
}

const getImages = (req, res) => {
  readDirectory(storagePath, (images) => {
    console.log("getImages: ", images[0])
    res.json({ files: images[0] });
});
}

const deleteImage = (req, res) => {
  console.log(req.body.fileName)
  readDirectory(storagePath, images => {
    let file = images[0].filter(img => img === req.body.fileName)
    fs.unlink(`${storagePath}/${file}`, err => {
      if (err) console.log("error deleting file: ", err)
    })
  })
}

router.post('/upload', upload, (req, res) => {
  console.log(req.file)
  res.send({ fileData: req.file })
})

router.route('/images').get(getImages)
router.route('/delete').post(deleteImage)

module.exports = router
