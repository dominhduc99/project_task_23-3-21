<template>
  <div class="container">
    <div class="login-page">
      <h2>Login Page</h2>
      <form>
        <div class="form-group">
          <label for="fullname">Username</label>
          <input type="text" class="form-control" v-model="username" />
        </div>
        <div class="form-group">
          <label for="email">Password</label>
          <input type="password" class="form-control" v-model="password" />
        </div>

        <button @click="Login" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./Login.ts">
</script>
<style lang="less" scoped>
.login-page {
  width: 600px;
  margin: 100px auto;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
}
</style>