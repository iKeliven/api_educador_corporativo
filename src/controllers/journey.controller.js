const prisma = require("../config/prisma");

async function listJourneys(req, res) {
  const journeys = await prisma.journey.findMany({
    include: {
      trails: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.json(journeys);
}

async function createJourney(req, res) {
  const { company, title, slug, description } = req.body;

  const journey = await prisma.journey.create({
    data: {
      company,
      title,
      slug,
      description,
    },
  });

  return res.status(201).json(journey);
}

async function getJourneyById(req, res) {
  const { id } = req.params;

  const journey = await prisma.journey.findUnique({
    where: { id },
    include: {
      trails: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  if (!journey) {
    return res.status(404).json({
      message: "Jornada não encontrada",
    });
  }

  return res.json(journey);
}

async function getJourneyBySlug(req, res) {
  const { slug } = req.params;

  const journey = await prisma.journey.findUnique({
    where: { slug },
    include: {
      trails: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  if (!journey) {
    return res.status(404).json({
      message: "Jornada não encontrada",
    });
  }

  return res.json(journey);
}

async function updateJourney(req, res) {
  const { id } = req.params;
  const { company, title, slug, description } = req.body;

  const journey = await prisma.journey.update({
    where: { id },
    data: {
      company,
      title,
      slug,
      description,
    },
  });

  return res.json(journey);
}

async function deleteJourney(req, res) {
  const { id } = req.params;

  await prisma.journey.delete({
    where: { id },
  });

  return res.status(204).send();
}

module.exports = {
  listJourneys,
  createJourney,
  getJourneyById,
  getJourneyBySlug,
  updateJourney,
  deleteJourney,
};