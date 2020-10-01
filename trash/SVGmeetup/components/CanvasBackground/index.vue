<script>
export default {
  name: "canvas-background",
  props: {
    count: Number,
  },
  data() {
    return {
      id: "canvasBackground" + this._uid,
    };
  },
  mounted() {
    let time = 0;
    let canvas = document.getElementById(this.id);
    let context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    // let rect = canvas.parentNode.getBoundingClientRect();
    // canvas.width = rect.width - 5;
    // canvas.height = rect.height - 5;

    let draw = (timestamp) => {
      let rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width - 5;
      canvas.height = rect.height - 5;

      context.fillStyle = "#3498db";
      context.fillRect(0, 0, rect.width, rect.height);

      let currentX = 30;
      let currentY = 30;

      for (let i = 0; i <= this.count; i++) {
        context.beginPath();
        context.strokeStyle = "rgba(255,255,255,0.2)";
        context.lineWidth = 3;
        context.arc(currentX, currentY, 24, 0, 2 * Math.PI);
        context.stroke();

        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = 3;
        context.arc(currentX, currentY, 24, 0 + time, 0.5 * Math.PI + time);
        context.stroke();

        currentX = currentX + 60;
        if (currentX > canvas.width) {
          currentX = 30;
          currentY = currentY + 60;
        }
      }
      time = time + 0.08;
      setTimeout(draw, 10);
    };

    draw();
  },
};
</script>

<style></style>

<template>
  <canvas :id="id"></canvas>
</template>
