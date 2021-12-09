import { Gamelogic } from './../../gamelogic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [Gamelogic]
})
export class GameComponent implements OnInit {

  constructor(public game: Gamelogic) { }

  ngOnInit(): void {

  }
  newgame() {
    this.game.gamestart();
    const currentplayer = 'current player turn : ' + this.game.currentturn;
    const information = document.querySelector('.currentstatus');
    information.innerHTML = currentplayer;

  }
  async clicksubfield(subfield: any): Promise<void> {
    if (this.game.gamestatus === 1) {
      const position = subfield.currentTarget.getAttribute('position');
      const information = document.querySelector('.currentstatus');

      console.log(position)

      this.game.setfield(position, this.game.currentturn);
      const color = this.game.getplayercolor();
      subfield.currentTarget.classList.add(color);
      this.game.changeplayer();
      this.game.winner()
      this.game.draworend()

      if (this.game.gamestatus === 1) {
        const playernumber = 'current player turn : ' + this.game.currentturn;
        information.innerHTML = playernumber

      }

    }


  }
  reset(){
this.game.gameEnd()  }
}
