/**
 * 项目内路由，每次新增或者修改页面需要在这里添加路由信息
 * 详细文档：https://ovine.igroupes.com/org/docs/advance/configurations#%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE
 *
 * 会根据 nodePath 字段，自动匹配 pages 文件夹下的 xxx/index  文件。
 * 由于使用了 文件动态引入，每次新增加页面时，dev server 可能会报 找不到文件错误，重启下 dev server 就好。
 */

import { LimitMenuItem } from '@core/routes/types'

export const menuRoutes: LimitMenuItem = {
  nodePath: '/',
  limitLabel: '侧边栏目录',
  label: '',
  children: [
    /*
    {
      path: '/',
      label: 'Dashboard',
      nodePath: 'dashboard',
      exact: true,
      pathToComponent: 'dashboard',
      sideVisible: false, // 不会显示在侧边栏
    },
    */
    /**
     *   {
      label: '页面编辑',
      icon: 'fa fa-coffee',
      nodePath: 'start',
        },
     */
  
    
    {
      path:'/',
      exact: true,
      pathToComponent: 'selectRoom',
      // sideVisible: false, // 不会显示在侧边栏
      label: '可选教室列表',
      icon: 'fa fa-coffee',
      nodePath: 'selectRoom',
    },
    {
      label: '选课程',
      icon: 'fa fa-coffee',
      nodePath: 'noSelectRoom',
    },

    {
      label: '我的课程',
      icon: 'fa fa-paint-brush',
      nodePath: 'myClass',
      children: [
        {
          label: '未开课',
          nodePath: 'untaughtClass', // 对应 src/pages/application/hot
        },
        {
          label: '已开课',
          nodePath: 'startClass', // 对应 src/pages/application/doc
        },
        {
          label: '已结课',
          nodePath: 'endClass', // 对应 src/pages/application/doc
        },
      ],
    },
    {
      label: '心愿选择列表',
      icon: 'fa fa-paint-brush',
      nodePath: 'nonjoinClass',
    },
    {
      label: '我的心愿',
      icon: 'fa fa-coffee',
      nodePath: 'likeClass',
    },
    {
      label: '课表中心',
      icon: 'fa fa-coffee',
      nodePath: 'schedule',
    },
    {
      label: '添加课程',
      icon: 'fa fa-coffee',
      nodePath: 'addRoom',
    },
    {
      label: '待审核课程',
      icon: 'fa fa-coffee',
      nodePath: 'auditRoom',
    },
    {
      label: '未通过课程',
      icon: 'fa fa-coffee',
      nodePath: 'refuseCourse',
    },
    {
      label: '我的课程',
      icon: 'fa fa-coffee',
      nodePath: 'teacherClass',
      children: [
        {
          label: '未开课',
          nodePath: 'untaughtClass', // 对应 src/pages/application/hot
        },
        {
          label: '已开课',
          nodePath: 'startClass', // 对应 src/pages/application/doc
        },
        {
          label: '已结课',
          nodePath: 'endClass', // 对应 src/pages/application/doc
        },
      ],
    },

    {
      label: '待处理',
      icon: 'fa fa-coffee',
      nodePath: 'managerAuditCourse',
    },

    {
      label: '重置密码',
      icon: 'fa fa-coffee',
      nodePath: 'resetPassword',
    },
    {
      label: '添加教室',
      icon: 'fa fa-coffee',
      nodePath: 'managerAddRoom',
    },
    {
      label: '选课管理',
      icon: 'fa fa-coffee',
      nodePath: 'managerControlSelectRoom',
    },


    /**
     * 
     * {
      label: 'DEMO应用',
      icon: 'fa fa-paint-brush',
      nodePath: 'application',
      children: [
        {
          label: '热更新管理',
          nodePath: 'hot', // 对应 src/pages/application/hot
        },
        {
          label: '文档管理',
          nodePath: 'doc', // 对应 src/pages/application/doc
        },
      ],
    },
     * 
     */
    
    
  ],
}
