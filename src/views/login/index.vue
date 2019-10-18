<template>
<div id="login">
  <div class="login-container">
    <div :style="{ flex: 4, background: '#eee' }"></div>
    <a-form class="login-form" :style="{ flex: 5, margin: '48px' }" layout="vertical" @submit="login">
      <h2 :style="{ margin: '16px 0 36px 0', fontSize: '30px', textAlign: 'center' }">新华通讯社离退休干部<br />信息化管理系统</h2>
      <a-form-item label="输入用户名">
        <a-input>
          <a-icon slot="prefix" type="user" />
        </a-input>
      </a-form-item>
      <a-form-item label="输入密码">
        <a-input type="password">
          <a-icon slot="prefix" type="lock" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" class="login-form-button" :style="{ width: '100%', height: '34px' }"> 立即登录 </a-button>
        <div :style="{ marginTop: '16px' }"> 如果忘记密码，请与系统管理员联系 </div>
      </a-form-item>
    </a-form>
  </div>
</div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    login () {
      console.log('you click login')
    }
  }
}
</script>

<style scoped>
#login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: row;
  border: 1px solid #f2f2f2;
}
</style>
