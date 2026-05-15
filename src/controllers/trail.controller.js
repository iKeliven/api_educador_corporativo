const prisma = require("../config/prisma");

async function createTrail(req, res) {
  const { id } = req.params;

  const {
    title,
    description,
    workload,
    link,
    order,
  } = req.body;

  const trail = await prisma.trail.create({
    data: {
      title,
      description,
      workload,
      link,
      order: Number(order),

      journeyId: id,
    },
  });

  return res.status(201).json(trail);
}

async function updateTrail(req, res) {
  const { id } = req.params;

  const {
    title,
    description,
    workload,
    link,
    order,
  } = req.body;

  const trail = await prisma.trail.update({
    where: {
      id,
    },

    data: {
      title,
      description,
      workload,
      link,
      order: Number(order),
    },
  });

  return res.json(trail);
}

async function deleteTrail(req, res) {
  const { id } = req.params;

  await prisma.trail.delete({
    where: {
      id,
    },
  });

  return res.status(204).send();
}

module.exports = {
  createTrail,
  updateTrail,
  deleteTrail,
};