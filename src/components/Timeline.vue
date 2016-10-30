<template>
  <div class="timeline">
    <div class="day">
      <p><small>Mon</small> 17</p>
      <div class="row daily"></div>
      <div class="row weekly"></div>
      <div class="row monthly no-right"></div>
    </div>
    <div class="day">
      <p><small>Mon</small> 18</p>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row monthly no-left no-right"> </div>
    </div>
    <div class="day">
      <p><small>Tue</small> 19</p>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row monthly no-left"> </div>
    </div>
    <div class="day current">
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"> </div>
    </div>
    <div class="day">
      <p><small>Thu</small> 21</p>
      <div class="row daily"></div>
      <div class="row"></div>
      <div class="row"> </div>

    </div>
    <div class="day">
      <p><small>Fri</small> 22</p>
    </div>
    <div class="day">
      <p><small>Sat</small> 23</p>
    </div>
    <div class="day">
      <p><small>Sun</small> 24</p>
    </div>
  </div>
</template>

<script>
export default {

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
  box-shadow: 0px 1px 3px 2px rgba(204,204,204,0.75);

  .day {
    display: block;
    flex: auto;
    height: 120px;
    border-right: 1px solid #F0F0F0;
    text-align: center;
    padding: 5px 0 0;

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
