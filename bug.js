class Bug {
  constructor(tempx, tempy, tempw1) {
    this.x = tempx;
    this.y = tempy;
    this.w1 = tempw1;
  }

  display() {
    ellipse(this.x, this.y, this.w1, this.w1);
  }


}
