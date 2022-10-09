<template>
  <div class="wrap">
    <div class="list">
      <div class="item" v-for="(item,index) in list" :key="index">
        <div class="item-header">
          <div><span class="title">这是一个标题</span></div>
          <span class="tag">
            <el-icon class="tag-icon">
              <LocationFilled />
            </el-icon>
            <span class="tag-name">vue</span>
          </span>
        </div>
        <div class="item-content flex-row-center">
          <div class="item-content-img">
            <!-- <img src="https://image.dahuangf.com/hornet_erp/1663570119014.jpg" alt=""> -->
          </div>
          <span class="item-content-msg">webpack 是什么webpack 是自动化打包解决方案，也可以理解为是一个模块打包机。它帮助我们分析项目结构，找到 JavaScript
            模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript 等），并将其打包为合适的格式以供浏览器使用 webpack 常见有哪些配置 Entry：入口，Webpack 执行构建的第一步将从
            Entry 开始</span>
        </div>
        <div class="item-footer">
          <div class="item-footer-l">
            <el-icon color="#999" :size="15" style="position:absolute;top:6px">
              <Calendar />
            </el-icon>
            <span style="margin-left:20px">2022/10/12</span>
            <a class="item-footer-l-tag" href="">vue</a>
          </div>
          <a class="item-footer-r">more >></a>
        </div>
      </div>
      <div style="text-align: center;">
        <div style="display:inline-block;float: none;margin:30px auto">
          <el-pagination background layout="prev, pager, next" 
          :total="30" 
          @current-change="changeCurrent"
          @prev-click="pre"
          @next-click="next"
          />
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
import { LocationFilled, Calendar } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
const list = reactive([{}, {}, {}, {}, {}])
</script>

<style lang="scss">
.list {
  max-width: 92rem;
  padding: 0;
  margin: 0 auto;
  list-style: none;
  overflow: auto;

  .item {
    background: var(--el-color-primary-light-9);
    margin: 25px;
    box-shadow: 1px 2px 3px #ddd;
    border: 1px solid #ddd;
    border-radius: 3px;

    &-header {
      padding: 15px;
      position: relative;

      .title {
        font-size: 1.8em;
        display: block;
        padding: 7px 80px 7px 15px;
        border-left: 4px solid #0cc;
        color: #444;
        line-height: 1.1em;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;

        &:hover {
          color: #0cc;
          padding-left: 8px;
        }
      }

      .tag {
        background: #0cc;
        position: absolute;
        display: inline-block;
        padding: 8px;
        padding-left: 7px;
        text-align: center;
        color: #fff;
        top: 16px;
        right: -10px;
        box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
        cursor: pointer;

        &:after {
          position: absolute;
          content: "";
          top: 34px;
          right: 0;
          border-bottom: 10px solid transparent;
          border-left: 10px solid #099;
        }

        &-icon {
          transform: translateY(1px);
        }

        &-name {
          font-size: 14px;
          margin-left: 2px
        }
      }
    }

    &-content {
      font-size: 16px;
      padding: 15px;
      min-height: 18rem;
      background: #f9f9f9;
      border-top: 1px solid #e8e8e8;
      border-bottom: 1px solid #e8e8e8;
      color: #444;

      &-img {
        width: 30rem;
        height: 15rem;
        margin-right: 20px;
        flex-shrink: 0;
        // img{
        //   width:30rem
        // }
      }

      &-msg {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
      }
    }

    &-footer {
      box-sizing: border-box;
      font-size: 1.4em;
      line-height: 1.6em;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-l {
        position: relative;
        color: #999;

        &-tag {
          color: #fff;
          background: #4cae4c;
          display: inline-block;
          text-decoration: none;
          font-weight: normal;
          height: 18px;
          line-height: 18px;
          padding: 0 5px 0 10px;
          position: relative;
          border-radius: 0 5px 5px 0;
          margin: 5px 10px 5px 18px;

          &:before {
            content: " ";
            width: 0px;
            height: 0px;
            position: absolute;
            top: 0;
            left: -18px;
            border: 9px solid transparent;
            border-right: 9px solid #4cae4c;
          }

          &:after {
            content: " ";
            width: 4px;
            height: 4px;
            background-color: #fff;
            border-radius: 4px;
            box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 30%);
            position: absolute;
            top: 7px;
            left: 2px;
          }
        }
      }

      &-r {
        padding: 8px 20px;
        text-align: center;
        border: 0;
        border-radius: 0;
        background: #0cc;
        box-shadow: 0 3px 10px rgb(0 0 0 / 6%), 0 3px 10px rgb(0 0 0 / 13%);
        -webkit-transition: all 0.1s;
        transition: all 0.1s;
        display: inline-block;
        line-height: 1em;
        cursor: pointer;
        color: #fff !important;
      }
    }
  }
}
.el-pagination.is-background .el-pager li:not(.is-disabled).is-active {
  background-color:#0cc !important;
 }
</style>