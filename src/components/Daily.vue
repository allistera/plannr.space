<template>
  <div id="content">
    <h3>Habit</h3>

    <p class="control has-addons tasks">
      <a class="button" style="width: 55px;">
        <input type="checkbox" v-model="daily.habitdone">
      </a>
      <input class="input is-expanded" type="text" v-model="daily.habit" >
    </p>

    <h2>Morning Review</h2>

    <div class="columns">
      <div class="column">
        <label class="label">I'm Greatful For</label>
        <p class="control">
          <input class="input" type="text" placeholder="1..." v-model="daily.greatful[0]">
          <input class="input" type="text" placeholder="2..." v-model="daily.greatful[1]">
          <input class="input" type="text" placeholder="3..." v-model="daily.greatful[2]">
        </p>
      </div>
      <div class="column">
        <label class="label">I'm Excited About</label>
        <p class="control">
          <input class="input" type="text" placeholder="1..." v-model="daily.excited[0]">
          <input class="input" type="text" placeholder="2..." v-model="daily.excited[1]">
          <input class="input" type="text" placeholder="3..." v-model="daily.excited[2]">
        </p>
      </div>
    </div>

    <label class="label">Affirmation</label>
    <p class="control">
      <input class="input" type="text" v-model="daily.affirmation">
    </p>

    <div class="columns">
      <div class="column">
        <label class="label">Focus</label>
        <p class="control">
          <input class="input" type="text" v-model="daily.focus">
        </p>
      </div>
      <div class="column">
        <label class="label">Exercise</label>
        <p class="control">
          <input class="input" type="text" v-model="daily.exercise">
        </p>
      </div>
    </div>

    <h3>Todays Priorities</h3>

    <p class="control">
      <p class="control has-addons tasks" v-for="n in 5">
        <a class="button" style="width: 55px;">
          <input type="checkbox" v-model="daily.prioritydone[n]">
        </a>
        <input class="input is-expanded" type="text" placeholder="Priority {{n + 1}}..." v-model="daily.priority[n]">
      </p>
    </p>

    <div class="columns">
      <div class="column">
        <h3>Schedule</h3>

        <div v-for="n in 10" class="schedule">
          <p class="control has-addons">
            <a class="button is-info" style="width: 55px;">
              {{n + 8}}:00
            </a>
            <input class="input is-expanded" type="text" v-model="daily.schedule[n]">
          </p>
          <p class="control has-addons">
            <a class="button" style="width: 55px;"></a>
            <input class="input is-expanded" type="text" v-model="daily.schedulehalf[n]">
          </p>
        </div>
      </div>

      <div class="column">
        <h3>Tasks</h3>

        <p class="control has-addons tasks" v-for="n in 8">
          <a class="button" style="width: 55px;">
            <input type="checkbox" v-model="daily.taskdone[n]">
          </a>
          <input class="input is-expanded" type="text" v-model="daily.task[n]" >
        </p>

        <h3>Notes</h3>
        <p class="control">
          <textarea class="textarea" placeholder="Notes" style="height: 200px;" v-model="daily.notes"></textarea>
        </p>
      </div>
    </div>

    <h3>End of Day Review</h3>

    <div class="columns">
      <div class="column">
        <label class="label">Today's Wins</label>
        <p class="control">
          <input class="input" type="text" placeholder="1..." v-model="daily.wins[0]">
          <input class="input" type="text" placeholder="2..." v-model="daily.wins[1]">
          <input class="input" type="text" placeholder="3..." v-model="daily.wins[2]">
        </p>
      </div>
      <div class="column">
        <label class="label">How I'll Improve</label>
        <p class="control">
          <input class="input" type="text" placeholder="1..." v-model="daily.improve[0]">
          <input class="input" type="text" placeholder="2..." v-model="daily.improve[1]">
          <input class="input" type="text" placeholder="3..." v-model="daily.improve[2]">
        </p>
      </div>
    </div>

    <download-button view="daily" v-bind:data-items="daily" ></download-button>
    <upload-button view="daily"></upload-button>
    <button class="button is-large" v-on:click="clear">Clear</button>

  </div>

</template>

<script>
import DownloadButton from './DownloadButton.vue'
import UploadButton from './UploadButton.vue'

export default {
  components: {
    DownloadButton,
    UploadButton
  },
  data: function () {
    var local = JSON.parse(window.localStorage.getItem('plannr.space_daily'))
    if (!local) {
      return {
        daily: {
          habitdone: false,
          habit: '',
          greatful: ['', '', ''],
          excited: ['', '', ''],
          affirmation: '',
          focus: '',
          exercise: '',
          prioritydone: [false, false, false, false, false],
          priority: ['', '', '', '', ''],
          schedule: ['', '', '', '', '', '', '', '', ''],
          schedulehalf: ['', '', '', '', '', '', '', '', ''],
          taskdone: [false, false, false, false, false, false, false, false],
          task: ['', '', '', '', '', '', '', ''],
          notes: '',
          wins: ['', '', ''],
          improve: ['', '', '']
        }
      }
    }
    return {
      daily: JSON.parse(window.localStorage.getItem('plannr.space_daily')),
      files: ''
    }
  },
  watch: {
    daily: {
      handler: function (daily) {
        window.localStorage.setItem('plannr.space_daily', JSON.stringify(daily))
      },
      deep: true
    }
  },
  methods: {
    clear: function (event) {
      window.localStorage.removeItem('plannr.space_daily')
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 20px;
}

textarea {
  margin: 5px 0;
}

.textarea {
  min-height: 4em;
}

input {
  margin-top: 5px;
}
.schedule {
  input {
    border: 1px;
    border-radius: 0;
    margin-top: 0;
  }
  p:first-child {
    margin: 0;
  }
  p:last-child {
    a {background: transparent; border: 0}
  }
}

.tasks {
  input {
    margin-top: 0;
  }
}
</style>
