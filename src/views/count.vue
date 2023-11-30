<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  data() {
    return{
      logaccount:"",
      balence:"",
    }
  },
  components: {
    RouterLink,
  },
  methods:{
    login(){

    }
  },
  mounted(){
    this.logaccount =localStorage.getItem("logacc")
  }
};
// 收支表預計內容與變數
// 1.取得帳號顯示在畫面上。完成。
// 2.取得本地資料庫的數據顯示在收支盈餘上，物件生成方式搞定。
// 3.建立圖表收支，設置收支項目(如醫療、早午晚餐、交通)，建立日期可以設置每七天或是每月開支折線圖，物件設置方式搞定。
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
                <nav aria-label="Page navigation example">
                    <!-- 使用父子層，只要改變子層的內容就好了 -->
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