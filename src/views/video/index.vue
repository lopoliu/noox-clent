<template>
  <div class="detail">
    <div v-if="showDialog">
      <dialog-comp
          :show-dialog="showDialog"
          :show-cancel="showCancel"
          :data="videoDetail"
          v-if="videoDetail"
          :key="new Date().getTime()">
        <template #context="obj">
          <div class="dialog-context">
            <span>资源标题: {{ obj.item.title.substring(0, 10) }}...</span>
            <span>资源积分: {{ obj.item.price }}</span>
            <span>链接有效期: 3天</span>
          </div>
        </template>
        <template v-slot:operation>
          <div v-if="videoDetail.btlink === null">
            <button @click="buyResource">确认</button>
          </div>
          <div v-else>
            <button @click="copyBTLink">复制链接</button>
          </div>
          <div>
            <button @click="close">关闭</button>
          </div>

        </template>
      </dialog-comp>
    </div>
    <nav-bar
        :show-left="true"
        :show-right="true"
        top-title="详情"
    ></nav-bar>
    <div class="title">
      <span>
        {{ this.videoDetail.title }}
      </span>
    </div>
    <div class="amount">
      <span class="first-span">{{ videoDetail.downCount }}</span>
      <span>{{ videoDetail.duration }}</span>
      <span>{{ videoDetail.price }}</span>
      <span>{{ videoDetail.tag }}</span>
    </div>

    <div class="img-items">
      <ul>
        <li v-for="(item, index) in videoDetail.images" :key="index">
          <img :src="'http://192.168.0.110/images/'+item" alt="">
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="doc">《下载教程》</div>
      <button class="resource-btn" @click="getResource">
        <span v-if="this.videoDetail.btlink !== null">复制下载链接</span>
        <span v-else>获取下载链接</span>
      </button>
    </div>
    <div class="end">
      没有更多了~~~~~~
    </div>
  </div>
</template>

<script>

import {resourceBuyApi, resourceDetailApi} from "@/api/api";
import {getLocalStorage} from "@/utils/utils";
import DialogComp from "@/components/DialogComp.vue";

export default {
  name: "VideoIndex",
  components: {
    "dialog-comp": DialogComp
  },
  data() {
    return {
      videoDetail: "",
      showCancel: true,
      showDialog: false
    }
  },
  computed: {},
  created() {
    this.reqVideoDetail(this.$route.params.id)
  },

  methods: {
    copyBTLink() {
      this.copyText(this.videoDetail.btlink)
    },
    close() {
      this.showDialog = false
    },
    // 获取视频详情
    async reqVideoDetail(res_id) {
      const res = await resourceDetailApi(res_id)
      if (res.data) {
        this.videoDetail = res.data
      }
    },
    // 复制文本
    copyText(text) {
      this.$copyText(text).then(
          function () {
            try {
              document.querySelector(".dialog .dialog-context").innerText = "复制成功"
            } catch (e) {
              document.querySelector(".resource-btn span").innerText = "复制成功"
            }
          }
      ).catch(
          function (e) {
            alert(e)
          }
      )
    },
    async buyResource() {
      const res = await resourceBuyApi(parseInt(this.$route.params.id))
      if (res.data) {
        this.videoDetail.btlink = res.data
      } else {
        document.querySelector('.dialog-context').innerText = res.msg
      }
    },
    async getResource() {
      const token = getLocalStorage("token")
      // 如果用户没有登录，跳转到登录页面
      if (token === null || token === undefined || token === "") {
        await this.$router.push("/login")
        return
      }
      // 如果用户没有该资源权限，显示支付对话框
      if (this.videoDetail.btlink === null) {
        this.showDialog = true
        return
      }
      // 如果详情中btlink属性有数据，直接复制到粘贴版
      this.copyBTLink()
    }
  }
}
</script>
<style scoped lang="less">
.detail {
  position: relative;
}

.dialog-context {
  span {
    display: block;
    margin: 4px 0;
    &:first-child{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}

.main-img {
  height: 170px;

  img {
    height: 170px;
    width: 100%;
  }
}

.info {
  display: block;
}

.amount {
  display: flex;
  box-sizing: border-box;
  height: 35px;
  justify-content: space-between;
  padding: 5px;
  font-size: 14px;

  span {
    width: 25%;
    border-left: 1px solid #343434;
    line-height: 25px;
    text-align: center;
  }

  .first-span {
    border-left: 0
  }

  span:nth-child(1)::before {
    font-family: iconfont, Helvetica, serif;
    content: "\e823";

  }

  span:nth-child(2)::before {
    font-family: iconfont, Helvetica, serif;
    content: "\e605";
  }

  span:nth-child(3) {
    color: greenyellow;
  }

  span:nth-child(3)::before {
    font-family: iconfont, Helvetica, serif;
    content: "\e601";
  }

  span:nth-child(4)::before {
    font-family: iconfont, Helvetica, serif;
    content: "\e63d";
  }

}

.tips span {
  background-color: #FCCA00;
  color: #333333;
  font-size: 14px;
}

.title {
  font-size: 20px;
  margin: 10px auto;
}

.img-items {
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin: 10px 0;
  }
}

.footer {
  display: flex;
  height: 50px;
  width: 100%;
  background-color: #343434;
  position: fixed;
  bottom: 0;
  text-align: center;

  div {
    line-height: 50px;
  }

  .doc {
    flex: 1;
    color: #8585ea;
  }

  .resource-btn {
    width: 140px;
    height: 50px;
    background-color: #101010;
    padding: 2px 0;
  }
}

.end {
  text-align: center;
  height: 50px;
}
</style>