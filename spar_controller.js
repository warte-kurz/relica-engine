function onCreated() {
  this.playerOneX = this.x + 3;
  this.playerOneY = this.y + 3;
  this.playerTwoX = this.x - 3;
  this.playerTwoY = this.y - 3;

  //name of controller
  this.name = `Spar controller`;

  //image of controller
  this.setImage(`files/images/mmo_bomb.png`);
}

function onUpdated() {
  //onUpdated no one has joined!
  this.joined = [];
}

function onPlayerSays(player, message) {
  switch (message.toLowerCase()) {
    case "join":
      onJoinSpar(player);
      break;
    default:
      break;
  }
}

function onJoinSpar(player) {

  //if player has already joined the queue, remove them
  if (this.joined.includes(player.id)) {
    onLeaveSpar(player);
    return;
  } else if (!this.joined.includes(player.id)) {
    if (this.joined.length == 1) {
      //start spar with only this player
      this.joined.push(player.id);
      onBeginSpar(player);
      return;
    }
    //add player to queue
    this.joined.push(player.id);
    player.say(`I joined the spar! ${this.joined.length} players`, 1);
  }
}

function onLeaveSpar(player) {
  //remove player id from joined array
  this.joined.pop(player.id);
  player.say(`I left the spar! ${this.joined.length} players remaining`, 1);
}

function onBeginSpar(player) {
  const playerOne = Server.getPlayer(1);
  const playerTwo = Server.getPlayer(5);
  this.say(`Player one: ${playerOne.name} and Player two: ${playerTwo.name} Joined Spar`, 1);
  playerTwo.teleport(this.playerTwoX, this.playerTwoY);
  playerOne.teleport(this.playerOneX, this.playerOneY);
  //Server.log(this);
  //Server.broadcast(`players sparring: ${this.joined}`)
  //this.say(`players sparring: ${this.joined}`, 3)
}
