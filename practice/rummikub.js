const PLATE_COLORS = {
    RED: 'RED',
    YELLOW: 'YELLOW',
    CYAN: 'CYAN',
    BLACK: 'BLACK',
    JOKER: 'JOKER',
  };
  
  const TURN_ACTIONS = {
    INIT: 'INIT',
    DRAW: 'DRAW',
    PLAY: 'PLAY',
  }
  
  const RummikubRules = {
    minValueForPlayingCards: 30,
    initialHand: 14,
    minNumberForGroup: 3,
    minNumberForRun: 3,
    plateNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    plateColors: [PLATE_COLORS.RED, PLATE_COLORS.YELLOW, PLATE_COLORS.CYAN, PLATE_COLORS. BLACK],
  }
  
  const clamp = (number, min, max) => {
    return Math.max(min, Math.min(number, max));
  }
  
  class Rummikub {
    constructor({ numberOfPlayers = 4, initialPlayer = 1, initialNumberOfCards = RummikubRules.initialHand, debug = false }) {
      this.numberOfPlayers = numberOfPlayers;
      this.initialNumberOfCards = initialNumberOfCards;
      this.initialPlayer = clamp(initialPlayer, 1, numberOfPlayers) - 1;
      this.newGame();
      this.debug = debug;
    }
  
    get currentPlayer() {
      return this.players[(this.currentTurn + this.initialPlayer) % this.numberOfPlayers];
    }
  
    newGame() {
      this.currentTurn = 0;
      this.firstPlayerInitiallyPlayed = false;
      this.initPlayers()
      this.pool = new RummikubPool();
  
      this.giveInitialHand();
    }
  
    initPlayers() {
      this.players = [...new Array(this.numberOfPlayers)].map((_, i) => new Player({id: i}));
    }
  
    giveInitialHand() {
      [...new Array(this.initialNumberOfCards)].forEach((i) => {
        this.players.forEach(player => {
          const cardDrawn = this.pool.draw();
          if (!cardDrawn) return;
          player.draw(cardDrawn);
        });
      });
    }
  
    play() {
      while (!(this.firstPlayerInitiallyPlayed || this.pool.isEmpty))  {
        if (this.debug) {
          console.log(`*** Turn: ${this.currentTurn + 1} ***`);
        }
        this.nextPlayerTurn();
        if (this.debug) {
          console.log(`Remaining: ${this.pool.remaining}`);
        }
      }
      if (this.debug) {
        console.log(`>>> Game Ended, after ${this.currentTurn} turn${this.currentTurn > 1 ? 's': '' } with ${this.pool.remaining} card${this.pool.remaining !== 1 ? 's': '' } remaining.`);
      }
      return !this.firstPlayerInitiallyPlayed;
    }
  
    nextPlayerTurn() {
      const did = this.currentPlayer.takeTurn(this.pool);
      if (this.debug) {
        console.log(`Player did ${did}`);
      }
      if (did === TURN_ACTIONS.INIT) {
        this.firstPlayerInitiallyPlayed = true;
      }
      // go to next Player
      this.currentTurn++;
    }
  
    toString() {
      const readablePlayers = [...this.players].map(item => item.toString());
      const readableGame = { 
        numberOfPlayers: this.numberOfPlayers,
        players: readablePlayers,
        pool: this.pool.toString(),
      };
      return JSON.stringify(readableGame, null, 2);
    }
  }
  
  class RummikubPool {
    constructor() {
      this.initPool();
    }
  
    get isEmpty() {
      return this.pool.length === 0;
    }
  
    get remaining() {
      return this.pool.length;
    }
  
    initPool() {
      this.pool = [];
      RummikubRules.plateColors.forEach(c => {
        RummikubRules.plateNumbers.forEach(n => {
          this.pool.push(
            new RummikubPlate({ number: n, color: c }),
            new RummikubPlate({ number: n, color: c }),
          );
        });
      });
      this.pool.push(new RummikubPlate({ color: PLATE_COLORS.JOKER  }, { color: PLATE_COLORS.JOKER }));
      this.shufflePool();
    }
  
    draw() {
      if (this.isEmpty) return null;
  
      const n = Math.floor(Math.random() * (this.pool.length - 1));
      const drawCard = this.pool[n];
  
      this.pool = [...this.pool.slice(0, n), ...this.pool.slice(n + 1)];
  
      return drawCard;
    }
  
    shufflePool() {
      for (let i = 0; i < this.pool.length; i++) {
        const j = Math.floor(Math.random() * i)
        const temp = this.pool[i]
        this.pool[i] = this.pool[j]
        this.pool[j] = temp
      }
    }
  
    toString() {
      return [...this.pool].map(item => item.toString());
    }
  
  }
  
  class RummikubPlate {
    constructor({ color, number }) {
      this.color = color;
      this.number = number;
    }
  
    get isJoker() {
      return this.color === PLATE_COLORS.JOKER;
    }
  
    toString() {
      return this.isJoker ? PLATE_COLORS.JOKER : `${this.color[0]}${this.number}`
    }
  }
  
  const unique = array => array.filter((v, i, a) => a.indexOf(v) === i);
  var uniqueBy = (array, by) => array.filter((v, i, a) => a.findIndex(item => item[by] === v[by]) === i);
  var sort = array => array.sort((a, b) => {
    return a > b;
  });var sortBy = (array, by) => array.sort((a, b) => {
    return a[by] > b[by];
  });
  const nonEmpty = array => array.filter(item => item && item.length);
  
  class Player {
    constructor({ id }) {
      this.id = id;
      this.hand = [];
      this.hasInitiallyPlayed = false;
    }
  
    get joker() {
      return this.hand.filter(({ color }) => color === PLATE_COLORS.JOKER);
    }
  
    get groups() {
      const amountOfJoker = this.joker.length;
      const g = [...RummikubRules.plateNumbers].map(n => {
        const groupOfSameNumber = uniqueBy(this.hand.filter(({ number }) => number === n), 'color');
        return groupOfSameNumber.length < (RummikubRules.minNumberForRun - amountOfJoker) ? null : groupOfSameNumber; 
      });
      return nonEmpty(g);
    }
  
    // HANDLE Joker
    get runs() {
      const amountOfJoker = this.joker.length;
      const r = [...RummikubRules.plateColors].map(c => {
        const groupOfSameColor = uniqueBy(this.hand.filter(({ color }) => color === c), 'number'); 
        return groupOfSameColor.length < (RummikubRules.minNumberForGroup - amountOfJoker) ? null : groupOfSameColor; 
      });
  
      return nonEmpty(r).map(run => sortBy(run, 'number'));
    }
  
    canInitiallyPlay() {
      const joker = this.joker;
      const validGroups = this.groups.filter(group => {
        let s = sum(group, 'number');
        s += (joker.length * (s / group.length));
        return s >= RummikubRules.minValueForPlayingCards;
      });
  
      const validRuns = [...this.runs].map(run => new RummikubRun(run, joker)).filter(r => {
        r.value >= RummikubRules.minValueForPlayingCards;
      });
  
      return validGroups.length > 0;
    }
  
    takeTurn(pool) {
      if (!this.hasInitiallyPlayed) {
        const played = this.canInitiallyPlay();
        if (played) {
          this.hasInitiallyPlayed = true;
          return TURN_ACTIONS.INIT;
        } else {
          this.draw(pool.draw());
          return TURN_ACTIONS.DRAW;
        }
      }
    }
  
    draw(plate) {
      this.hand.push(plate)
    }
  
    toString() {
      const readableHand = [...this.hand].map(plate => plate.toString());
      return {
        player: this.id + 1,
        cards: readableHand
      };
    }
  }
  
  const diff = (n, value) => {
    const v = value % RummikubRules.plateNumbers.length;
    return Math.abs(n - v);
  }
  
  const sum = (array, by) => {
    return array.reduce((carr, val) => (by ? val[by] : val) + carr, 0)
  }
  
  const findPrev = (array, n, joker) => {
    const all = ([...array].reverse()).filter(({ value }) => {
      const v = value % RummikubRules.plateNumbers.length;
      const predecessor = n - 1;
      return v >= (predecessor - joker) && v <= (predecessor);
    });
    if (!all.length) return null;
    let [first] = all;
    if (all.length === 1) return first;
  
    let nearestFound = first;
    const nearest = all.forEach(potentialNearest => {
      if (diff(n, potentialNearest.value) < diff(n, nearestFound.value)) {
        nearestFound = potentialNearest;
      }
    });
    return nearestFound;
  }
  
  const sliceVariants = (array, firstIndex, secondIndex) => {
    const variants = [];
    // only one joker
    if (firstIndex > -1) {
      const var1 = array.slice(0, firstIndex);
      const var2 = array.slice(firstIndex + 1, array.length);
      variants.push([var1, 0], [var2, 0]);
    }
    if (firstIndex > -1 && secondIndex > -1) {
      const var3 = array.slice(0, secondIndex);
      const var4 = array.slice(firstIndex + 1, secondIndex);
      const var5 = array.slice(secondIndex + 1, array.length);
      variants.push([var3, 1], [var4, 1], [var5, 0]);
    }
    return variants;
  }
  
  const generateVariants = array => {
    const results = [];
    array.forEach(({ items, originalItems, jokersUsed }) => {
      if (!jokersUsed) return;
      const [ first, second ] = originalItems.filter(item => item instanceof RummikubPlate); 
      const firstIndex = originalItems.indexOf(first);
      const secondIndex = originalItems.indexOf(second);
  
      const itemVariants = sliceVariants(items, firstIndex, secondIndex);
      const originalItemVariants = sliceVariants(originalItems, firstIndex, secondIndex);
  
      itemVariants.forEach((variant, i) => {
        const item = {
          originalItems: originalItemVariants[i][0],
          items: itemVariants[i][0],
          sum: sum(itemVariants[i][0]),
          jokersUsed: itemVariants[i][1],
        };
        results.push(item);
      });
    });
    return results;
  };
  
  const findNextHighest = (array, amount) => {
    const [head] = [...array];
    const [tail] = [...array].reverse();
  
    const limits = RummikubRules.plateNumbers.length - 1;
    const headIndex = RummikubRules.plateNumbers.indexOf(head);
    const tailIndex = RummikubRules.plateNumbers.indexOf(tail);
  
    const arr = [];
  
    const headItems = [...new Array(amount)].map((v, i) => {
      const nextIndex = (headIndex + (i + 1)) % limits;
      return RummikubRules.plateNumbers[nextIndex];
    });
    arr.push(headItems);
  
    const tailItems = [...new Array(amount)].map((v, i) => {
      const nextIndex = (tailIndex - (i + 1)) % limits;
      return RummikubRules.plateNumbers[nextIndex];
    });
    arr.push(tailItems);
  
    if (amount === 2) {
      const surroundingItems = [headItems[1], tailItems[0]];
      arr.push(unique(surroundingItems));
    }
  
    let highest = headItems;
    arr.forEach((a) => {
      if (sum(a) > sum(highest)) {
        highest = a;
      }
    });
  
    return highest;
  }
  
  class RummikubRun {
    constructor(items, possibleJoker = 0) {
      this.possibleJoker = possibleJoker;
      this.run = [...items].map(({ number }) => new RummikubRunItem(number));
      this.link();
    }
  
    get all() {
      const reverseRun = [...this.run].reverse();
      let longest = 0;
      let availableJoker = this.possibleJoker;
      const results = [];
      reverseRun.forEach((item) => {
        let row = [];
        let currentItem = item;
        let lastItem = null;
        const result = {
          originalItems: [],
          items: [],
          sum: 0,
          jokersUsed: 0,
        }
        let jokersAvailable = availableJoker;
        while (currentItem) {
          result.sum += currentItem.value;
          result.originalItems.push(currentItem);
          result.items.push(currentItem.value);
          if (currentItem && currentItem.prev) {
            const needsJoker = Math.abs((currentItem.prev.value - currentItem.value) % RummikubRules.plateNumbers.length) - 1;
            jokersAvailable -= needsJoker;
            if (jokersAvailable < 0) {
              break;
            }
            result.jokersUsed += needsJoker;
            const missingItems = [...new Array(needsJoker)].fill(new RummikubPlate({ color: PLATE_COLORS.JOKER, number: currentItem.value })).map((item, i) => (new RummikubPlate({ ...item, number: item.number + (i - 1) })));
            if (missingItems.length) {
              const gap = sum(missingItems, 'number');
              result.items.push(...[...missingItems].map(({ number }) => number));
              result.originalItems.push(...missingItems);
              result.sum += gap;
            }
            
          }
          currentItem = currentItem.prev;
        }
        results.push(result);
      });
  
      const generatedVariants = generateVariants(results);
      results.push(...generatedVariants);
      
  
      const allRunsWithJoker = [...results].map(({ jokersUsed, items }) => {
        const jokersLeft = this.possibleJoker - jokersUsed;
        if (!jokersLeft) return sort(items);
        const additionallyAddable = findNextHighest(items, jokersLeft);
        return sort([...additionallyAddable, ...items]);
      });
  
      return allRunsWithJoker;
    }
  
    get highest() {
      const all = this.all;
  
      if (!all || !all.length) return null;
  
      let highest = all[0];
  
      all.forEach((a) => {
        if (sum(a) > sum(highest)) {
          highest = a;
        }
      });
  
      return highest;
    }
  
    get value() {
      const highest = this.highest;
  
      if (!highest) return 0;
      return sum(highest);
    }
  
    link() {
      this.run.forEach(item => {
        const prev = findPrev(this.run, item.value, this.possibleJoker);
        item.setPrevious(prev);
      });
    }
  
    toString() {
      const readableRun = [...this.run].map(item => item.toString());
      return readableRun.join(', ');
    }
  }
  
  class RummikubRunItem {
    constructor(value, prev = null) {
      this.value = value;
      this.prev = prev
    }
    
    setPrevious(item) {
      this.prev = item;
    }
  
    toString() {
      const prevValue = this.prev ? `(${this.prev.value}) -> ` : '';
      return `${prevValue}${this.value}`;
    }
  }
  
  
  ((args) => {
    const [argMaxRuns] = args;
    const maxRuns = parseInt(argMaxRuns, 10) || 10000;
    const results = [...new Array(maxRuns)];
    console.log(`Calculating ${maxRuns} games. Be patient.`);
    [...new Array(maxRuns)].map((v, i) => {
      const percentage = i / maxRuns * 100;
      process.stdout.write(`   > ${percentage.toFixed(2)}%\r`);
      const r = i + 1;
  
      const RummikubGame = new Rummikub({
        numberOfPlayers: 4,
        initialPlayer: 1,
      });
      const result = RummikubGame.play();
      results[i] = result;
    });
    console.log('   > 100.00%');
  
    const played = results.length;
    const truthy = results.filter(r => r).length;
    const falsy = results.filter(r => !r).length;
  
    const chance = (truthy / played).toFixed(4);
  
    console.log(`There is a chance of ${chance}% (${truthy} out of ${played}) that a game can not start.`);
  
  })
  //(process.argv.slice(2));