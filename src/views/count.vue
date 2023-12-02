<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  data() {
    return{
      logaccount:"",
      balence:"",
      earn:[],
      spent:[],
      date:"",
      type:["早餐","午餐","晚餐","飲料","交通","購物","娛樂","日用品","房租","醫療","社交","其他"],
      cost:"",
      ins:"",
      index:""
    }
  },
  components: {
    RouterLink,
  },
  methods:{
    earnM(){
      // 觸發彈出視窗，開始輸入元素。(序號自行排列)，數值一定要先進來，所以彈出視窗一定是優先。
      this.earn = JSON.parse(localStorage.getItem("earn"))
      if(this.earn == null){
        this.earn = []
        this.earn.push({number:0 ,date:this.date ,type:this.type[this.index] ,cost:this.cost ,introduce:this.ins})
      } else{
        this.earn.push({number:this.earn.length ,date:this.date ,type:this.type[this.index] ,cost:this.cost ,introduce:this.ins})
        }
      localStorage.setItem("earn",JSON.stringify(this.earn))
      console.log(JSON.stringify(this.earn))
      // console.log(this.earn)
      // console.log(this.earn[3].cost)
    },
    spentM(){
      this.spent = JSON.parse(localStorage.getItem("spent"))
      console.log(this.spent)
      if(this.spent == null){
        this.spent = []
        this.spent.push({number:0 ,date:this.date ,type:this.type[this.index] ,cost:this.cost ,introduce:this.ins})
        // console.log(this.spent)
        // console.log(this.spent.length)
      } else{
        this.spent.push({number:this.spent.length ,date:this.date ,type:this.type[this.index] ,cost:this.cost ,introduce:this.ins})
        }
      localStorage.setItem("spent",JSON.stringify(this.spent))
      console.log(JSON.stringify(this.spent))
            console.log(this.spent)
      // console.log(this.earn[3].cost)
    },
    // delete(){

    // }
  },
  mounted(){
    this.logaccount =localStorage.getItem("logacc")
          // localStorage.removeItem("spent")
          // localStorage.removeItem("earn")
  }
};
// 收支表預計內容與變數
// 1.取得帳號顯示在畫面上。完成。
// 2.取得本地資料庫的數據顯示在收支盈餘上，物件生成方式搞定。
// 3.建立圖表收支，設置收支項目(如醫療、早午晚餐、交通)，建立日期可以設置每七天或是每月開支折線圖，物件設置方式搞定。
// 收支圖表可以用父子層切換，就可以讓畫面不更動的情況下只更動部分元素
// 4.刪除按鈕，必須要抓出資料把資料刪掉，物件生成方式搞定。
// 5.必須要使用物件來抓取資料，否則陣列會無法篩選收支項目，搞定。

// 待解決問題
// 資料超過一定數量超出畫面範圍時，該如何呈現資料
// 方法一，bootstrap的換頁，但需要考量多少筆資料換一次頁
// 方法二，尋找類似overflow的方法，讓多餘的顯示可以用...呈現，可以與方法一結合，分頁可以設置成每一日一個分頁。
// 跳出視窗的呈現，應該可以找到bootstrap的方法

// 刪除用彈出視窗，https://bootstrap5.hexschool.com/docs/5.1/components/modal/

</script>

<template>
    <div class="box">
        <div class="left">
            <p>收支紀錄表</p>
            <P>{{this.logaccount}}</P>
            <p>你的收支盈餘</p>
            <p>{{this.balence}}</p>
            <button type="button" class="button" @click=""><RouterLink to="/" class="bc">登出</RouterLink></button>
        </div>
        <div class="right">
            <div class="incomeBox">
              <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">請輸入</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>日期</p>
        <input type="date" name="" id="" v-model="this.date">
        <p>{{ this.date }}</p>
        <p>種類</p>
          <select v-model="this.index" class="select2">
            <option value="">請選擇</option>
            <option :value="index" v-for="(item, index) in type">{{ item }}</option>
          </select>
        <p>{{ this.type[this.index] }}</p>
        <p>金額</p>
        <input type="number" name="" id="" v-model="this.cost">
        <p>{{ this.cost }}</p>
        <p>說明</p>
        <input type="text" name="" id="" v-model="this.ins">
        <p>{{ this.ins }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="border: none;">關閉</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" style="background-color: red;border: none" @click="spentM">支出</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" style="border: none;" @click="earnM">儲存</button>
      </div>
    </div>
  </div>
</div>

              <!-- 使用父子層，只要改變子層的內容就好了 -->
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.box{
    height: 100%;
    width: 100%;
    display: flex;
    .left{
        height: 100%;
        width: 30%;
    }
    .right{
        height: 100%;
        width: 70%;
        .incomeBox{
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
        }
    }
}
</style>