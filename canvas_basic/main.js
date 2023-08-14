function draw() {
  const canvas = document.getElementById("basic");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgb(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
  }
}

draw();
