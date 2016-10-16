<template>
  <div id="content">
    <table class="table">
      <tbody>
        <tr>
          <td><textarea v-model="monthly.calendar[0]" placeholder="1st"></textarea></td>
          <td><textarea v-model="monthly.calendar[1]" placeholder="2nd"></textarea></td>
          <td><textarea v-model="monthly.calendar[2]" placeholder="3rd"></textarea></td>
          <td><textarea v-model="monthly.calendar[3]" placeholder="4th"></textarea></td>
          <td><textarea v-model="monthly.calendar[4]" placeholder="5th"></textarea></td>
          <td><textarea v-model="monthly.calendar[5]" placeholder="6th"></textarea></td>
          <td><textarea v-model="monthly.calendar[6]" placeholder="7th"></textarea></td>
        </tr>
        <tr>
          <td><textarea v-model="monthly.calendar[7]" placeholder="8th"></textarea></td>
          <td><textarea v-model="monthly.calendar[8]" placeholder="9th"></textarea></td>
          <td><textarea v-model="monthly.calendar[9]" placeholder="10th"></textarea></td>
          <td><textarea v-model="monthly.calendar[10]" placeholder="11th"></textarea></td>
          <td><textarea v-model="monthly.calendar[11]" placeholder="12th"></textarea></td>
          <td><textarea v-model="monthly.calendar[12]" placeholder="13th"></textarea></td>
          <td><textarea v-model="monthly.calendar[13]" placeholder="14th"></textarea></td>
        </tr>
        <tr>
          <td><textarea v-model="monthly.calendar[14]" placeholder="15th"></textarea></td>
          <td><textarea v-model="monthly.calendar[15]" placeholder="16th"></textarea></td>
          <td><textarea v-model="monthly.calendar[16]" placeholder="17th"></textarea></td>
          <td><textarea v-model="monthly.calendar[17]" placeholder="18th"></textarea></td>
          <td><textarea v-model="monthly.calendar[18]" placeholder="19th"></textarea></td>
          <td><textarea v-model="monthly.calendar[19]" placeholder="20th"></textarea></td>
          <td><textarea v-model="monthly.calendar[20]" placeholder="21st"></textarea></td>
        </tr>
        <tr>
          <td><textarea v-model="monthly.calendar[21]" placeholder="22nd"></textarea></td>
          <td><textarea v-model="monthly.calendar[22]" placeholder="23rd"></textarea></td>
          <td><textarea v-model="monthly.calendar[23]" placeholder="24th"></textarea></td>
          <td><textarea v-model="monthly.calendar[24]" placeholder="25th"></textarea></td>
          <td><textarea v-model="monthly.calendar[25]" placeholder="26th"></textarea></td>
          <td><textarea v-model="monthly.calendar[26]" placeholder="27th"></textarea></td>
          <td><textarea v-model="monthly.calendar[27]" placeholder="28th"></textarea></td>
        </tr>
        <tr>
          <td><textarea v-model="monthly.calendar[28]" placeholder="29th"></textarea></td>
          <td><textarea v-model="monthly.calendar[29]" placeholder="30th"></textarea></td>
          <td><textarea v-model="monthly.calendar[30]" placeholder="31st"></textarea></td>
          <td colspan="4">
            <textarea v-model="monthly.notes" placeholder="Notes..."></textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <h2>Plan</h2>

    <label class="label">This Months Goals</label>
    <p class="control">
      <input class="input" type="text" placeholder="Goal 1..." v-model="monthly.goal[0]">
      <input class="input" type="text" placeholder="Goal 2..." v-model="monthly.goal[1]">
      <input class="input" type="text" placeholder="Goal 3..." v-model="monthly.goal[2]">
    </p>

    <label class="label">Distractions To Avoid</label>
    <p class="control">
      <input class="input" type="text" placeholder="Avoid 1..." v-model="monthly.avoid[0]">
      <input class="input" type="text" placeholder="Avoid 2..." v-model="monthly.avoid[1]">
      <input class="input" type="text" placeholder="Avoid 3..." v-model="monthly.avoid[2]">
    </p>

    <h2>Review</h2>

    <label class="label">This Months Wins</label>
    <p class="control">
      <input class="input" type="text" placeholder="Win 1..." v-model="monthly.wins[0]">
      <input class="input" type="text" placeholder="Win 2..." v-model="monthly.wins[1]">
      <input class="input" type="text" placeholder="Win 3..." v-model="monthly.wins[2]">
    </p>

    <label class="label">Insights Gained</label>
    <p class="control">
      <input class="input" type="text" placeholder="Insight 1..." v-model="monthly.insights[0]">
      <input class="input" type="text" placeholder="Insight 2..." v-model="monthly.insights[1]">
      <input class="input" type="text" placeholder="Insight 3..." v-model="monthly.insights[2]">
    </p>

    <download-button view="monthly" v-bind:data-items="monthly" ></download-button>
    <upload-button view="monthly"></upload-button>
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
    var local = JSON.parse(window.localStorage.getItem('plannr.space_monthly'))
    if (!local) {
      return {
        monthly: {
          calendar: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
          notes: '',
          goal: ['', '', ''],
          avoid: ['', '', ''],
          wins: ['', '', ''],
          insights: ['', '', '']
        }
      }
    }
    return {
      monthly: JSON.parse(window.localStorage.getItem('plannr.space_monthly')),
      files: ''
    }
  },
  watch: {
    monthly: {
      handler: function (monthly) {
        window.localStorage.setItem('plannr.space_monthly', JSON.stringify(monthly))
      },
      deep: true
    }
  },
  methods: {
    clear: function (event) {
      window.localStorage.removeItem('plannr.space_monthly')
      window.location.reload()
    }
  }
}

</script>

<style lang="scss" scoped>
table textarea {
  min-height: 150px;
  width: 100%;
  border: 1px solid lightgray;
}
input {
  margin-top: 5px;
}
</style>
