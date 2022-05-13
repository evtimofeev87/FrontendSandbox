<template lang="pug">
q-page.row.items-center.justify-evenly
  PersonView(v-for="person in persons" :person="person")
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PersonView from 'components/PersonView.vue';
import type { Person } from 'src/models/mainModels';

const persons = ref<Person[]>([
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 35
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 28
  },
  {
    firstName: 'Ivan',
    lastName: 'Sidorov',
    age: 21
  }
])
</script>
