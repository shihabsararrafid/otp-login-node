const express = require("express");
const authController = require("./../../../Controller/authentication.controller");
const router = express.Router();

/**ALL the post route form authentication   */

router.route("/login").post(authController.loginUser);
router.route("/register").post((req, res) => {});
router.route("/authenticateUser").post((req, res) => {});
router.route("/registerMail").post();

/**Get */
router.route("/user").get((req, res) => {});
router.route("/generateOtp").get((req, res) => {});
router.route("/validateOtp").get((req, res) => {});

/**Put */
router.route("/resetPassword").put();
router.route("updateUser").put();

module.exports = router;
