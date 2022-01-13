<template>
  <div class="page-login">
    <div class="logo"></div>
    <ul class="circles">
      <li v-for="p in 10" :key="p"></li>
    </ul>
    <div class="page-login-content">
      <div class="left">
        <img src="@/assets/img/loginImg/left.png" />
      </div>
      <div class="right">
        <div class="content">
          <div class="title">账号密码登录</div>
          <el-form
            ref="loginForm"
            label-position="top"
            :rules="rules"
            :model="loginForm"
          >
            <el-form-item prop="username">
              账号
              <el-input
                type="text"
                v-model.trim="loginForm.username"
                placeholder="用户名"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password" style="padding-top: 10px">
              密码
              <el-input
                type="password"
                v-model.trim="loginForm.password"
                placeholder="密码"
              ></el-input>
            </el-form-item>

            <div class="login">
              <!-- 滑块 -->
              <!-- <div id="drag"></div> -->
            </div>
            <el-form-item prop="code" style="padding-top: 10px">
              验证码
              <el-input
                type="text"
                v-model="loginForm.code"
                placeholder="- - - -"
              >
                <template slot="append">
                  <img
                    style="height: 26px"
                    class="login-code"
                    src="@/assets/img/loginImg/login-code.png"
                  />
                </template>
              </el-input>
            </el-form-item>
            <!--            <el-button size="default" @click="submit" type="primary" class="button-login">登录</el-button>-->
            <!-- <button @click="submit" type="primary" class="button-login">登录</button> -->
            <button
              @click="UserLogin"
              @keyup.enter="UserLogin"
              type="button"
              class="button-login"
            >
              登录
            </button>
          </el-form>
          <el-divider>其他登录方式</el-divider>
          <div class="other-login">
            <div class="phone">
              <img src="../assets/img/loginImg/phone.png" />
              <span>手机号登录</span>
            </div>
            <div class="qrcode">
              <img src="../assets/img/loginImg/qrcode.png" />
              <span>二维码登录</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import api from "../api/api";
