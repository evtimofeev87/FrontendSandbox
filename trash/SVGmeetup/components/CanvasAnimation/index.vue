<script>
export default {
  name: "canvas-animation",
  data() {
    return {
      id: "canvas" + this._uid,
    };
  },
  mounted() {
    let time = 0;

    let canvas = document.getElementById(this.id);
    let context = canvas.getContext("2d");
    if (!context) {
      return;
    }
    let width = 60;
    let height = 60;

    let draw = (timestamp) => {
      context.fillStyle = "#3498db";
      context.fillRect(0, 0, width, height);

      context.beginPath();
      context.strokeStyle = "rgba(255,255,255,0.2)";
      context.lineWidth = 3;
      context.arc(30, 30, 24, 0, 2 * Math.PI);
      context.stroke();

      time = time + 0.08;

      context.beginPath();
      context.strokeStyle = "white";
      context.lineWidth = 3;
      context.arc(30, 30, 24, 0 + time, 0.5 * Math.PI + time);
      context.stroke();

      setTimeout(draw, 10);
    };

    draw();
  },
};
</script>

<style></style>

<template>
  <canvas :id="id" width="60" height="60"></canvas>
</template>
