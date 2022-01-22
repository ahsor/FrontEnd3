const abs = function(number){
    if (0 < number) {
      return number;
    } else {
      return -number;
    }
  };
const circleArea = (radius)=>{
    return radius * radius * Math.PI;
  };


module.exports = { abs, circleArea};
  