import { mapState, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      loginForm: {
        //开发阶段写死
        username: "邢浩东",
        password: "123456",
        // code: "v9am"
      },
      // 校验
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  computed: {
    ...mapState("admin/menu", ["activeMenu"]),
  },
  created() {
    // 绑定监听事件
    window.addEventListener("keydown", this.handleKeyDown);
  },
  mounted() {},
  methods: {
    ...mapActions("admin/menu", ["Login"]), //将 `this.Login()` 映射为` this.$store.commit('Login')`
    //鼠标回车
    handleKeyDown(e) {
      if (e.keyCode == 13) {
        this.UserLogin();
      }
    },
    /**
     * @description 提交表单
     */
    // 提交登录信息
    UserLogin() {
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
          //使用这种写法就是没用到mapActions辅助函数
          // this.$store.dispatch('admin/menu/Login',this.loginForm).then((res)=>{
          //   if (res.code == "0") {
          //     this.$message.success("登录成功");
          //     console.log(localStorage.getItem("userToken"));
          //     this.$router.push("/home");
          //   } else {
          //     this.$message.error(res.message);
          //   }
          // })
          //使用mapActions辅助函数 由于要上gitee gages 需要将接口注释掉
          this.$router.push(this.activeMenu);
          // this.Login(this.loginForm).then((res) => {
          //   if (res.code == "0") {
          //     this.$message.success("登录成功");
          //     this.$router.push(this.activeMenu);
          //   } else {
          //     this.$message.error(res.message);
          //   }
          // });
        }
      });
    },
    GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
  },
};
</script>
<style scoped>
html,
body,
#app {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
.page-login .page-login--quick-user {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.page-login {
  background: url("../assets/img/loginImg/bg.jpg");
  background-size: cover;
  height: 100vh;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.page-login .page-login--layer {
  overflow: auto;
}

.page-login .logo {
  margin-top: 42px;
  margin-left: 45px;
  width: 180px;
  height: 40px;
}

.page-login .logo {
  /* background: url("../assets/img/loginImg/left.png") no-repeat; */
  width: 100%;
}

.page-login .page-login-content {
  position: absolute;
  width: 670px;
  height: 500px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.page-login .left {
  float: left;
  width: 220px;
  height: 100%;
  background: rgba(201, 2, 11, 0.6);
  text-align: center;
}

.page-login .left img {
  display: inline-block;
  margin-top: 180px;
}

.page-login .right {
  float: left;
  width: 450px;
  height: 100%;
  background: #fff;
}

.page-login .right .el-form-item {
  margin-bottom: 0;
}

.page-login .right .el-input-group__append {
  height: 34px;
}

.page-login .right .el-input-group__append img {
  height: 100%;
}

.page-login .right .button-login {
  cursor: pointer;
  width: 100%;
  line-height: 34px;
  border: 1px solid #c9020b;
  background: #c9020b;
  color: #fff;
  font-weight: 600;
  margin-top: 24px;
  border-radius: 4px;
}

.page-login .content {
  width: 300px;
  margin: 0 auto;
}

.page-login .content .other-login {
  font-size: 14px;
  overflow: hidden;
  padding: 0 20px;
}

.page-login .content .other-login .phone {
  float: left;
}

.page-login .content .other-login .qrcode {
  float: right;
}

.page-login .content .other-login div {
  cursor: pointer;
}

.page-login .content .other-login div img,
.page-login .content .other-login div span {
  vertical-align: middle;
}

.page-login .content .other-login div span {
  margin-left: 10px;
}

.page-login .title {
  text-align: center;
  padding: 35px 0 25px 0;
  font-size: 22px;
}

.page-login .user-name {
  border: 1px solid #fff;
}

.page-login .page-login--layer-area {
  overflow: hidden;
}

.page-login .page-login--layer-time {
  font-size: 24em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.03);
  overflow: hidden;
}

.page-login .page-login--content {
  height: 100%;
  min-height: 500px;
}

.page-login .page-login--content-header {
  padding: 1em 0;
}

.page-login .page-login--content-header .page-login--content-header-motto {
  margin: 0px;
  padding: 0px;
  text-align: center;
  font-size: 12px;
}

.page-login .page-login--content-header .page-login--content-header-motto span {
  color: #909399;
}

.page-login .page-login--logo {
  width: 240px;
  margin-bottom: 2em;
  margin-top: -2em;
}

.page-login .page-login--form {
  width: 280px;
  /* 验证滑块 */
}

.page-login .page-login--form .el-card {
  margin-bottom: 15px;
}

.page-login .page-login--form .ver {
  margin-top: 20px;
}

.page-login .page-login--form .button-login {
  width: 100%;
}

.page-login .page-login--form .el-input-group__prepend {
  padding: 0px 14px;
}

.page-login .page-login--form .login-code {
  height: 38px;
  display: block;
  margin: 0px -20px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

.page-login .page-login--form .page-login--options {
  margin: 0px;
  padding: 0px;
  font-size: 14px;
  color: #409eff;
  margin-bottom: 15px;
  font-weight: bold;
}

.page-login .page-login--form .page-login--quick {
  width: 100%;
}

.page-login .page-login--quick-user {
  padding: 10px 0px;
  border-radius: 4px;
}

.page-login .page-login--quick-user:hover {
  background-color: #f8f8f9;
}

.page-login .page-login--quick-user:hover i {
  color: #606266;
}

.page-login .page-login--quick-user:hover span {
  color: #606266;
}

.page-login .page-login--quick-user i {
  font-size: 36px;
  color: #909399;
}

.page-login .page-login--quick-user span {
  font-size: 12px;
  margin-top: 10px;
  color: #909399;
}

.page-login .page-login--content-footer {
  padding: 1em 0;
}

.page-login .page-login--content-footer .page-login--content-footer-options {
  padding: 0px;
  margin: 0px;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
}

.page-login .page-login--content-footer .page-login--content-footer-options a {
  color: #606266;
  margin: 0 1em;
}

.page-login .page-login--content-footer .page-login--content-footer-copyright {
  padding: 0px;
  margin: 0px;
  font-size: 12px;
  color: #606266;
}

.page-login
  .page-login--content-footer
  .page-login--content-footer-copyright
  a {
  color: #606266;
}

.page-login .circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0px;
  padding: 0px;
}

.page-login .circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: #fff;
  animation: animate 25s linear infinite;
  bottom: -200px;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

.page-login .circles li:nth-child(1) {
  left: 15%;
  width: 80px;
  height: 80px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

.page-login .circles li:nth-child(2) {
  left: 5%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.page-login .circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.page-login .circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-duration: 18s;
  animation-duration: 18s;
}

.page-login .circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

.page-login .circles li:nth-child(6) {
  left: 75%;
  width: 150px;
  height: 150px;
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}

.page-login .circles li:nth-child(7) {
  left: 35%;
  width: 200px;
  height: 200px;
  -webkit-animation-delay: 7s;
  animation-delay: 7s;
}

.page-login .circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  -webkit-animation-delay: 15s;
  animation-delay: 15s;
  -webkit-animation-duration: 45s;
  animation-duration: 45s;
}

.page-login .circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-duration: 35s;
  animation-duration: 35s;
}

.page-login .circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-duration: 11s;
  animation-duration: 11s;
}

.page-login .el-form-item__content {
  margin-top: 15px;
  padding-top: 12px;
}
</style>