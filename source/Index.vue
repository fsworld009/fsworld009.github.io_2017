<template>
  <div>
    <about></about>
    <p>{{message}}</p>
  </div>
</template>

<script>
import About from "./components/About.vue";
export default {
  data: function(){
    return {
      message: "Hello World"
    };
  },
  components: {about: About}
};
</script>
