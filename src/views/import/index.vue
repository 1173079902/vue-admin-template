<template>
  <!-- 公共导入组件 -->
  <upload-excel :on-success="success" />
</template>

<script>
export default {
  name: '',

  data() {
    return {}
  },

  methods: {
    success({ header, results }) {}
  }
}
</script>

<style lang="less" scoped></style>
