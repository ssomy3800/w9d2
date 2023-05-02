class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard(); //without "this" receiver, it wont work, why!?!!?!?
  }
  setupBoard() {
    let ul = document.createElement("ul");
    let arr = [];
    for (let i = 0; i < 9; i++) {
      let x = Math.floor(i / 3);
      let y = i % 3;
      let listItem = document.createElement("li");
      // listItem.dataset.pos = `[${x},${y}]`;
      listItem.dataset.pos = [x,y];
      arr.push(listItem);
      ul.append(listItem);
    }
    // ul.innerHTML = arr;
    this.el.append(ul);
    console.log("hi Carvey");
  }

  handleClick(e) {
    let cell = e.target;
    this.makeMove(cell);
    // let pos = cell.dataset.pos;
    // let posArr = 

    // console.log(typeof pos);
    // this.game.playMove(pos);
  }

  makeMove(square) {
    let pos = square.dataset.pos;
    let posArr = pos.split(",").map(char => parseInt(char.trim()));
    // console.log(posArr instanceof Array);
    this.game.playMove(posArr);
    square.classList.add(this.game.currentPlayer);
    
    // console.log(typeof pos);
    // let posArr = pos

  }

  handleGameOver() {}
}

export default View;
