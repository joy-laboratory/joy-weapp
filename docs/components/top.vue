<template>
  <ga-menu mode="horizontal" :active-name="activeName">
    <div class="layout-logo">
      <a class="site-title"> <i v-bind:class="logoIcon"></i>
        <span>{{systemName}}</span>
      </a>
    </div>
    <div class="layout-nav top-menu">
      <a :href="item.href" :target="item.target" v-for="(item, index) in menuList" :key="index">
        <ga-menu-item :name="item.name" :style="'color:'+item.color">
          {{item.value}}
        </ga-menu-item>
      </a>
    </div>
  </ga-menu>
</template>
<script>
export default {
  name: "top",
  data() {
    return {
      systemName: "Joy-UI",
      logoIcon: "",
      model: "3.x",
      nickName: "",
      menuList: [{
        href: '#/introduction',
        value: '文档',
        name: '1',
        target: '_self'
      }],
      activeName: ''
    }
  }
}
</script>
<style lang="less" scoped>
.site-title {
  font-size: 30px;
}
.layout-logo {
  width: 100px;
  position: relative;
  left: 20px;
  float: left;
}
</style>