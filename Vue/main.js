Vue.component('person', {
  props: ['firstName', 'secondName', 'salaryAmount'],
  computed: {
    fullName() {
      return `${this.firstName} ${this.secondName} `;
    },
  },
  methods: {
    deleteThisPerson() {
      this.$emit('delete-this-person', {
        firstName: this.firstName,
        secondName: this.secondName,
      });
    },
  },
  template:
    '<p>{{fullName}} <salary :salaryAmount="salaryAmount"></salary> <span @click="deleteThisPerson">delete</span></p>',
});

Vue.component('salary', {
  props: ['salaryAmount'],
  computed: {
    fullSalary() {
      return `${this.salaryAmount} $`;
    },
  },
  template: '<span>{{fullSalary}}</span>',
});

var app = new Vue({
  el: '#app',
  data: {
    product: 'tank',
    description: 'A pair of warm, fuzzy socks',
    input: '',
    onSale: false,
    goods: ['iron', 'gold', 'silver', 'wood'],
    count: 0,
    squareClasses: ['green', 'square'],
    persons: [
      { firstName: 'John', secondName: 'Joe', salaryAmount: 100000 },
      { firstName: 'Anna', secondName: 'Sedakova', salaryAmount: 200000 },
    ],
  },
  methods: {
    increment() {
      this.count++;
    },
    deletePerson(dp) {
      this.persons = this.persons.filter(
        (p) => !(p.firstName === dp.firstName && p.secondName === dp.secondName)
      );
    },
  },
  computed: {
    isOnSale() {
      return this.onSale ? 'in is on Sale' : 'it is NOT on sale';
    },
  },
});
