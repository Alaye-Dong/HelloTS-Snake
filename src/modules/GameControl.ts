import Snake from "./Snake";
import Food from "./Food";
import ScorePannel from "./ScorePanel";

class GameControl {
    snake: Snake;
    food: Food;
    scorePannel: ScorePannel;

    direction: string = '';
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePannel = new ScorePannel();
        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key;
    }

    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case 'ArrowLeft':
                X -= 10;
                break;
            case 'ArrowRight':
                X += 10;
                break;
            case 'ArrowUp':
                Y -= 10;
                break;
            case 'ArrowDown':
                Y += 10;
                break;
        }

        this.cheakEat();

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e: any) {
            alert(e.message + '游戏结束');
            this.isLive = false;
        }
        
        this.isLive && setTimeout((this.run.bind(this)), 300 - (this.scorePannel.level - 1) * 30);
    }

    cheakEat() {
        if (this.snake.X === this.food.X && this.snake.Y === this.food.Y) {
            this.food.change();
            this.scorePannel.addScore();
            this.snake.addBody();
        }
    }
}

export default GameControl;