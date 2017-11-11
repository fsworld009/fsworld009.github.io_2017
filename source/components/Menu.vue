<template>
  <div>
    <div class="ui fixed inverted menu blue tablet or lower hidden tablet-menu">
      <div class="ui right menu inverted blue">
        <a href="#profile" class="item"><i class="icon user circle"></i> Profile</a>
        <a href="#projects" class="item"><i class="icon rocket"></i> Projects</a>
        <a href="#contact" class="item"><i class="icon address book"></i> Contact</a>
        <a href="https://fsworld009.github.io/blog/" target="_blank" class="item"><i class="icon write"></i> Blog</a>
      </div>
    </div>
    <div class="tablet or lower only mobile-menu">
      <div class="ui pointing dropdown top right  item">
        <i class="big list layout icon blue" ></i>
        <div class="ui menu inverted blue tablet or lower only">
          <a href="#profile" class="item text white"><i class="icon user circle"></i> Profile</a>
          <a href="#projects" class="item text white"><i class="icon rocket"></i> Projects</a>
          <a href="#contact" class="item text white"><i class="icon address book"></i> Contact</a>
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
  mounted() {
    this.createDropdown();
    $(window).off("orientationchange.menu resize.menu").on("orientationchange.menu resize.menu", () => {
      if($(this.$el).find(".tablet-menu").is(":visible") && $(this.$el).find(".mobile-menu").find(".ui.menu").hasClass("visible")){
        $(this.$el).find(".mobile-menu").find(".ui.dropdown").dropdown("hide");
      }
    });
  },

  updated(){
    this.destroyDropdown();
    this.createDropdown();
  },
  beforeDestroy(){
    this.destroyDropdown();
    $(window).off(".menu");
  }, 
  methods: {
    createDropdown(){
      $(this.$el).find(".mobile-menu").find(".ui.dropdown").dropdown({
        "onShow" (){
          //disable selected classes as this dropdown serves as a menu
          $(this).find(".item.active.selected").removeClass("active selected");
        }
      });

    },
    destroyDropdown(){
      $(this.$el).find(".mobile-menu").find(".ui.dropdown").dropdown('destroy');
    }
  }

}
</script>
