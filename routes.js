const router = require("express").Router();

router.get("/", (req, res) => {
    res.send(`Express JS <br> <ul> <li> <a href="/product">Product </a> </li> </ul>`
    );

});

router.get("/product", (req, res) => {
    res.send({
        status: "successfully",
        message: "welcome to Express JS tutorial",
        product: "makanan"
    });

});

router.get("/product/:id", (req, res) => {
    res.send({
        id: req.params.id
    });
});

router.get("/:category/:tag", (req, res) => {
    const {category, tag} = req.params;
    res.json({category, tag})
});




module.exports = router;