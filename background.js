const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

(function () {
  if (!params.party) {
    return;
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style = "width: 100%; height: 100%; position: absolute; z-index: -1";
  canvas.width = 32;
  canvas.height = 32;
  document.body.prepend(canvas);

  const getRed = (x, y, d) => Math.floor(150 + 64 * Math.cos((x * x - y * y) / 300 + d));
  const getGreen = (x, y, d) => Math.floor(50 + 64 * Math.sin((x * x * Math.cos(d / 4) + y * y * Math.sin(d / 3)) / 300));
  const getBlue = (x, y, d) => Math.floor(192 + 64 * Math.sin(5 * Math.sin(d / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));

  let delta = 0;
  (function frame() {
    Array.from({ length: canvas.width }, (_, x) => {
      Array.from({ length: canvas.width }, (_, y) => {
        const red = getRed(x, y, delta);
        const green = getGreen(x, y, delta);
        const blue = getBlue(x, y, delta);

        ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
        ctx.fillRect(x, y, 1, 1);
      })
    })

    delta += 0.05;
    window.requestAnimationFrame(frame);
  })();
})();
