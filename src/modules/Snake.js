class Snake {
    constructor() {
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake > div');
        this.bodies = this.element.getElementsByTagName('div');
    }
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(value) {
        if (this.X === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了');
        }
        if (this.bodies[1] && this.bodies[1].offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10;
            }
            else {
                value = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.cheakHeat();
    }
    set Y(value) {
        if (this.Y === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了');
        }
        if (this.bodies[1] && this.bodies[1].offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            }
            else {
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.cheakHeat();
    }
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            const X = this.bodies[i - 1].offsetLeft;
            const Y = this.bodies[i - 1].offsetTop;
            this.bodies[i].style.left = X + 'px';
            this.bodies[i].style.top = Y + 'px';
        }
    }
    cheakHeat() {
        for (let i = 1; i < this.bodies.length; i++) {
            const bd = this.bodies[i];
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己了');
            }
        }
    }
}
export default Snake;
