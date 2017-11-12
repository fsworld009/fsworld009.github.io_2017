<template>
  <div>
    <MyMenu/>
    <div class="ui main container">
      
      <MyTitle/>
      <a name="profile"></a>
      <About class="orange"/>
      <a name="projects"></a>
      <PhotoswipePlaceholder/>
      <Projects class="yellow"/>

      <a name="experience"></a>
      <Experience class="green"/>
      <Education class="blue"/>
      
      <a name="contact"></a>
      <Contact class="purple"/>
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
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import MyMenu from "./components/Menu.vue";
import PhotoswipePlaceholder from "./components/PhotoswipePlaceholder.vue";
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
    Projects,
    PhotoswipePlaceholder,
    Contact
  }
};
</script>
