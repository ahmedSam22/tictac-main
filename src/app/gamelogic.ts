import { promise } from 'protractor';
import { status } from './gamestatus';

export class Gamelogic {
    gamefield: Array<number> = [];
    currentturn: number;
    gamestatus: status;
    playerone: string = 'player one ';
    playertwo: string = 'player two ';

    public constructor() {
        this.gamefield = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.gamestatus = status.stop;
    }
    gamestart(): void {
        this.gamestatus = status.start;
        this.gamefield = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.currentturn = this.randomtsart()
    };
    randomtsart(): number {
        const startPlayer = Math.floor(Math.random() * 2) * 1
        return startPlayer + 1
    }

    setfield(position: number, value: number): void {
        this.gamefield[position] = value;
        console.log(this.gamefield)
    }
    getplayercolor(): string {
        const colorclass = (this.currentturn === 1) ? 'playerone' : 'playertwo';
        return colorclass
    }

    changeplayer(): void {

        this.currentturn = (this.currentturn === 1) ? 2 : 1;
    }
    winner() {
        // row 1
        if (document.getElementById('0').classList.contains('playerone') && document.getElementById('1').classList.contains('playerone') && document.getElementById('2').classList.contains('playerone')) {
            alert(this.playerone + " wins");
            this.gameEnd()

        }
        if (document.getElementById('0').classList.contains('playertwo') && document.getElementById('1').classList.contains('playertwo') && document.getElementById('2').classList.contains('playertwo')) {
            alert(this.playerone + " wins");
            this.gameEnd()

        }
        // col 1
        if (document.getElementById('0').classList.contains('playertwo') && document.getElementById('3').classList.contains('playertwo') && document.getElementById('6').classList.contains('playertwo')) {
            alert(this.playertwo + " wins");
            this.gameEnd()

        }
        if (document.getElementById('0').classList.contains('playerone') && document.getElementById('3').classList.contains('playerone') && document.getElementById('6').classList.contains('playerone')) {
            alert(this.playerone + " wins");
            this.gameEnd()

        }
        //row 2
        if (document.getElementById('3').classList.contains('playerone') && document.getElementById('4').classList.contains('playerone') && document.getElementById('5').classList.contains('playerone')) {
            alert(this.playerone + " wins");
            this.gameEnd()

        } if (document.getElementById('3').classList.contains('playertwo') && document.getElementById('4').classList.contains('playertwo') && document.getElementById('5').classList.contains('playertwo')) {
            alert(this.playertwo + " wins");
            this.gameEnd()

        }
        //col 2  
        if (document.getElementById('1').classList.contains('playertwo') && document.getElementById('4').classList.contains('playertwo') && document.getElementById('7').classList.contains('playertwo')) {
            alert(this.playertwo + " wins");
            this.gameEnd()

        }
        if (document.getElementById('1').classList.contains('playerone') && document.getElementById('4').classList.contains('playerone') && document.getElementById('7').classList.contains('playerone')) {
            alert(this.playerone + " wins");
            this.gameEnd()

        }
        //row 3

        if (document.getElementById('6').classList.contains('playerone') && document.getElementById('7').classList.contains('playerone') && document.getElementById('8').classList.contains('playerone')) {
            alert(this.playerone + " wins");
            this.gameEnd()

        }

        if (document.getElementById('6').classList.contains('playertwo') && document.getElementById('7').classList.contains('playertwo') && document.getElementById('8').classList.contains('playertwo')) {
            alert(this.playertwo + " wins");
            this.gameEnd()

        }
        //col 3
        if (document.getElementById('2').classList.contains('playertwo') && document.getElementById('5').classList.contains('playertwo') && document.getElementById('8').classList.contains('playertwo')) {
            alert(this.playertwo + " wins");
            this.gameEnd()

        }
        if (document.getElementById('2').classList.contains('playerone') && document.getElementById('5').classList.contains('playerone') && document.getElementById('8').classList.contains('playerone')) {
            alert(this.playerone + "wins");
            this.gameEnd()

        }
        //curve 1
        if (document.getElementById('0').classList.contains('playerone') && document.getElementById('4').classList.contains('playerone') && document.getElementById('8').classList.contains('playerone')) {
            alert(this.playerone + "wins");
            this.gameEnd()

        }
        if (document.getElementById('0').classList.contains('playertwo') && document.getElementById('4').classList.contains('playertwo') && document.getElementById('8').classList.contains('playertwo')) {
            alert(this.playertwo + "wins");
            this.gameEnd()

        }
        //curve 2

        if (document.getElementById('2').classList.contains('playerone') && document.getElementById('4').classList.contains('playerone') && document.getElementById('6').classList.contains('playerone')) {
            alert(this.playerone + "wins");
            this.gameEnd()

        }
        if (document.getElementById('2').classList.contains('playertwo') && document.getElementById('4').classList.contains('playertwo') && document.getElementById('6').classList.contains('playertwo')) {
            alert(this.playertwo + "wins");
            this.gameEnd()

        }

        if (document.getElementById('1').classList.contains('playerone' || 'playertwo') && document.getElementById('2').classList.contains('playerone' || 'playertwo') && document.getElementById('3').classList.contains('playerone' || 'playertwo') && document.getElementById('4').classList.contains('playerone' || 'playertwo') && document.getElementById('5').classList.contains('playerone' || 'playertwo') && document.getElementById('6').classList.contains('playerone' || 'playertwo') && document.getElementById('7').classList.contains('playerone' || 'playertwo') && document.getElementById('8').classList.contains('playerone' || 'playertwo') && document.getElementById('0').classList.contains('playerone' || 'playertwo')) {
            alert('game draw');
            this.gameEnd()
        }
    }
 async draworend() {
   let isFull = true;
    if(this.gamefield.includes(0)){
        return false
    }
if (isFull){
    console.log("'it's over");
    alert('game is draw')
    this.gameEnd();
    return true
} else {
    return false
}
}
gameEnd(){
    return this.gamestatus = status.stop
}
}

