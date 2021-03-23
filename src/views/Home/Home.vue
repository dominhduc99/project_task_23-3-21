<template>
  <div class="container">
    <div class="home">
      <h2>Infomation User</h2>
      <img src="https://web7b.com/files/assets/demo/img_avatar.png" alt="" />
      <div class="card">
        <div class="card-body">
          Full name: {{ FullName }} <br />
          Email: {{ Email }}
          <br />
          Phone Number: {{ PhoneNumber }} <br />
          Birthday: {{ BirthDay }}
        </div>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
        >
          Update Information
        </button>
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title">Update information</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <!-- Modal body -->
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="fullname">Fullname</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="FullnameInput"
                    />
                    <span v-show="FullnameInput.length < 5" class="valid"
                      >Please enter 5 characters</span
                    >
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      v-model="EmailInput"
                    />
                    <span v-show="!patternEmail.test(EmailInput)" class="valid"
                      >Please enter the correct email format</span
                    >
                  </div>
                  <div class="form-group">
                    <label for="phonenumber">Phone number</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="PhoneNumbreInput"
                      id="phonenumber"
                    />
                    <span v-if="PhoneNumbreInput.length != 10" class="valid"
                      >Please enter 10 characters</span
                    >
                  </div>
                  <div class="form-group">
                    <label for="birthday">Birthday</label>
                    <input
                      type="text"
                      class="form-control"
                      id="birthday"
                      v-model="BirthdayInput"
                    />
                    <span
                      v-show="!patternBirthday.test(BirthdayInput)"
                      class="valid"
                      >Please enter format dd/mm/yyyy</span
                    >
                  </div>
                </form>
              </div>

              <!-- Modal footer -->
              <div class="modal-footer">
                <button
                  @click="submit"
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./Home.ts'></script>

<style lang="less" scoped>
.card {
  width: 45% !important;
}
.valid {
  color: red;
}
</style> 
  