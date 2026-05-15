const { Router } = require("express");

const authMiddleware =
  require("../middlewares/auth.middleware");

const {
  createTrail,
  updateTrail,
  deleteTrail,
} = require("../controllers/trail.controller");

const router = Router();

/* PRIVATE */
router.use(authMiddleware);

router.post("/:id", createTrail);

router.put("/:id", updateTrail);

router.delete("/:id", deleteTrail);

module.exports = router;