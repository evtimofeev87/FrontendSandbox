<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { EvtlibSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  EvtlibSample,
  // }
});
</script>

<template>
  <div id="app">
    <evtlib-sample />
    <my-text text="test, test" />
  </div>
</template>
