<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  data() {
    return{
      account:"",
      password:"",
      password2:"",
      passwordC:0,
      acc:[],
      show:0,
      show2:0,
      aa:""
    }
  },
  components: {
    RouterLink,
  },
  methods:{
    register(){
      this.acc = JSON.parse(localStorage.getItem("account")) || acc == []
      for(let i = 0 ; i<this.acc.length ; i++){
        if( this.acc[i] == this.account){
            this.passwordC = 3
            setTimeout(()=>{this.passwordC = 0},5000)
        }
      }
      if(this.password == this.password2 && this.account != this.password && this.passwordC != 3){
        if(this.acc == false){
        this.acc = []
        }
        this.acc.push(this.account)
        this.acc.push(this.password)
        console.log(this.acc)
        localStorage.setItem("account",JSON.stringify(this.acc))
        window.location.assign("/")
      }else if(this.password != this.password2){
        this.passwordC = 1
        setTimeout(()=>{
          this.passwordC = 0
        },5000)
      } else if(this.account == this.password){
        this.passwordC = 2
        setTimeout(()=>{
          this.passwordC = 0
        },5000)
      }

    },
    clickC(){
      let e = document.getElementsByName("eye")
      let acc = document.getElementById("acc")
      if(e.class=="fa-solid fa-eye fa-lg eye"){
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
      if(e2.class=="fa-solid fa-eye fa-lg eye"){
        e2.class="fa-solid fa-eye-slash fa-lg eye"
        acc2.type="text"
        this.show2 = 1
      } else{
        e2.class="fa-solid fa-eye fa-lg eye"
        acc2.type="password"
        this.show2 = 0
      }
    }
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
      <p>{{ this.account }}</p>
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
      <label class="tbc" for="floatingInput">請在這裡再次輸入密碼</label>
    </div>
    <div class="checkbox">
      <p v-if="this.passwordC == 1" class="textL" style="color: red; transition: 0.6s;">請確認你輸入的密碼是否一致</p>
      <p v-if="this.passwordC == 2" class="textL" style="color: red; transition: 0.6s;">請確認你輸入的帳號密碼是否重複了</p>
      <p v-if="this.passwordC == 3" class="textL" style="color: red; transition: 0.6s;">此帳號已註冊，請選擇其他帳號名稱</p>
    </div>
    <div class="logbox">
      <button type="button" class="button"><RouterLink to="/" class="bc">取消</RouterLink></button>
      <button type="button" class="button" @click="register()">註冊</button>
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
</style>
