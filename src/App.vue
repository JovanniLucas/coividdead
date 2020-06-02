<template>
  <div id="app">
    <b-navbar variant="primary" type="dark" fixed="top">
      <b-container>
        <b-navbar-brand href="/">
          <img src="@/assets/skull.svg" /> Covid Dead
        </b-navbar-brand>
      </b-container>
    </b-navbar>
    <b-container class="content">
      <router-view />
    </b-container>
    <b-navbar variant="primary" type="ligth" fixed="bottom">
      <b-container>
        <b-nav-form right></b-nav-form>
      </b-container>
    </b-navbar>
  </div>
</template>

<style lang="stylus">
#app {
  width: 100%;
  height: 100%;
}

#app .content {
  margin-top: 56px;
  padding-top: 20px;
}
</style>
