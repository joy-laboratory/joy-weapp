<template>
  <div class="layout">
    <top></top>
    <div class="layout-content layout-content-other">
      <ga-row>
        <ga-col span="4">
          <ga-menu :active-name="activeName" width="auto">
            <ga-menu-group :title="items.name" v-for="(items,idx) in menuList" :key="idx">
              <a :href="ite.href" v-for="(ite, index) in items.subNav" :key="index">
                <ga-menu-item :name="ite.href" :style="ite.style">
                  {{ite.name}}
                </ga-menu-item>
              </a>
            </ga-menu-group>
          </ga-menu>
        </ga-col>
        <ga-col span="20" class="right-col">
          <slot></slot>
        </ga-col>
      </ga-row>
    </div>
    <div class="layout-copy">
      <bottom></bottom>
    </div>
    <ga-back-top></ga-back-top>
  </div>
</template>
<script>
import top from '@/components/top.vue';
import left from '@/components/left.vue';
import bottom from '@/components/bottom.vue';
import API from './common';
export default {
  name: 'page',
  components: {
    top,
    left,
    bottom
  },
  data() {
    return {
      menuList: [],
      activeName: ''
    };
  },
  mounted() {
    API.login().then(data => {
      this.menuList = data.navList;
      this.$nextTick(() => {
        this.activeName = `#${this.$route.path}`;
      });
    });
  }
};
</script>
<style lang="less" scoped>
.layout-content {
  min-height: 200px;
  margin-bottom: 15px;
  margin-right: 10px;
  overflow: inherit;
  -moz-border-radius: 4px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px #e9e9e9;
}

.layout-content-other {
  clear: both;
  background: transparent !important;
  box-shadow: none !important;
  margin-top: 15px;
}
</style>