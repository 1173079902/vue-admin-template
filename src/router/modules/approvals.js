import Layout from '@/layout'
// 导出员工的路由规则
export default {
  name: 'approvals', // 后续做权限的时候会用
  path: '/approvals',
  component: Layout,
  children: [{
    path: '', // 二级路由的默认路由
    component: () => import('@/views/approvals'),
    meta: {
      title: '审批'
    }
  }]
}
