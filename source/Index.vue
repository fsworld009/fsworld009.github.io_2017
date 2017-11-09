<template>
  <div>
    <Menu></Menu>
    <div class="ui main container">
      <About></About>
    </div>
  </div>
</template>

<style scoped>
.main.container {
  margin-top: 7em;
}
</style>


<script>
import About from "./components/About.vue";
import Menu from "./components/Menu.vue";
export default {
  data (){
    return {
      message: "Hello World"
    };
  },
  components: {
    Menu,
    About
  }
};
</script>
