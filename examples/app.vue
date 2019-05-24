<style lang="css">
      /* .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
    }
     .vertical-center-modal .lp-modal{
            top: 0;
        } */
</style>
<template>
  <div style="padding:15px;">
    <lp-button type="primary" size="large">Large</lp-button>
    <lp-button type="primary" size="large" icon="el-icon-eleme">Large</lp-button>
    <lp-button type="primary">默认</lp-button>
    <lp-button type="primary" icon="el-icon-eleme">默认</lp-button>
    <lp-button type="primary" icon="el-icon-edit" size="small">测试1</lp-button>
    <lp-button type="primary" size="small">small</lp-button>
    <lp-button type="warning" icon="el-icon-edit">默认1</lp-button>
    <lp-button type="danger">默认2</lp-button>
    <lp-button plain @click="test">测试2</lp-button>
    <lp-button plain type="danger">测试2</lp-button>
    <lp-button type="primary" :loading="true">加载中</lp-button>
    <lp-button type="text">取消</lp-button>

    <lp-modal
        v-model="modal1"
        title="Fullscreen Modal"
        :loading="loading"
  
    > 
       <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
            <p>Will you delete it?</p>
    </lp-modal>
     <lp-spin></lp-spin>
  </div>
</template>

<script>
  import "./assets/styles/common.css";
  import img1 from "examples/assets/images/ajax-loader.gif";
  export default {
    data(){
      return {
         modal1: false,
         loading: true,
          value: ''
      };
    },
    mounted(){
              // this.$Modal.confirm({
              //       title: 'Title',
              //       content: '<p>The dialog box will be closed after 2 seconds</p>',
              //       loading: true,
              //       closable:true,
              //       onOk: () => {
              //           setTimeout(() => {
              //               this.$Modal.remove();
              //           }, 2000);
              //       }
              //   });
              
    },
    methods:{
         test(){
           this.modal1 = true;
         },
         ok(){
            setTimeout(() => {
                this.modal1 = false;
            }, 2000);
         },
         cancel(){
           console.log("取消")
         }
    }
  };
</script>
