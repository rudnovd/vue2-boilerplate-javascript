<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/objects">Objects</router-link>
    </nav>

    <div class="header-content">
      Header
    </div>
  </header>
</template>

<style lang="scss">
header {
  border-bottom: 1px solid black;
}

.header-content {
  grid-column-start: 11;
  grid-column-end: 19;
  align-items: center;
  text-align: center;
  height: 100%;
  margin: 0;
}

nav {
  grid-column-start: 1;
  grid-column-end: 10;
}

nav a {
  grid-column: span 1;
}
</style>
