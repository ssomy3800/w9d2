class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }
  setupBoard() {
    let ul = document.createElement("ul");
    let arr = [];
    for (let i = 0; i < 9; i++) {
      let x = Math.floor(i / 3);
      let y = i % 3;
      let listItem = document.createElement("li");
      listItem.dataset.pos = `[${x},${y}]`;
      arr.push(listItem);
    }
    ul.innerHTML = arr;
    el.append(ul);
  }

  handleClick(e) {}

  makeMove(square) {}

  handleGameOver() {}
}

export default View;
