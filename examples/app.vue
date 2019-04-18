<style lang="css" scoped>
    .demo-spin-container{
    	  display: inline-block;
        width: 200px;
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
<template>
  <div>
   <!-- <zy-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></zy-switch> -->
   <!-- <div class="lp_test"></div> -->
   <!-- <div>{{msg}}</div> -->
   <!-- <i class="iconfont icon-caozuo_suoxiao"></i>
   <div class="lp_test"></div> -->
   <lp-spin size="large" fix></lp-spin> 
   <!-- <div class="demo-spin-container">
        <lp-spin size="large" fix :spinning="spinning">
           <img src="./assets/images/ajax-loader.gif" />
           <div>Loading</div>
        </lp-spin> 
    </div> -->
  </div>
</template>

<script>
  import "./assets/styles/common.css";
  export default {
    data(){
      return {
        msg:"李佩的ui库",
        value2:true,
        spinning:true
      };
    }
  };
</script>
