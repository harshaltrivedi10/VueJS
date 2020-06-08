new Vue({
  el: '#app',
  data() {
    return {
      showStartNewGame: true,
      showGameDetails: false,
      myHealthBar: 80,
      monsterHealthBar: 80,
      damageToMe: 0,
      damageToMonster: 0,
      damageToMeDetails: '',
      damageToMonsterDetails: '',
      healingPoints: 0,
      moves: []
    };
  },
  methods: {
    toggleStartNewGame() {
      console.log(this.showStartNewGame);
      this.showStartNewGame = !this.showStartNewGame;
      this.myHealthBar = 100;
      this.monsterHealthBar = 100;
    },
    clickAttack() {
      this.showGameDetails = true;
      this.damageToMe = Math.ceil(Math.random() * 3);
      this.damageToMonster = Math.floor(Math.random() * 10);
      this.damageToMeDetails =
        'Due to Attack, I lost ' + this.damageToMe + ' health points';
      this.damageToMonsterDetails =
        'Due to Attack, the Monster lost ' +
        this.damageToMonster +
        ' health points';
      this.moves.push({
        me: this.damageToMeDetails,
        monster: this.damageToMonsterDetails
      });
      this.myHealthBar -= this.damageToMe;
      this.monsterHealthBar -= this.damageToMonster;
      if (this.monsterHealthBar < 10) {
        if (confirm('You win')) {
          window.location.reload();
        }
      }
    },
    clickSpecialAttack() {
      this.damageToMe = Math.ceil(Math.random() * 5);
      this.damageToMonster = Math.floor(Math.random() * 15);
      this.damageToMeDetails =
        'Due to the Special Attack, I lost ' +
        this.damageToMe +
        ' health points';
      this.damageToMonsterDetails =
        'Due to the Special Attack, the Monster lost ' +
        this.damageToMonster +
        ' health points';
      this.moves.push({
        me: this.damageToMeDetails,
        monster: this.damageToMonsterDetails
      });
      this.myHealthBar -= this.damageToMe;
      this.monsterHealthBar -= this.damageToMonster;
      if (this.monsterHealthBar < 10) {
        if (confirm('You win')) {
          window.location.reload();
        }
      }
    },
    clickHeal() {
      this.healingPoints = Math.ceil(Math.random() * 5);
      if (this.damageToMe + this.healingPoints <= 100) {
        this.damageToMe += this.healingPoints;
      } else {
        this.damageToMe = 100;
      }
      this.damageToMeDetails =
        'Due to healing, I gained ' + this.healingPoints + ' health points!';
      this.moves.push({ me: this.damageToMeDetails });
    },
    clickGiveUp() {
      this.showStartNewGame = !this.showStartNewGame;
      this.myHealthBar = 80;
      this.monsterHealthBar = 80;
      this.moves = [];
      this.showGameDetails = !this.showGameDetails;
    }
  }
});
