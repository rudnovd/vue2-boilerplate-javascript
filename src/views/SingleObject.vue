<template>
  <UserLayout>
    <section class="single-object">
      <span>Object {{ $route.params.id }}</span>
    </section>
  </UserLayout>
</template>

<style scoped lang="scss">
  section[class='single-object'] {
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    grid-column-start: 1;
    grid-column-end: 19;
    height: 100%;
    text-align: center;

    span {
      font-size: 3em;
    }
  }
</style>
