const express=require("express")
const authRoutes = require("./routes/authroutes");
const profileRoute = require("./routes/profileroutes");
const productRoutes= require("./routes/productroutes");
const cookieParser = require("cookie-parser");
const cartRoute = require("./routes/cartroutes")
const wishlistRoutes = require("./routes/wishlistroutes");
const addressRoutes = require("./routes/addressroutes");

const app=express()
app.use(cookieParser());

app.use(express.json());
app.get("/",function(req,res){
    res.send("Seemz fashion")
})
app.use("/api/profile",profileRoute);
app.use("/api/auth", authRoutes);
app.use("/api/product",productRoutes);
app.use("/api/cart",cartRoute);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/address", addressRoutes);

module.exports=app