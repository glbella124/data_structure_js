const getRandomColor = function () {
    let rgb = [];
  
    for (let i = 0; i < 2; ++i) {
      let color = Math.floor(Math.random() * 256);
  
    //   color = color.length == 1 ? "0" + color : color;
  
      rgb.push(color);
    }
  
    return `rgb(${rgb[0]},${rgb[1]},1)`;
  };

  let a = getRandomColor()
  console.log(a);