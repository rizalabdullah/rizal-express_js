const express = require("express");
const app = express();
const path = require("path");
const productRouter = require("./app/product/routes");
const productRouterV2 = require("./app/product_v2/routes");
const logger = require("morgan");
const cors = require("cors")
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use(logger(`dev`));
app.use("/api/v1", productRouter);
//app.use("/", productRouter);
app.use("/api/v2", productRouterV2);

app.use((req,res,next) => {
    res.json({
        status: "failed",
        message: `Resource ` + req.originalUrl + ` not found`
    });
});

app.listen(port, () => console.log(`server ${port}`));