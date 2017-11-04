<template>
  <div>
    <div class="ui fixed inverted menu blue mobile hidden">
      <div class="ui right menu inverted blue">
        <a href="#" class="item">Profile</a>
        <a href="#" class="item">Projects</a>
        <a href="#" class="item">Contact</a>
        <a href="#" class="item">Blog</a>
      </div>
    </div>
    <div class="mobile only mobile-menu">
      <div class="ui pointing dropdown top right  item">
        <i class="big home icon"></i>
        <div class=" menu">
        <a href="#" class="item">Profile</a>
        <a href="#" class="item">Projects</a>
        <a href="#" class="item">Contact</a>
        <a href="#" class="item">Blog</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  right: 5px;
}

</style>


<script>
export default {
  mounted: function() {
    $(this.$el).find(".mobile-menu").find(".ui.dropdown").dropdown();
  },

  beforeDestroy: function(){
    (this.$el).find(".mobile-menu").find(".ui.dropdown").dropdown('destroy');
  }
}
</script>
