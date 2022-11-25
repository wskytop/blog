<template>
  <div class="wrap">
    <div class="list" v-loading="listLoading">
      <div class="item" v-for="(item, index) in showData" :key="index">
        <div class="item-header">
          <div>
            <span class="title">{{ item.title }}</span>
          </div>
          <span class="tag">
            <el-icon v-if="!isMobile" :size="10"><Notebook /></el-icon>
            <span class="tag-name">{{ item.tags }}</span>
          </span>
        </div>
        <div class="item-content flex-row-center">
          <div v-if="!isMobile" class="item-content-img">
            <img
              src="https://image.dahuangf.com/hornet_erp/1666598296426.jpg"
            />
          </div>
          <span class="item-content-msg" @click="goDetail(index)">{{
            item.description
          }}</span>
        </div>
        <div class="item-footer">
          <div class="item-footer-l">
            <el-icon
              color="#999"
              :size="15"
              style="vertical-align: -0.1rem; margin-right: 0.6rem"
            >
              <Calendar />
            </el-icon>
            <span>{{ item.date }}</span>
            <!-- <span class="item-footer-l-tag">{{ item.tags }}</span> -->
          </div>
          <span class="item-footer-r" @click="goDetail(item)"
            >more<span v-if="!isMobile"> >></span></span
          >
        </div>
      </div>
    </div>
    <div style="text-align: center">
      <div style="display: inline-block; float: none; margin: 30px auto">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="showLength"
          @current-change="changeCurrent"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Notebook, Calendar } from '@element-plus/icons-vue'
import { ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import useStore from '@/store'
import article from '@/static/article/article'
import { useHandler } from '@/static/hooks'

const $router = useRouter()
const { isMobile } = useHandler()
const listLoading = ref(false)
const { nav } = useStore()
// 展示的数据
const showData = ref({})
// 当前页码
const current = ref(1)
const showLength = ref(article.length)
// 监听搜索条件的变化
watch(
  () => nav.searchContent,
  (n) => {
    listLoading.value = true
    setTimeout(() => {
      const list = article.filter((i) => {
        const reg = new RegExp(nav.searchContent)
        return reg.test(i.title)
      })
      showLength.value = list.length
      showData.value = list.slice(0, 10)
      listLoading.value = false
    }, 300)
  }
)
showData.value = article.slice(0, 10)
const changeCurrent = (cur, a, b) => {
  current.value = cur
  showData.value = article.slice((cur - 1) * 10, cur * 10)
}
const goDetail = (item) => {
  $router.push(`/w-blog/detail?id=${item.id}`)
}
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
        white-space: nowrap;
        font-size: 18px;
        display: block;
        padding: 7px 80px 7px 15px;
        border-left: 4px solid #0cc;
        color: #444;
        line-height: 1.1rem;
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
          content: '';
          top: 34px;
          right: 0;
          border-bottom: 10px solid transparent;
          border-left: 10px solid #099;
        }

        &-name {
          font-size: 14px;
          margin-left: 2px;
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
        margin-left: 5px;
        flex-shrink: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }

      &-msg {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .mobile {
        padding: 0;
        &-img {
          display: none;
        }
      }
    }

    &-footer {
      box-sizing: border-box;
      font-size: 1.4rem;
      line-height: 1.6rem;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-l {
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
            content: ' ';
            width: 0px;
            height: 0px;
            position: absolute;
            top: 0;
            left: -18px;
            border: 9px solid transparent;
            border-right: 9px solid #4cae4c;
          }

          &:after {
            content: ' ';
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
        border-radius: 0.2rem;
        background: #0cc;
        box-shadow: 0 3px 10px rgb(0 0 0 / 6%), 0 3px 10px rgb(0 0 0 / 13%);
        -webkit-transition: all 0.1s;
        transition: all 0.1s;
        display: inline-block;
        line-height: 1rem;
        cursor: pointer;
        color: #fff !important;
      }
    }
  }
}
.el-pagination.is-background .el-pager li:not(.is-disabled).is-active {
  background-color: #0cc !important;
}
</style>
