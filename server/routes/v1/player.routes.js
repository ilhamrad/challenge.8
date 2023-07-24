const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();

/**
 * @Routes "/api/v1/players"
 */

playerRouter.get("/players", PlayerController.getPlayers);
playerRouter.post("/players", PlayerController.createPlayer);
playerRouter.get("/players/:id", PlayerController.getPlayerById);
playerRouter.put("/players/:id", PlayerController.updatePlayer);
playerRouter.delete("/players/:id", PlayerController.deletePlayer);
playerRouter.post("/exp/:id", PlayerController.updateExperience);

module.exports = playerRouter;
