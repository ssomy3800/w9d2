class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard(); //without "this" receiver, it wont work, why!?!!?!?
    this.handleClick();
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
      ul.append(listItem);
    }
    // ul.innerHTML = arr;
    this.el.append(ul);
    console.log("hi Carvey");
  }

  handleClick(e) {}

  makeMove(square) {}

  handleGameOver() {}
}

export default View;
