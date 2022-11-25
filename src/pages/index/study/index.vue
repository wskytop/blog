<template>
  <div class="wrap">
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="item-header">
          <div class="flex-row-b">
            <span class="title">{{ item }}</span>
            <span class="title-more" @click="goDetail(index)"
              ><span v-if="!isMobile">more </span>>></span
            >
          </div>
        </div>
        <!-- <div class="item-content flex-row-center">
          <div class="item-content-img">
            <img
              src="https://image.dahuangf.com/hornet_erp/1666598296426.jpg"
            />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useHandler } from '@/static/hooks'

const $router = useRouter()
const { isMobile } = useHandler()

// 展示的数据
const list = reactive(['Expanding Cards'])
const goDetail = (index) => {
  $router.push(`/w-blog/study/demo/${index + 1}?hide=true`)
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
        &-more {
          white-space: nowrap;
          padding: 8px 20px;
          text-align: center;
          border: 0;
          border-radius: 0.5rem;
          background: #0cc;
          box-shadow: 0 3px 10px rgb(0 0 0 / 6%), 0 3px 10px rgb(0 0 0 / 13%);
          -webkit-transition: all 0.1s;
          transition: all 0.1s;
          display: inline-block;
          line-height: 1.5rem;
          cursor: pointer;
          color: #fff !important;
        }
      }
    }
  }
}
</style>
