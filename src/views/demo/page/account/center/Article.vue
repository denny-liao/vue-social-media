<template>
  <List item-layout="vertical" :class="prefixCls">
    <template v-for="item in deepMerge(tm(list), projectUrlList)" :key="item.title">
      <ListItem>
        <ListItemMeta>
          <template #description>
            <div :class="`${prefixCls}__content`">
              {{ item.content }}
            </div>
          </template>
          <template #title>
            <p :class="`${prefixCls}__title`">
              {{ item.title }}
            </p>
            <div>
              <template v-for="tag in item.description" :key="tag">
                <Tag class="mb-2">
                  {{ tag }}
                </Tag>
              </template>
            </div>
          </template>
        </ListItemMeta>
        <a :href="item.url" target="_blank">
          <div :class="`${prefixCls}__link`">
            <div :class="`${prefixCls}__link-content`">
              <div>{{ item.fullTitle }}</div>
              <div>{{ item.fullDescription }} </div>
              <div>
                <img :src="item.imgUrl" width="30px" height="30px" />
                {{ item.url }}</div
              >
            </div>
            <div :class="`${prefixCls}__link-img`">
              <img :src="item.imgUrl" />
            </div>
          </div>
        </a>
      </ListItem>
    </template>
  </List>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { List, Tag } from 'ant-design-vue'
  import Icon from '@/components/Icon/Icon.vue'
  import { actions, projectList, projectUrlList } from './data'
  import { useI18n } from '/@/hooks/web/useI18n'
  import { deepMerge } from '/@/utils'

  export default defineComponent({
    components: {
      List,
      ListItem: List.Item,
      ListItemMeta: List.Item.Meta,
      Tag,
      Icon,
    },
    setup() {
      // 'tm' can not use namespace
      const { tm, t } = useI18n()
      return {
        prefixCls: 'account-center-article',
        list: projectList,
        actions,
        tm,
        t,
        projectUrlList,
        deepMerge,
      }
    },
  })
</script>
<style lang="less" scoped>
  .account-center-article {
    a {
      color: inherit;
    }
    &__title {
      margin-bottom: 12px;
      font-size: 18px;
    }

    &__content {
      color: @text-color-base;
      & :link {
        text-decoration: underline;
        font-weight: bold;
        font-size: 16px;
      }
    }

    &__action {
      display: inline-block;
      padding: 0 16px;
      color: rgb(0 0 0 / 45%);

      &:nth-child(1),
      &:nth-child(2) {
        border-right: 1px solid rgb(206 206 206 / 40%);
      }

      &-icon {
        margin-right: 3px;
      }
    }

    &__time {
      position: absolute;
      right: 20px;
      color: rgb(0 0 0 / 45%);
    }

    &__link {
      display: flex;
      min-height: 100px;
      width: 100%;
      border: 1px solid gray;
      border-radius: 10px;
      overflow: hidden;
      &-content {
        flex: 4 1;
        padding: 15px;
        & div:first-child {
          font-size: 20px;
        }
        & div:nth-child(2) {
          color: gray;
        }
        & div:nth-child(3) {
          display: flex;
          align-items: center;
        }
        & div:not(:last-child) {
          margin-bottom: 10px;
        }
      }
      &-img {
        flex: 1 1;
        position: relative;
        overflow: hidden;
        & img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 100%;
        }
      }
    }
  }
</style>
