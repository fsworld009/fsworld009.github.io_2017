<template>
  <div>
    <MyMenu/>
    <div class="ui main container">
      <MyTitle/>
      <About/>
      <Experience/>
      <Education/>
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
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue"
import Contact from "./components/Contact.vue";
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
    Education,
    Contact
  }
};
</script>
