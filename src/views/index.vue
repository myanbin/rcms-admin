<template>
<a-layout id="rcms-admin">
  <a-layout-sider breakpoint="lg" collapsedWidth="0">
    <div class="logo"> RCMS <sup> beta </sup> </div>
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['home']">
      <a-menu-item key="home">
        <router-link :to="{ name: 'home' }">
          <a-icon type="user" />
          <span class="nav-text"> 首页 </span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="person">
        <router-link :to="{ name: 'person' }">
          <a-icon type="team" />
          <span class="nav-text"> 人员管理 </span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="salary">
        <router-link :to="{ name: 'salary' }">
          <a-icon type="upload" />
          <span class="nav-text"> 工资管理 </span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link :to="{ name: 'home' }">
          <a-icon type="user" />
          <span class="nav-text"> 活动管理 </span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
  <a-layout>
    <a-layout-header :style="{ background: '#fff', padding: '0 16px', display: 'flex' }">
      <div :style="{ flex: 1 }"> Retired Cadres Management System Admin Board </div>
      <div>
        <span> 王小虎 </span>
        <a-button shape="circle" icon="poweroff" :style="{ marginLeft: '10px' }" />
        <a-button shape="circle" icon="poweroff" :style="{ marginLeft: '10px' }" />
      </div>
    </a-layout-header>
    <a-layout-content :style="{ margin: '24px 16px 0' }">
      <div :style="{ padding: '24px', background: '#fff', minHeight: 'calc(100vh - 160px)' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }"> ©2019 新华社技术局出品 </a-layout-footer>
  </a-layout>
</a-layout>
</template>

<script>
export default {
  name: 'admin'
}
</script>

<style scoped>
#rcms-admin {
  height: 100vh;
}

.logo {
  margin: 16px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
}
</style>
