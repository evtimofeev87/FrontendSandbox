<template lang="pug">
.root
  p {{ person.firstName }}
  p {{ person.lastName }}
  p {{ person.age }}
  p {{ fullName }}
</template>

<script setup lang="ts">
import type { Person } from 'src/models/mainModels';
import { computed } from 'vue';

interface Props { person: Person }
const props = defineProps<Props>();
const fullName = computed<string>(() => `${props.person.firstName} ${props.person.lastName}`);
</script>

<style scoped>

</style>
