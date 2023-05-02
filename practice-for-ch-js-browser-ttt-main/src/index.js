// Add your import statements for View and Game here
import View from "./ttt-view.js";
import Game from "../ttt_node/game.js";

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const game = new Game();
  const gameContainer = document.querySelector(".ttt");
  const view = new View(game, gameContainer);
});
