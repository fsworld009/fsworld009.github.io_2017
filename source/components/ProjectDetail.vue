<template>
  <div class="ui modal scrolling">
    <i class="close icon"></i>
    <div class="header">
      Modal Title
    </div>
    <div class="scrolling content">
      {{project}}
    </div>
  </div>
</template>

<script>
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
        onHidden: function(){
          this.$emit("closeModal");
        }.bind(this)
      });
    }
  }
}
</script>
