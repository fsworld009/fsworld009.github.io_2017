<template>
  <div>
    <div class="ui fixed inverted menu blue tablet or lower hidden tablet-menu">
      <div class="ui right menu inverted blue">
        <template v-for="(menu, index) in menuItems">
          <a  :key="index" :href="menu.link" class="item" :target="menu.target||''"><i :class="'icon '+menu.icon"></i> {{menu.text}}</a>
        </template>
      </div>
    </div>
    <div class="tablet or lower only mobile-menu">
      <div class="ui pointing dropdown top right  item">
        <i class="big list layout icon blue" ></i>
        <div class="ui menu inverted blue tablet or lower only">
          <template v-for="(menu, index) in menuItems">
            <a  :key="index" :href="menu.link" class="item text white" :target="menu.target||''"><i :class="'icon '+menu.icon"></i> {{menu.text}}</a>
          </template>
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
  data(){
    return {
      "menuItems":[
        {"icon":"user circle", "text":"Profile", "link":"#profile"},
        {"icon":"rocket", "text":"Projects", "link":"#projects"},
        // {"icon":"suitcase", "text":"Experience", "link":"#experience"},
        {"icon":"address book", "text":"Contact", "link":"#contact"},
        {"icon":"write", "text":"Blog", "link":"https://fsworld009.github.io/blog/", "target":"_blank"},
      ]
    }
  },
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
