<template>
  <div class="footer">
    <div>{{copyRight}}</div>
  </div>
</template>
<script>
export default {
  name: "bottom",
  data() {
    return {
      copyRight:
        "Copyright © 2017-2018",
      flag: true
    }
  }
}
</script>
<style>
.footer {
  text-align: center;
  margin: 10px 0;
}
</style>