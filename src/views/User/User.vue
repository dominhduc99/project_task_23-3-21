<template>
  <div class="container">
    <h2>Login Page</h2>
    <form>
      <div class="form-group">
        <label for="fullname">Fullname</label>
        <input type="text" class="form-control" v-model="fullName" />
        <span v-show="fullName.length < 5" class="valid"
          >Please enter 5 characters</span
        >
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="email" />
        <span v-show="email.length < 5" class="valid"
          >Please enter 5 characters</span
        >
      </div>
      <div class="form-group">
        <label for="phonenumber">Phone number</label>
        <input
          type="number"
          class="form-control"
          v-model="phoneNumber"
          id="phonenumber"
        />
        <span v-if="phoneNumber.length != 10" class="valid"
          >Please enter 10 characters</span
        >
      </div>
      <div class="form-group">
        <label for="birthday">Birthday</label>
        <input
          type="text"
          class="form-control"
          id="birthday"
          v-model="birthday"
        />
        <span v-show="!patternBirthday.test(birthday)" class="valid"
          >Please enter format dd/mm/yyyy</span
        >
      </div>

      <button @click="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script  lang="ts" src="./User.ts" >
</script>
<style lang="less" scoped>
.valid {
  color: red;
}
</style>