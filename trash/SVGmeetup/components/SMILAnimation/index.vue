

<script>
export default {
    name: 'smil-animation'
}
</script>

<style>

      #segment0 {
        will-change: transform;
      }

      .svg-wrapper-smil {
        width: 60px;
        height: 60px;
        background-color: #3498db;
        display: flex;
        justify-content: center;
        align-items: center;
      }
</style>

<template>
      <div class="svg-wrapper-smil">
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
            <path id="segment0" d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
</template>