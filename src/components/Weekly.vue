<template>
  <div id="content">

    <h2>Review of Last Week</h2>

    <label class="label">Big Wins</label>
    <p class="control">
      <input class="input" type="text" v-model="weekly.big_wins[0]" placeholder="Win 1...">
      <input class="input" type="text" v-model="weekly.big_wins[1]" placeholder="Win 2...">
      <input class="input" type="text" v-model="weekly.big_wins[2]" placeholder="Win 3...">
      <input class="input" type="text" v-model="weekly.big_wins[3]" placeholder="Win 4...">
      <input class="input" type="text" v-model="weekly.big_wins[4]" placeholder="Win 5...">
    </p>

    <label class="label">How I'll Improve</label>
    <p class="control">
      <input class="input" type="text" v-model="weekly.improve[0]" placeholder="Improvement 1...">
      <input class="input" type="text" v-model="weekly.improve[1]" placeholder="Improvement 2...">
      <input class="input" type="text" v-model="weekly.improve[2]" placeholder="Improvement 3...">
    </p>

    <h2>Planning Upcomming Week</h2>

    <h3>Things I Will Do To Make This Week Great</h3>

    <div class="do_great">
      <div class="columns">
        <div class="column">
          <label class="label">Personal</label>
          <p class="control">
            <textarea class="input" v-model="weekly.upcomming_personal"></textarea>
          </p>
        </div>
        <div class="column">
          <label class="label">Work</label>
          <p class="control">
            <textarea class="input" v-model="weekly.upcomming_work"></textarea>
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <label class="label">Family/Friends</label>
          <p class="control">
            <textarea class="input" v-model="weekly.upcomming_family"></textarea>
          </p>
        </div>
        <div class="column">
          <label class="label">Relationships</label>
          <p class="control">
            <textarea class="input" v-model="weekly.upcomming_relationships"></textarea>
          </p>
        </div>
      </div>
    </div>
    <br>
    <label class="label">I'm Looking Forward To</label>
    <p class="control">
      <input class="input" type="text" v-model="weekly.looking_formward[0]" placeholder="Looking forward to...">
      <input class="input" type="text" v-model="weekly.looking_formward[1]" placeholder="Looking forward to...">
      <input class="input" type="text" v-model="weekly.looking_formward[2]" placeholder="Looking forward to...">
    </p>

    <label class="label">Habits I'm Focusing On Developing</label>
    <p class="control">
      <input class="input" type="text" v-model="weekly.habits[0]" placeholder="Habbit 1...">
      <input class="input" type="text" v-model="weekly.habits[1]" placeholder="Habbit 2...">
    </p>

    <label class="label">Learn Something New</label>
    <p class="control">
      <input class="input" type="text" v-model="weekly.learn_something_new" placeholder="I want to learn...">
    </p>

    <label class="label">Passion Project</label>
    <p class="control">
      <input class="input" type="text" v-model="weekly.passion_project">
    </p>

    <h2>Projects</h2>
    <p class="control projects">
      <textarea class="input" v-model="weekly.projects[0]"></textarea>
      <textarea class="input" v-model="weekly.projects[1]"></textarea>
      <textarea class="input" v-model="weekly.projects[2]"></textarea>
      <textarea class="input" v-model="weekly.projects[3]"></textarea>
    </p>

    <label class="label">Top Goals This Week</label>
    <p class="control">
      <input class="input" type="text" v-model="weekly.goals[0]" placeholder="Goal 1...">
      <input class="input" type="text" v-model="weekly.goals[1]" placeholder="Goal 2...">
      <input class="input" type="text" v-model="weekly.goals[2]" placeholder="Goal 3...">
      <input class="input" type="text" v-model="weekly.goals[3]" placeholder="Goal 4...">
      <input class="input" type="text" v-model="weekly.goals[4]" placeholder="Goal 5...">
    </p>

    <download-button view="weekly" v-bind:data-items="weekly" ></download-button>
    <upload-button view="weekly"></upload-button>
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
    var local = JSON.parse(window.localStorage.getItem('plannr.space_weekly'))
    if (!local) {
      return {
        weekly: {
          big_wins: {0: '', 1: '', 2: '', 3: '', 4: ''},
          improve: {0: '', 1: '', 2: ''},
          upcomming_personal: '',
          upcomming_work: '',
          upcomming_family: '',
          upcomming_relationships: '',
          looking_formward: {0: '', 1: '', 2: ''},
          habits: {0: '', 1: ''},
          learn_something_new: '',
          passion_project: '',
          projects: {0: '', 1: '', 2: '', 3: ''},
          goals: {0: '', 1: '', 2: '', 3: '', 4: ''}
        }
      }
    }
    return {
      weekly: JSON.parse(window.localStorage.getItem('plannr.space_weekly')),
      files: ''
    }
  },
  watch: {
    weekly: {
      handler: function (weekly) {
        window.localStorage.setItem('plannr.space_weekly', JSON.stringify(weekly))
      },
      deep: true
    }
  },
  methods: {
    clear: function (event) {
      window.localStorage.removeItem('plannr.space_weekly')
      window.location.reload()
    }
  }

}
</script>

<style lang="scss" scoped>
input {
  margin-top: 5px;
}

textarea {
  min-height: 100px;
}

.projects textarea {
  margin-top: 5px;
}
</style>
