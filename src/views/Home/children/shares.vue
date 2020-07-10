<template>
  <div>
    股票
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height="1em"
      width="1em"
      viewBox="0 0 40 40"
      class="arrow"
      style="vertical-align: middle;margin : 0px -4px 0px"
    >
      <g class="up" style="#ed1c24">
        <path
          d="m28.6 11q-0.2 0.4-0.7 0.4h-5v27.9q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-27.9h-5q-0.5 0-0.6-0.4t0.1-0.8l7.8-8.6q0.2-0.2 0.5-0.2 0.3 0 0.5 0.2l8 8.6q0.3 0.4 0.1 0.8z"
        />
      </g>
      <g class="down" style="color:#0f990f">
        <path
          d="m28.6 29q0.2 0.4-0.1 0.8l-7.9 8.6q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2l-7.9-8.6q-0.3-0.4-0.1-0.8 0.2-0.4 0.6-0.4h5v-27.9q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v27.9h5q0.5 0 0.7 0.4z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$axios
      .get(
        "https://backend.otcmarkets.com/otcapi/stock/trade/inside/AIXN?symbol=AIXN"
      )
      .then(res => {
        console.log(res.data.symbol);
        console.log(res.data);
      });
  }
};
</script>