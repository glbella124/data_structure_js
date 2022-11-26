<template>
  <div id="bottomMenus">
    <!-- 底部菜单动态SVG底座 -->
    <BottomMenuSvg id="svgBox" @changeShowBottomMenusStatus="changeShowBottomMenusStatus()" />
    <!-- 申请任务弹窗 -->
    <CreateTaskForm @changeShowBottomMenusStatus="changeShowBottomMenusStatus" />
    <!-- 我的任务弹窗 -->
    <MyMission @changeShowBottomMenusStatus="changeShowBottomMenusStatus" />
    <!-- 同屏对比弹窗 -->
    <SameScreenComparison
      @changeShowBottomMenusStatus="changeShowBottomMenusStatus"
    />
    <!-- 上传数据弹窗 -->
    <UploadingData @changeShowBottomMenusStatus="changeShowBottomMenusStatus" />
    <!-- 自定义模型 -->
    <CustomModelDialog />
    <!-- 底部菜单主体 -->
    <div
      id="menusBox"
      :style="{
        width: showBottomMenusStatus ? '981px' : '0px',
        height: showBottomMenusStatus ? '200px' : '0px',
        border: showBottomMenusStatus ? '1px solid #00aaff' : 'none'
      }"
    >
      <!-- 模块遍历渲染也是menus对象的第一层数组 -->
      <div
        class="bottomMenus_box"
        v-for="(item, index) in menus"
        :key="index"
        :style="{ width: item.width ? item.width : 'auto' }"
      >
        <!-- 模块标题 -->
        <div class="bottomMenus_box_title">{{ item.title }}</div>
        <!-- 模块下的菜单主体 -->
        <div class="bottomMenus_box_main">
          <!-- 遍历渲染每个模块下的子菜单，也是menus数组中subMenu数组 -->
          <div
            class="colBtuMenu"
            @click="changeBottomMenu(item.index, subItem.index, subItem.clickEmit)"
            v-for="(subItem, subIndex) in item.subMenu"
            :key="subIndex"
          >
            <!-- 选中状态的背景高亮（舍弃） -->
            <div
              :class="
                ifMenuIndex(item.index, subItem.index) ? 'colBtuMenuShadow' : ''
              "
            ></div>

            <!-- 子菜单图标的选择性渲染 -->
            <el-image class="BtuMenu_hover" :src="returnBgImage(subItem.bgImage + '-a')"></el-image>
            <el-image class="BtuMenu" :src="returnBgImage(subItem.bgImage)"></el-image>
            <!-- 子菜单标题 -->
            <div class="BtuMenu_title">
              {{ subItem.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 底部菜单组件
 * @author: LiuMengxiang
 * @Date: 2022年11月14-18日
 */
import BottomMenuSvg from "./BottomMenuSvg.vue";
import CreateTaskForm from "./BottomForm/CreateTaskForm.vue";
import MyMission from "./BottomForm/MyMission.vue";
import SameScreenComparison from "./BottomForm/SameScreenComparison.vue";
import UploadingData from "./BottomForm/UploadingData.vue";
import CustomModelDialog from "./BottomForm/CustomModelDialog.vue";
export default {
  name: "BottomMenus",
  components: {
    BottomMenuSvg,
    CreateTaskForm,
    MyMission,
    SameScreenComparison,
    UploadingData,
    CustomModelDialog
  },
  data() {
    return {
      // 弹窗打开状态
      dialogVisibleStatus: false,
      // 菜单主体显示状态（默认false）
      showBottomMenusStatus: false,
      // 底部菜单对象
      menus: [
        {
          index: 0,
          width: "164px",
          title: "任务申请",
          subMenu: [
            { index: 0, title: "申请任务", bgImage: "sqrw", clickEmit: "sqrw" },
            { index: 1, title: "我的任务", bgImage: "wdrw", clickEmit: "wdrw" }
          ]
        },
        {
          index: 1,
          width: "509px",
          title: "疑点分析",
          subMenu: [
            {
              index: 0,
              title: "疑点审计",
              bgImage: "ydsj",
              clickEmit: "caseAuditEvent"
            },
            {
              index: 1,
              title: "标记疑点",
              bgImage: "bjyd",
              clickEmit: "labelCaseEvent"
            },
            { index: 2, title: "同屏对比", bgImage: "tpdb", clickEmit: "tpdb" },
            {
              index: 3,
              title: "卷帘对比",
              bgImage: "jldb",
              clickEmit: "JLControl"
            },
            { index: 4, title: "上传数据", bgImage: "scsj", clickEmit: "scsj" },
            {
              index: 5,
              title: "自定义模型",
              bgImage: "zdymx",
              clickEmit: "customModelEvent",
            },
          ],
        },
        {
          index: 2,
          width: "94px",
          title: "疑点报告",
          subMenu: [{ index: 0, title: "报告输出", bgImage: "bgsc" }]
        },
        {
          index: 3,
          width: "94px",
          title: "现场勘查",
          subMenu: [{ index: 0, title: "发到手机", bgImage: "fdsj" }]
        }
      ]
    };
  },
  mounted() {},
  destroy() {},
  props: [],
  methods: {
    // 根据菜单父级index和子菜单index，判断全局变量已选中底部菜单的index对比，返回状态。
    ifMenuIndex(index, subIndex) {
      // return (
      //   this.$store.state.bottomMenuIndexs.index == index &&
      //   this.$store.state.bottomMenuIndexs.subIndex == subIndex
      // );
      if (index == 1) {
        if (subIndex == 0 || subIndex == 1) {
          return (
            this.$store.state.bottomMenuIndexs.index == index &&
            this.$store.state.bottomMenuIndexs.subIndex == subIndex
          );
        }
        // this.$store.state.bottomMenuIndexs.index = 1
      }
    },
    // 根据菜单父级index和子菜单index，更新全局变量。
    changeBottomMenu(index, subIndex, clickEvent) {
      // 该逻辑可能会舍弃
      this.$store.commit("changeBottomMenu", {
        index: index,
        subIndex: subIndex
      });
      if (clickEvent) {
        // 调用全局事件总线中的指定事件
        this.$bus.$emit(clickEvent);
      }
    },
    // 根据菜单参数bgImage,菜单父级index和子菜单index,判断全局变量已选中底部菜单的index对比，返回不同状态下的icon图标地址。
    returnBgImage(bgImage, index, subIndex) {
      if (this.$store.state.bottomMenuIndexs.index == index && this.$store.state.bottomMenuIndexs.subIndex == subIndex) {
        return "/static/images/bottomMenuIcon/" + bgImage + "-a.png";
      } else {
        return "/static/images/bottomMenuIcon/" + bgImage + ".png";
      }
    },
    // 当用户点击svg底座时，切换底部菜单显示隐藏状态。（较难理解部分，如有疑问，请联系LiuMengxiang）
    changeShowBottomMenusStatus(state) {
      // 如果接收对象不为空
      if (state != undefined) {
        // 切换底部菜单显示隐藏状态
        this.showBottomMenusStatus = state;
        // 并切换弹窗显示隐藏状态
        this.dialogVisibleStatus = !state;
      } else if (!this.showBottomMenusStatus && this.dialogVisibleStatus) {
        // 如果底部菜单为隐藏状态且弹窗为显示状态，则为弹窗关闭询问。
        this.$bus.$emit("handleClose");
      } else {
        // 否则直接切换底部菜单显示隐藏状态
        this.showBottomMenusStatus = !this.showBottomMenusStatus;
      }
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
@borderColor: #00aaff;
@topTitleMinLeft: transparent;
// 底部菜单
#bottomMenus {
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column-reverse;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  overflow: hidden;
  // svgBox
  #svgBox {
    width: 220px;
    height: 70px;
    overflow: hidden;
    z-index: 2;
  }
}
// menusBox
#menusBox {
  background-color: rgba(0, 47, 86, 0.6);
  z-index: 1;
  border: 1px solid #00aaff;
  position: absolute;
  bottom: 60px;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  transition: width 0.2s, height 0.5s;
  &::before {
    content: "";
    position: absolute;
    bottom: -30px;
    width: 100%;
    height: 30px;
    background-image: linear-gradient(to top, #00aaff, #00aaff32);
    clip-path: polygon(0 0, 100% 0, 50% 100%, 0 0);
  }
}
.bottomMenus {
  &_box {
    overflow: hidden;
    height: 155px;
    position: relative;
    background: linear-gradient(to left, #00aaff, #00aaff) left top no-repeat,
      linear-gradient(to bottom, #00aaff, #00aaff) left top no-repeat,
      linear-gradient(to left, #00aaff, #00aaff) right top no-repeat,
      linear-gradient(to bottom, #00aaff, #00aaff) right top no-repeat,
      linear-gradient(to left, #00aaff, #00aaff) left bottom no-repeat,
      linear-gradient(to bottom, #00aaff, #00aaff) left bottom no-repeat,
      linear-gradient(to left, #00aaff, #00aaff) right bottom no-repeat,
      linear-gradient(to left, #00aaff, #00aaff) right bottom no-repeat;
    background-size: 3px 21px, 21px 3px, 3px 21px, 21px 3px;
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 54, 179, 0.3);
      z-index: 9999;
    }
    &_title {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: linear-gradient(to left, @topTitleMinLeft, @borderColor, @topTitleMinLeft);
      font-size: 16px;
      font-family: pingfangSC;
      font-weight: 300;
      color: #ffffff;
      line-height: 60px;
      z-index: 99999;
    }
    &_main {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: space-evenly;
      align-items: center;
      .colBtuMenu {
        display: flex;
        flex-wrap: nowrap;
        align-content: center;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        position: relative;
        cursor: pointer;
        z-index: 99999;
        &:hover {
          &::before {
            content: "";
            position: absolute;
            width: 110%;
            height: 110%;
            border-radius: 10px;
            z-index: 999;
            box-shadow: 0px 0px 5px 1px #00f5ff;
          }
          .BtuMenu {
            display: none;
          }
          .BtuMenu_hover {
            display: block;
          }
          .BtuMenu_title {
            color: #00f5ff;
          }
        }
        .colBtuMenuShadow {
          content: "";
          position: absolute;
          width: 110%;
          height: 110%;
          border-radius: 10px;
          z-index: 999;
          box-shadow: 0px 0px 5px 3px #00f5ff;
        }
        .BtuMenu,
        .BtuMenu_hover {
          width: 50px;
          height: 50px;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .BtuMenu {
          display: block;
        }
        .BtuMenu_hover {
          display: none;
        }
        & > .BtuMenu_title {
          font-size: 14px;
          font-family: pingfangSC;
          font-weight: bold;
          color: #ffffff;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
