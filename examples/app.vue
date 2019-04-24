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

    .demo-split{
        height: 200px;
        width:500px;
        border: 1px solid #dcdee2;
    }
    .demo-split-pane{
        padding:10px;
    }
</style>
<template>
  <div>
   <!-- <zy-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></zy-switch> -->
   <!-- <div class="lp_test"></div> -->
   <!-- <div>{{msg}}</div> -->
   <!-- <i class="iconfont icon-caozuo_suoxiao"></i>
   <div class="lp_test"></div> -->
   <!-- <div class="demo-spin-container">
      <lp-spin size="large" fix :spinning="spinning"></lp-spin> 
   </div> -->
   <!-- <div class="demo-spin-container">
        <lp-spin size="large" fix :spinning="spinning">
           <img src="./assets/images/ajax-loader.gif" />
           <div>Loading</div>
        </lp-spin> 
    </div> -->
    <!-- <div class="demo-split">
        <lp-split v-model="split1" mode="vertical">
            <div slot="top" class="demo-split-pane">
                左边面板
            </div>
            <div slot="bottom" class="demo-split-pane">
                右边面板
            </div>
        </lp-split>
    </div> -->
    111111111
  </div>
</template>

<script>
  import "./assets/styles/common.css";
  import img1 from "examples/assets/images/ajax-loader.gif";
  export default {
    data(){
      return {
        msg:"李佩的ui库",
        value2:true,
        spinning:true,
        split1:0.5
      };
    },
    mounted(){
      this.$Spin.show({
          render: (h) => {
              return h('img', {
                'attrs':{
                    src:'examples/assets/images/ajax-loader.gif'
                },
              })
          }
      });
      // setTimeout(() => {
      //     this.$Spin.hide();
      // },3000);
     }
  };
</script>
