//Created by warte kurz, lekai l. richardson


function onCreated() {
  this.name = `Spar controller`;
  this.setImage(`files/images/mmo_bomb.png`);
  this.joined = [];
}

function onPlayerTouchsMe(player) {
  if (!this.joined.includes(player.id)) {
    this.joined.push(player.id);
    player.say(`Player ${player.id} joined | Total: ${this.joined.length}`, 1);
  } else {
    //player left
    this.joined.pop(player.id);
    player.say(`Player ${player.id} left | Total: ${this.joined.length}`, 1);
  }
}
