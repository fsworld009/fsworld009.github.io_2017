<template>
  <div>
    
    <!-- template for thumbnails -->
    <div>
      <template v-for="(photo, index) in photos" >
        <a :href="photo.src" class="screenshots-click" :key="index" @click.prevent="onShowPhoto">
          <img class="ui image" :title="photo.caption" :src="photo.thumbnail">&nbsp;
        </a>
      </template>
    </div>

  </div>
</template>

<style scoped>
.ui.image {
  display:inline;
  padding: 0.3rem;
  border: 1px solid grey;
}
</style>


<script>

require('../photoswipe/photoswipe.css');
var PhotoSwipe = require('../photoswipe/photoswipe.js');
var PhotoSwipeUI_Default = require('../photoswipe/photoswipe-ui-default.js');
require('../photoswipe/default-skin/default-skin.css');

var photoswipe = function(){
    var items = null;
    var options = {};
    var gallery = null;

    function push_item(src, width, height, caption){
        if(items === null){
            items = [];
        }
        items.push({
            src: src,
            w: width,
            h: height,
            title: caption
        });
    }

    function clear_item(){
      items=[];
    }

    function show(index){
        var pswpElement = document.querySelectorAll('.pswp')[0];
        if(items === null){
            return;
        }
        options.index = index;
        // destroy();
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    }

    return{
        push_item: push_item,
        show: show,
        clear_item: clear_item
    };
}();


export default {
  props: {
    photoId: {
      type: String,
      default(){return""}
    },
    photos: {
      type: Array,
      default(){
        return []
      }
    }
  },

  methods: {
    initPhotoswipe(){
        photoswipe.clear_item();
        if(this.photos.length > 0){
          this.photos.forEach(function(photo, index){
            photoswipe.push_item(photo.src, photo.width, photo.height, photo.caption);
          });
        }
        this.photoswipeInit=true;
    },

    onShowPhoto(event){
      
      let $el = $(event.currentTarget);
      this.initPhotoswipe();
      photoswipe.show($el.index());
    }
  }
}
</script>

