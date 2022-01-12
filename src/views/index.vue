<template>
  <div class="index">欢迎您!
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