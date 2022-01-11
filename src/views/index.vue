<template>
  <div class="index">欢迎,我是首页!
    1</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
// 使用scss 
.index {
   @extend %flex-center-row;
   @extend %unable-select;
   color: $color-primary;
 }
</style>