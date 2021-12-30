// zdog-demo.js

// create illo
let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 4,
  // enable rotating scene with dragging
  dragRotate: true,
});

// add circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  stroke: 20,
  color: '#636',
});

// update & render
illo.updateRenderGraph();