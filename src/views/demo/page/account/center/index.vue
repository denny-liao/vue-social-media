<template>
  <div :class="prefixCls">
    <a-row :class="`${prefixCls}-top`">
      <a-col :span="9" :class="`${prefixCls}-col`">
        <a-row>
          <a-col :span="8">
            <div :class="`${prefixCls}-top__avatar`">
              <img width="70" :src="avatar" />
              <span>Denny</span>
              <div>{{ t('motto') }}</div>
            </div>
          </a-col>
          <a-col :span="16">
            <div :class="`${prefixCls}-top__detail`">
              <template v-for="detail in deepMerge(tm(details), detailsStyle)" :key="detail.title">
                <p>
                  <Icon :icon="detail.icon" />
                  {{ detail.title }}
                </p>
              </template>
            </div>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="7" :class="`${prefixCls}-col`">
        <CollapseContainer :title="t('tag')" :canExpan="false">
          <template v-for="tag in tm(tags)" :key="tag">
            <Tag class="mb-2">
              {{ tag }}
            </Tag>
          </template>
        </CollapseContainer>
      </a-col>
      <a-col :span="8" :class="`${prefixCls}-col`">
        <div class="absolute right-0 top-0 cursor-pointer" @click="handleLocale">
          <Icon :icon="'material-symbols:translate'" color="#fff" size="25" />
        </div>
        <CollapseContainer :class="`${prefixCls}-top__hobby`" :title="t('hobby')" :canExpan="false">
          <div
            v-for="(hobby, index) in deepMerge(tm(hobbies), hobbiesStyle)"
            :key="index"
            :class="`${prefixCls}-top__hobby-item`"
          >
            <Icon :icon="hobby.icon" :color="hobby.color" />
            <span>{{ hobby.title }}</span>
          </div>
        </CollapseContainer>
      </a-col>
    </a-row>
    <div :class="`${prefixCls}-bottom`">
      <Tabs>
        <template v-for="item in deepMerge(tm(achieveList), achieveInfoList)" :key="item.key">
          <TabPane :tab="item.name">
            <component :is="item.component" />
          </TabPane>
        </template>
      </Tabs>
    </div>
  </div>
</template>

<script lang="ts">
  import { Tag, Tabs, Row, Col } from 'ant-design-vue'
  import { defineComponent, computed, unref } from 'vue'
  import { CollapseContainer } from '/@/components/Container/index'
  import Icon from '@/components/Icon/Icon.vue'
  import Article from './Article.vue'
  import Application from './Application.vue'
  import Project from './Project.vue'

  import headerImg from '/@/assets/images/header.jpg'
  import {
    tags,
    hobbies,
    details,
    achieveList,
    hobbiesStyle,
    detailsStyle,
    achieveInfoList,
  } from './data'
  import { useUserStore } from '/@/stores/modules/user'
  import myAvatar from '@/assets/images/avatar.png'
  import { useLocale } from '@/locales/useLocale'
  import { LOCALE } from '/@/settings/localeSetting'
  import { useI18n } from '/@/hooks/web/useI18n'
  import { deepMerge } from '/@/utils'

  export default defineComponent({
    components: {
      CollapseContainer,
      Icon,
      Tag,
      Tabs,
      TabPane: Tabs.TabPane,
      Article,
      Application,
      Project,
      [Row.name]: Row,
      [Col.name]: Col,
    },
    setup() {
      const { t, tm } = useI18n('intro')
      const userStore = useUserStore()
      const avatar = computed(() => userStore.getUserInfo.avatar || myAvatar || headerImg)

      const { changeLocale, getLocale } = useLocale()
      const lang = computed(() => (unref(getLocale) === LOCALE.ZH_CN ? LOCALE.EN_US : LOCALE.ZH_CN))
      function handleLocale() {
        changeLocale(lang.value)
      }

      return {
        prefixCls: 'account-center',
        avatar,
        tags,
        hobbies,
        details,
        achieveList,
        handleLocale,
        t,
        tm,
        hobbiesStyle,
        deepMerge,
        detailsStyle,
        achieveInfoList,
      }
    },
  })
</script>
<style lang="less" scoped>
  .account-center {
    &-col:not(:last-child) {
      padding: 0 10px;

      &:not(:last-child) {
        border-right: 1px dashed rgb(206 206 206 / 50%);
      }
    }

    &-top {
      margin: 16px 16px 12px;
      padding: 10px;
      border-radius: 3px;
      background-color: @component-background;

      &__avatar {
        text-align: center;

        img {
          margin: auto;
          border-radius: 50%;
        }

        span {
          display: block;
          font-size: 20px;
          font-weight: 500;
        }

        div {
          margin-top: 3px;
          font-size: 12px;
        }
      }

      &__detail {
        margin-top: 15px;
        padding-left: 20px;
      }

      &__hobby {
        &-item {
          display: inline-block;
          padding: 4px 24px;
        }

        span {
          margin-left: 3px;
        }
      }
    }

    &-bottom {
      margin: 0 16px 16px;
      padding: 10px;
      border-radius: 3px;
      background-color: @component-background;
    }
  }
</style>
