<template>
  <div class="ui modal scrolling">
    <i class="close icon"></i>
    <div class="header">
      <h2 class="ui header blue">{{project.title}}
      </h2>
    </div>
    <div class="scrolling content">
      <h5 class="ui header">
        {{project.description}}
      </h5>
      <BulletedList :items="project.points" v-if="project.points"/>
      
      <Photoswipe :photoId="project.id" :photos="project.screenshots" v-if="project.screenshots"/>
      
      <h2 class="ui green header" v-if="project.links && project.links.length">Link(s)</h2>
      <BulletedList :items="project.links" v-if="project.links && project.links.length">
        <template slot-scope="{item}">
          <a :href="item.url" target="_blank">{{item.name}}</a>
        </template>
      </BulletedList>
      
    </div>

    <div class="actions">
      <button class="ui button red inverted cancel">Close</button>
    </div>
  </div>
</template>

<style scoped>
img {
  display: inline;
}
</style>


<script>
import BulletedList from "./semantic/BulletedtList.vue";
import Photoswipe from "./Photoswipe.vue";
export default {
  props: {
    project: {
      type: Object
    }
  },
  mounted() {
    this.createModal();
  },
  updated(){
    if(this.project.title){
      var $modal = $(this.$el);
      $modal.modal('show');
    }
  },
  beforeDestroy(){
    var $modal = $(this.$el);
    $modal.modal('destroy');
  }, 
  methods: {
    createModal(){
      var $modal = $(this.$el);
      $modal.modal({
        onHidden: () => {
          this.$emit("closeModal");
        }
      });
    }
  },
  components: {
    BulletedList,
    Photoswipe
  }
}
</script>
