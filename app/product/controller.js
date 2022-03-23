const connection = require("../../config/mysql");
const path = require("path");
const fs = require("fs");
const port = process.env.PORT || 3000;

const index = ((req, res) => {
    const {search} = req.query;
    let exac = {};
    if(search){
        exac = {
            sql : "SELECT * FROM product where name LIKE ?",
            values : [`%${search}%`] 
        }
    }
    else{
        exac = {
            sql : "SELECT * FROM product",            
        }      
    }
    connection.query( exac, _response(res));
});

const view = ((req, res) => {
    connection.query({
        sql : "SELECT * FROM product where id = ? ",
        values : [req.params.id]
    }, _response(res));
})

const store = ((req, res) => {
    const {id_user,name, price, stock, status}  = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname, "../../uploads", image.originalname);
        fs.renameSync(image.path, target);
    connection.query({
        sql : "INSERT INTO product (id_user,name, price,stock, status, image_url) values (?, ?, ?, ?, ?, ?) ",
        values : [ parseInt(id_user), name, price, stock, status,  `http://localhost:${port}/public/${image.originalname}`]
    }, _response(res));
    }   
})

const update = ((req, res) => {
    const {id_user,name, price, stock, status}  = req.body;
    const image = req.file;
    let sql = ``;
    let values = []
    if(image){
        const target = path.join(__dirname, "../../uploads", image.originalname);
        fs.renameSync(image.path, target);
        sql = "UPDATE product SET id_user = ?, name = ?, price = ?, stock = ?, status = ?, image_url = ? where id = ?";
        values = [ parseInt(id_user), name, price, stock, status,  `http://localhost:${port}/public/${image.originalname}`, req.params.id]

    } 
    else{
        sql = "UPDATE product SET id_user = ?, name = ?, price = ?, stock = ?, status = ? where id = ?";
        values =[ parseInt(id_user), name, price, stock, status, req.params.id]
    }  
    connection.query({sql, values}, _response(res));
})

const destroy = ((req, res) => {
    connection.query({
        sql : "DELETE FROM product where id = ? ",
        values : [req.params.id]
    }, _response(res));
})


const _response = (res) => {
    return (error, result) => {
        if(error){
            res.send({
                status: "failed",
                response: error
            });    
        }
        else{
            res.send({
                status: "success",
                response: result
            });   
        }
      };
}

module.exports = {
    index,
    view, 
    store,
    update,
    destroy
    

}