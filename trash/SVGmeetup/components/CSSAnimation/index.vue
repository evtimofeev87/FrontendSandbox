

<script>
export default {
    name: 'css-animation'
}
</script>

<style>
      @keyframes rotating {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      #segment {
        transform-origin: 18px 18px;
        will-change: transform;
        animation: rotating 1s linear infinite;
      }

      .svg-wrapper-css {
        width: 60px;
        height: 60px;
        background-color: #3498db;
        display: flex;
        justify-content: center;
        align-items: center;
      }
</style>

<template>
      <div class="svg-wrapper-css">
      <svg
        width="50"
        height="50"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#fff"
      >
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".1" cx="18" cy="18" r="18" />
            <path id="segment" d="M36 18c0-9.94-8.06-18-18-18">
            </path>
          </g>
        </g>
      </svg>
    </div>
</template>