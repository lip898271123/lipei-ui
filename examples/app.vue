<template>
  <div>
   <zy-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></zy-switch>
   <div class="lp_test"></div>
   <!-- <div>{{msg}}</div> -->
   <!-- <i class="iconfont icon-caozuo_suoxiao"></i>
   <div class="lp_test"></div> -->
  </div>
</template>

<script>
  import "./assets/styles/common.css";
  export default {
    data(){
      return {
        msg:"李佩的ui库",
        value2:true
      };
    }
  };
</script>
