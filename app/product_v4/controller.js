const { ObjectId } = require("mongodb");
const Product = require(`./model`);
const path = require(`path`);
const fs = require(`fs`);
const port = process.env.PORT || 3000;

const index = (req,res) => {
    Product.find()
    .then(result => res.send(result))
    .catch(error => res.send(error));
}

const view = (req,res) => {
    const {id} = req.params;    
      Product.findOne({id})
      .then(result => res.send(result))
      .catch(error => res.send(error));
  }

const store = (req, res) => {
    const {name, price, stock, status}  = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname, "../../uploads", image.originalname);
        fs.renameSync(image.path, target);
        Product.create({name, price, stock, status, image_url : `http://localhost:${port}/public/${image.originalname}`})
        .then(result => res.send(result))
        .catch(error => res.send(error));
    }
}

const update = (req, res) => {
    const {name, price, stock, status}  = req.body;
    const image = req.file;
    const {id} = req.params;
    if(image){
        const target = path.join(__dirname, "../../uploads", image.originalname);
        fs.renameSync(image.path, target);
        Product.updateOne({name, price, stock, status, image_url : `http://localhost:${port}/public/${image.originalname}`, id })
        .then(result => res.send(result))
        .catch(error => res.send(error));
    }
}

const destroy = (req,res) => {
    const {id} = req.params;    
      Product.deleteOne({id})
      .then(result => res.send(result))
      .catch(error => res.send(error));
  }

module.exports = {
    index,
    view, 
    store,
    update,
    destroy

}