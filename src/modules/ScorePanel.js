class ScorePannel {
    constructor(maxLevel = 10, upScore = 10) {
        this.score = 0;
        this.level = 1;
        this.scoreElement = document.getElementById('score');
        this.levelElement = document.getElementById('level');
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    addScore() {
        this.scoreElement.innerHTML = ++this.score + '';
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelElement.innerHTML = ++this.level + '';
        }
    }
}
export default ScorePannel;
