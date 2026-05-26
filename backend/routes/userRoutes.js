const router = require("express").Router();
const { register, login } = require("../controllers/userController");

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password",(req,res)=>{

res.json({
message:"Reset link sent successfully"
});

});

module.exports = router;