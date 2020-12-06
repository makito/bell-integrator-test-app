<template>
  <div><slot></slot></div>
</template>

<style lang="scss" scoped>
div {
  height: 50px;
  display: flex;
  align-items: center;
  background: gray;
  padding: 0 20px;

  & > a {
    margin-right: 20px;
    color: #fff;
  }
}
</style>
