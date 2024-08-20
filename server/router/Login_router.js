const { Router } = require("express");
const { getLogin, saveLogin } = require("../controllers/Login_controllers");

const router = Router();

router.get("/get", getLogin);
router.post("/save", saveLogin);

module.exports = router;
