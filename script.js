const myTags = [
    'Firemný branding',
    'Logo dizajn',
    'Vizitky',
    'Printová grafika',
    'Billboardy',
    'Package dizajn',
    'Social media dizajn',
    'Polepy',
];

var tagCloud = TagCloud('.content', myTags,{

  // radius in px
  radius: 350,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

//To change the color of text randomly
var colors = ['#FFD800'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;