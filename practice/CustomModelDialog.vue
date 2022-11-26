<template>
  <el-dialog
    title="自定义模型"
    :visible.sync="outerDialogVisible"
    width="40%"
    center
    :before-close="handleClose"
  >
    <el-dialog
      title="请输入模型名称"
      width="20%"
      :visible.sync="innerDialogVisible"
      append-to-body
      center
      ><div class="model-name">
        <div class="model-name-title">名称 :</div>
        <el-input v-model="inputName" placeholder="自定义模型1"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="clearDialogVisible()">取 消</el-button>
        <el-button type="primary" @click="confirm()">确认</el-button>
      </span>
    </el-dialog>
    <el-checkbox-group v-model="checkList">
      <el-checkbox
        v-for="item in checkArr"
        :key="item"
        :label="item"
      ></el-checkbox>
    </el-checkbox-group>
    <span slot="footer" class="dialog-footer">
      <el-button @click="clearDialogVisible()">取 消</el-button>
      <el-button type="primary" @click="saveModel()">保存模型</el-button>
    </span>
  </el-dialog>
</template>
<script>
/**
 * 底部菜单（自定义模型）组件
 * @author: Gao Lu
 * @Date: 2022.11.22
 */
export default {
  name: "CustomModelDialog",
  components: {},
  data() {
    return {
      outerDialogVisible: false,
      innerDialogVisible: false,
      inputName: "",
      model: {
        name: "",
      },
      checkList: [],
      checkArr: [
        "永久基本农田",
        "建设用地减量化",
        "一般耕地种林",
        "一般耕地",
        "基本农田被违规占用",
        "一般耕地抛荒",
        "高标准农田",
        "一般耕地被违规占用",
        "减量化复垦地块后种林",
      ],
    };
  },
  mounted() {
    // 监听自定义模型
    this.$bus.$on("customModelEvent", () => {
      this.customModelEvent();
    });
    // 点击底部菜单SVG，且有弹窗打开时触发（弹窗关闭询问）
    this.$bus.$on("handleClose", () => {
      if (this.dialogVisible) {
        this.handleClose();
      }
    });
  },
  beforeDestroyed() {
    // 当容器销毁时，需要停止监听该事件
    this.$bus.$off("customModelEvent");
  },
  methods: {
    // 弹窗关闭时询问
    handleClose() {
      if (this.outerDialogVisible) {
        this.$confirm("确认关闭吗?").then(() => {
          this.clearDialogVisible();
        });
      }
    },
    clearDialogVisible() {
      this.outerDialogVisible = false;
      this.innerDialogVisible = false;
    },
    // 自定义模型
    customModelEvent() {
      this.outerDialogVisible = true;
      console.log("custom model");
    },
    saveModel() {
      this.innerDialogVisible = true;
    },
    confirm() {
      this.$message.success("模型以保存");
      this.model.name = this.inputName;
    },
  },
};
</script>
<style lang="less" scoped>
.model-name {
  width: 100%;
  height: 100%;
  display: flex;
  &-title {
    width: 20%;
    height: 100%;
    color: #fff;
    font-size: 18px;
    line-height: 38px;
  }
}
</style>
