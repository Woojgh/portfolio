// $('#i3d').interactive3d({
//    frames: 1,
  // cursor: 'move',
  // speed: 0,
  // entrance: true,
  // preloadImages: true,
  // touchSupport: true,
  // loading: 'Loading..',
  // autoPlay: false
//   });

$(document).ready(function() {
  $("#i3d").interactive_3d({
  frames: 1,
  cursor: 'move',
  speed: 0,
  entrance: true,
  preloadImages: true,
  touchSupport: true,
  loading: 'Loading..',
  autoPlay: false
  });
});
