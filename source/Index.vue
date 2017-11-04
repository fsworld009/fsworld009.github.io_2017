<template>
  <div>
    <app-menu></app-menu>
    <div class="ui main text container">
      <p>{{message}}</p>
      <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
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
  data: function(){
    return {
      message: "Hello World"
    };
  },
  components: {
    "app-menu": Menu
  }
};
</script>
