function getRandonValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 150,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = getRandonValue(5, 12);
      this.monsterHealth -= attackValue;
    },
    attackPlayer() {
      const attackValue = getRandonValue(8, 15);
      this.playerHealth -= attackValue;
    },
  },
});

app.mount('#game');
