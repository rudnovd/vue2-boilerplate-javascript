<template>
  <header>
    <nav>
      <router-link to="/login">Login</router-link>
      <slot name="nav"></slot>
    </nav>
    <slot></slot>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 5px;
  border-bottom: 1px solid rgb(150, 150, 150);

  nav {
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: right;
  }

  a {
    color: black;
    text-decoration: none;
  }
}
</style>
