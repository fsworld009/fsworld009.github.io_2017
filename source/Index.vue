<template>
  <div>
    <Menu/>
    <div class="ui main container">
      <Title/>
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
import Title from "./components/Title";
import About from "./components/About.vue";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Menu from "./components/Menu.vue";
export default {
  data (){
    return {
      message: "Hello World"
    };
  },
  components: {
    Title,
    Menu,
    About,
    Experience,
    Contact
  }
};
</script>
