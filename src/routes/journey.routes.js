const { Router } = require("express");

const authMiddleware =
  require("../middlewares/auth.middleware");

const {
  listJourneys,
  createJourney,
  getJourneyById,
  getJourneyBySlug,
  updateJourney,
  deleteJourney,
} = require("../controllers/journey.controller");

const router = Router();

/* PUBLIC */
router.get("/public/:slug", getJourneyBySlug);

/* PRIVATE */
router.use(authMiddleware);

router.get("/", listJourneys);

router.post("/", createJourney);

router.get("/:id", getJourneyById);

router.put("/:id", updateJourney);

router.delete("/:id", deleteJourney);

module.exports = router;