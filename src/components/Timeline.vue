<template>
  <div class="timeline">
    <div class="previous">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </div>

    <div class="day" v-for="n in dates" v-bind:class="{ current: n.current }">

      <p><small>{{n.day}}</small> {{n.date}}</p>

      <div class="row daily" v-if="entries[n.date] && entries[n.date]['daily']"></div>
      <div class="row" v-else></div>

      <div class="row weekly" v-if="entries[n.date] && entries[n.date]['weekly']"></div>
      <div class="row" v-else></div>

      <div class="row monthly" v-if="entries[n.date] && entries[n.date]['monthly']"></div>
      <div class="row" v-else></div>

    </div>

    <div class="next" v-on:click="next">
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    dates: function () {
      let dates = []
      let n = 7

      // current date
      let current = new Date()
      // Get date n days ago
      let day = new Date()
      day.setDate(day.getDate() - n)

      for (let i = 0; i <= n * 2; i++) {
        let result = new Date(day)
        result.setDate(result.getDate() + i)
        dates.push({
          day: result.toLocaleString('en-us', {weekday: 'long'}),
          date: result.getDate(),
          current: (result.toDateString() === current.toDateString())
        })
      }
      return dates
    }
  },
  data: function () {
    return {
      entries: {
        '4': {
          daily: true,
          weekly: true,
          monthly: true
        },
        '6': {
          daily: true,
          weekly: false,
          monthly: false
        }
      }
    }
  },
  methods: {
    next: function (event) {
      let right = document.getElementsByClassName('timeline')[0].offsetLeft + 200
      document.getElementsByClassName('timeline')[0].style['padding-right'] = right + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline {
  bottom: 0;
  height: 120px;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: all 0.6s ease;

  box-shadow: 0px 1px 3px 2px rgba(204,204,204,0.75);

  .previous {
    height: 120px;
    left: 0;
    width: 40px;
    position: absolute;
    background: linear-gradient(to right,  rgba(216,216,216,0.65) 0%,rgba(0,0,0,0) 100%);

    &:hover {
      background: white;
      cursor: pointer;
    }
    i {
      margin: 50px 0 0 10px;
    }
  }

  .next {
    height: 120px;
    right: 0;
    width: 40px;
    position: absolute;
    background: linear-gradient(to left,  rgba(216,216,216,0.65) 0%,rgba(0,0,0,0) 100%);

    &:hover {
      background: white;
      cursor: pointer;
    }
    i {
      margin: 50px 0 0 10px;
    }
  }

  .day {
    display: block;
    flex: auto;
    height: 120px;
    min-width: 150px;
    border-right: 1px solid #F0F0F0;
    text-align: center;
    padding: 5px 0 0;
    position: relative;

    p {
      font-size: 18px;
      margin-bottom: 5px;

      small {
        display: block;
      }
    }

    .row {
      margin: 5px 0;
      width: 100%;
      height: 15px;
      padding: 2px;

    }

    .daily {
      background: #e9ffd9;
      border: 1px solid #a6ca8a;
      border-radius: 5px;
      font-size: 9px;
      padding: 2px;
      color: gray;
    }

    .weekly {
      background: #fff8c4;
      border: 1px solid #f2c779;
      border-radius: 5px;
      font-size: 9px;
      color: gray;
    }

    .monthly {
      background: #e3f7fc;
      border: 1px solid #8ed9f6;
      border-radius: 5px;
      font-size: 9px;
      color: gray;
    }

    .no-right {
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .no-left {
      border-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;

    }
  }

  .current {
    box-shadow: 0px 1px 8px 5px rgba(204,204,204,0.75);

    z-index: 1;

  }
}
</style>
