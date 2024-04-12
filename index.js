class Color {
    constructor(name, code) {
      this.name = name;
      this.code = code;
    }
  }

  const allColors = [
    new Color('IndianRed', '#CD5C5C'),
    new Color('LightCoral', '#F08080'),
    new Color('Salmon', '#FA8072'),
    new Color('Crimson', '#DC143C'),
    new Color('FireBrick', '#B22222'),
    new Color('DarkRed', '#8B0000'),
  ];

  exports.getRandomColor = () => {
    return allColors[Math.floor(Math.random() * allColors.length)];
  }
  
  exports.allColors = allColors;