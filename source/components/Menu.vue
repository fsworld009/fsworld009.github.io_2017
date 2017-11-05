<template>
  <div>
    <div class="ui fixed inverted menu blue tablet or lower hidden tablet-menu">
      <div class="ui right menu inverted blue">
        <a href="#" class="item"><i class="icon user circle"></i> Profile</a>
        <a href="#" class="item"><i class="icon rocket"></i> Projects</a>
        <a href="#" class="item"><i class="icon address book"></i> Contact</a>
        <a href="https://fsworld009.github.io/blog/" target="_blank" class="item"><i class="icon write"></i> Blog</a>
      </div>
    </div>
    <div class="tablet or lower only mobile-menu">
      <div class="ui pointing dropdown top right  item">
        <i class="big list layout icon blue" ></i>
        <div class="ui menu inverted blue tablet or lower only">
          <a href="#" class="item text white"><i class="icon user circle"></i> Profile</a>
          <a href="#" class="item text white"><i class="icon rocket"></i> Projects</a>
          <a href="#" class="item text white"><i class="icon address book"></i> Contact</a>
          <a href="https://fsworld009.github.io/blog/" target="_blank" class="item text white"><i class="icon write"></i> Blog</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mobile-menu {
  z-index: 1;
  position: fixed;
  top: 8px;
  right: 15px;
}

</style>


<script>
export default {
  mounted: function() {
    this.createDropdown();
    $(window).off("resize.menu").on("resize.menu", function(){
      if($(this.$el).find(".tablet-menu").is(":visible") && $(this.$el).find(".mobile-menu").find(".ui.menu").hasClass("visible")){
        $(this.$el).find(".mobile-menu").find(".ui.dropdown").dropdown("hide");
      }
    }.bind(this));
  },

  updated: function(){
    this.destroyDropdown();
    this.createDropdown();
  },
  beforeDestroy: function(){
    this.destroyDropdown();
    $(window).off("resize.menu");
  }, 
  methods: {
    createDropdown: function(){
      $(this.$el).find(".mobile-menu").find(".ui.dropdown").dropdown({
        "onShow": function(){
          //disable selected classes as this dropdown serves as a menu
          $(this).find(".item.active.selected").removeClass("active selected");
        }
      });

    },
    destroyDropdown: function(){
      $(this.$el).find(".mobile-menu").find(".ui.dropdown").dropdown('destroy');
    }
  }

}
</script>
