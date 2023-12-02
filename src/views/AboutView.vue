<script>
import { RouterLink, RouterView } from "vue-router";
import Popper from "vue3-popper";
export default {
  data() {
    return{
      account:"",
      password:"",
      password2:"",
      acc:[],
      paa:[],
      show:0,
      show2:0,
      aa:"",
      b:"" //修改彈跳視窗
    }
  },
  components: {
    RouterLink,
    Popper,
  },
  methods:{
    register(){
      this.acc = JSON.parse(localStorage.getItem("account"))
      if(this.password == this.password2 && this.account != this.password){
        if(this.acc == false){
        this.acc = []
        }
        this.acc.push(this.account)
        this.acc.push(this.password)
        // console.log(this.acc)
        localStorage.setItem("account",JSON.stringify(this.acc))
        this.$router.push("/")
      }else if(this.password != this.password2){
        this.b = "請確認你輸入的密碼是否一致"
        for(let i = 0 ; i<this.acc.length ; i++){
        if( this.acc[i] == this.account){
            this.b = "此帳號已註冊，請選擇其他帳號名稱"
        }
      }
      } else if(this.account == this.password){
        this.b = "請確認你輸入的帳號密碼是否重複了"
        for(let i = 0 ; i<this.acc.length ; i++){
        if( this.acc[i] == this.account){
            this.b = "此帳號已註冊，請選擇其他帳號名稱"
        }
      }
      }
    },
    clickC(){
      let e = document.getElementsByName("eye")
      let acc = document.getElementById("acc")
      if(e.class == "fa-solid fa-eye fa-lg eye"){
        e.class="fa-solid fa-eye-slash fa-lg eye"
        acc.type="text"
        this.show = 1
      } else{
        e.class="fa-solid fa-eye fa-lg eye"
        acc.type="password"
        this.show = 0
      }
    },
    clickC2(){
      let e2 = document.getElementsByName("eye2")
      let acc2 = document.getElementById("acc2")
      if(e2.class == "fa-solid fa-eye fa-lg eye"){
        e2.class="fa-solid fa-eye-slash fa-lg eye"
        acc2.type="text"
        this.show2 = 1
      } else{
        e2.class="fa-solid fa-eye fa-lg eye"
        acc2.type="password"
        this.show2 = 0
      }
    },
  },
  mounted(){
  }
};
</script>

<template>
<div class="box">
    <p class="textT">註冊</p>
    <p class="textL">帳號</p>
    <div class="form-floating mb-3">
      <input type="text" class="form-control tb" id="floatingInput" placeholder="name@example.com" v-model="this.account">
      <label class="tbc" for="floatingInput">請在這裡輸入帳號</label>
    </div>
    <p class="textL">密碼</p>
    <div class="form-floating mb-3">
      <input type="password" class="form-control tbp" id="acc" placeholder="" v-model="this.password">
      <i v-if="this.show == 0" class="fa-solid fa-eye fa-lg eye" @click="this.clickC()" name="eye"></i>
      <i v-if="this.show == 1" class="fa-solid fa-eye-slash fa-lg eye" @click="this.clickC()" name="eye"></i>
      <label class="tbc" for="floatingInput">請在這裡輸入密碼</label>
    </div>
    <p class="textL">請再次輸入密碼</p>
    <div class="form-floating mb-3">
      <input type="password" class="form-control tbp" id="acc2" placeholder="" v-model="this.password2">
      <i v-if="this.show2 == 0" class="fa-solid fa-eye fa-lg eye" @click="this.clickC2()" name="eye2"></i>
      <i v-if="this.show2 == 1" class="fa-solid fa-eye-slash fa-lg eye" @click="this.clickC2()" name="eye2"></i>
      <label class="tbc" for="floatingInput">再確認一次密碼</label>
    </div>
    <div class="checkbox">
      <!-- <p v-if="this.passwordC == 1" class="textL" style="color: red; transition: 0.6s;">請確認你輸入的密碼是否一致</p>
      <p v-if="this.passwordC == 2" class="textL" style="color: red; transition: 0.6s;">請確認你輸入的帳號密碼是否重複了</p>
      <p v-if="this.passwordC == 3" class="textL" style="color: red; transition: 0.6s;">此帳號已註冊，請選擇其他帳號名稱</p> -->
    </div>
    <div class="logbox">
      <button type="button" class="button"><RouterLink to="/" class="bc">取消</RouterLink></button>
      <Popper  id="ac1" arrow placement="top" class="root" :content="this.b">
        <button type="button" class="buttonR" @click="register()">註冊</button>
      </Popper>
    </div>
</div>
</template>

<style scoped lang="scss">
.box{
  height: 95%;
  width: 40%;
  // margin-top: 2%;
  align-self: center;
  align-items: center;
  background-color: bisque;
  border-radius: 15px;
  .textT{
    font-size: 2em;
    margin-top: 5px;
  }
  .textL{
    text-align: start;
    margin-left: 12%;
  }
  .tb{
    width: 80%;
    margin: 0 auto;
  }
  .tbc{
    margin-left: 10%;
  }
  .tbp{
    width: 80%;
    margin: 0 auto;
    position: relative;
  }
  .eye{
    position: absolute;
    bottom: 50%;
    right: 14%;
    transition: 0.3s;
    &:hover{
      color: rgb(255, 173, 65);
    }
  }
  .checkbox{
    align-items: start;
    display: flex;
    .leftC{
    margin-left: 12%;
    margin-top: 1%;
  }
  .textC{
    margin-left: 1%;
  }
  }
  .logbox{
    margin: 0 auto;
    display: flex;
    height: 15%;
    width: 80%;
    justify-content: space-between;
    .button{
      width: 35%;
      height: 55%;
      border: none;
      background-color: rgb(231, 152, 96);
      border-radius: 10px;
      .bc{
        text-decoration: none;
        color: black;
      }
    }
  }
}

.buttonR{
      width: 11.2vw;
      height: 7.9vh;
      border: none;
      background-color: rgb(231, 152, 96);
      border-radius: 10px;
}
.root {
    --popper-theme-background-color: #333333;
    --popper-theme-background-color-hover: #333333;
    --popper-theme-text-color: #ffffff;
    --popper-theme-border-width: 0px;
    --popper-theme-border-style: solid;
    --popper-theme-border-radius: 6px;
    --popper-theme-padding: 32px;
    --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
  }
</style>
