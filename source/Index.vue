<template>
  <div>
    <MyMenu/>
    <div class="ui main container">
      <MyTitle/>
      <About/>
      <Experience/>
      <Contact/>
    </div>
  </div>
</template>

<style scoped>
.main.container {
  margin-top: 7em;
}
</style>


<script>
import MyTitle from "./components/Title";
import About from "./components/About.vue";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import MyMenu from "./components/Menu.vue";
export default {
  data (){
    return {
      message: "Hello World"
    };
  },
  components: {
    MyTitle,
    MyMenu,
    About,
    Experience,
    Contact
  }
};
</script>
