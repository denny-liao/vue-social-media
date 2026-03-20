import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '/@/router/routes/basic';

import { mainOutRoutes } from './mainOut';
import { PageEnum } from '/@/enums/pageEnum';
import { t } from '/@/hooks/web/useI18n';

// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob('./modules/**/*.ts', { eager: true });
const routeModuleList: AppRouteModule[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

//* for permission use to filter and push into router
export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

// 根路由
// export const RootRoute: AppRouteRecordRaw = {
//   path: '/',
//   name: 'Root',
//   redirect: PageEnum.BASE_HOME,
//   meta: {
//     title: 'Root',
//   },
// };

// export const LoginRoute: AppRouteRecordRaw = {
//   path: '/login',
//   name: 'Login',
//   component: () => import('/@/views/sys/login/Login.vue'),
//   meta: {
//     title: t('routes.basic.login'),
//   },
// };
//*  因為 Github page 沒有處理CSR路由問題，導致404，因此這裡改為根路由
export const RootRoute: AppRouteRecordRaw ={
  path: '/',
  name: 'AccountCenterPage',
  component: () => import('/@/views/demo/page/account/center/index.vue'),
  meta: {
    // icon: 'ion:grid-outline',
    title: t('routes.basic.appName'),
    ignoreAuth: true, //TODO: don't need to Auth ??
  },
}

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [
  RootRoute,
  // LoginRoute,
  // HomeRoute,
  ...mainOutRoutes,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
