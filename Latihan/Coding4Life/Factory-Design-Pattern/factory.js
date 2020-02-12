class BallFactory {
  constructor() {
    this.createBall = function(type) {
      let ball;
      if (type === 'football' || type === 'soccer') ball = new Football();
      else if (type === 'basketball') ball = new Basketball();
      ball.roll = function() {
        return `The ${this.type} is rolling`;
      }
      
      return ball;
    }
  }
}

class Football {
  constructor() {
    this.type = 'football';
    this.kick = function() {
      return `You kicked the ${this.type}`
    }
  }
}

class Basketball {
  constructor() {
    this.type = 'basketball';
    this.bounce = function() {
      return `You kicked the ${this.type}`
    }
  }
}

const factory = new BallFactory()

const myFootball = factory.createBall('football')
const myBasketball = factory.createBall('basketball')

console.log(myFootball.roll())     //The football is rolling
console.log(myBasketball.roll())   //The basketball is rolling
console.log(myFootball.kick())     //You kicked the football
console.log(myBasketball.bounce()) //You bounced the basketball
