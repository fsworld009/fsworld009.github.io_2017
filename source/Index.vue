<template>
  <div>
    <MyMenu/>
    <div class="ui main container">
      
      <MyTitle class="main-segment"/>
      <a name="profile"></a>
      <About class="main-segment orange"/>
      <a name="projects"></a>
      <PhotoswipePlaceholder/>
      <Projects class="main-segment yellow"/>

      <!-- <a name="experience"></a>
      <Experience class="main-segment green"/>
      <Education class="main-segment blue"/> -->
      
      <a name="contact"></a>
      <Contact class="main-segment purple"/>
      <MyFooter/>
    </div>
  </div>
</template>

<style scoped>
.main.container {
  margin-top: 7em;
}
.main-segment {
  opacity: 0.1;
  transition: opacity 2s;
}

.main-segment.visible {
  opacity: 1;
  
}
</style>


<script>
import MyTitle from "./components/Title.vue";
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue"
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import MyMenu from "./components/Menu.vue";
import PhotoswipePlaceholder from "./components/PhotoswipePlaceholder.vue";
import MyFooter from "./components/Footer.vue";
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
    Contact,
    MyFooter
  },

  mounted(){
    //$(this.$el).find(".main-segment").css("opacity",0)
    this.initTransparency();
  },
  updated(){
    this.initTransparency();
  },
  beforeDestroy(){
    this.destroyTransparency();
  },

  methods: {
    initTransparency(){
      var $segments = $(this.$el).find(".main-segment");
      $segments.visibility({
        once: false,
        offset: 95,
        onTopVisible(){
          $(this).addClass("visible");
        } ,
        onBottomVisible(){
          $(this).addClass("visible");
        }
      })
    },
    destroyTransparency(){

    }
  }
};
</script>
