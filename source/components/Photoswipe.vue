<template>
  <div>
    <!-- Root element of PhotoSwipe. Must have class pswp. -->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

        <!-- Background of PhotoSwipe. 
            It's a separate element, as animating opacity is faster than rgba(). -->
        <div class="pswp__bg"></div>

        <!-- Slides wrapper with overflow:hidden. -->
        <div class="pswp__scroll-wrap">

            <!-- Container that holds slides. 
                PhotoSwipe keeps only 3 of them in DOM to save memory.
                Don't modify these 3 pswp__item elements, data is added later on. -->
            <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>

            <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
            <div class="pswp__ui pswp__ui--hidden">

                <div class="pswp__top-bar">

                    <!--  Controls are self-explanatory. Order can be changed. -->

                    <div class="pswp__counter"></div>

                    <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                    <!-- <button class="pswp__button pswp__button--share" title="Share"></button>-->

                    <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                    <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                    <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                    <!-- element will get class pswp__preloader--active when preloader is running -->
                    <div class="pswp__preloader">
                        <div class="pswp__preloader__icn">
                          <div class="pswp__preloader__cut">
                            <div class="pswp__preloader__donut"></div>
                          </div>
                        </div>
                    </div>
                </div>

                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div class="pswp__share-tooltip"></div> 
                </div>

                <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                </button>

                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                </button>

                <div class="pswp__caption">
                    <div class="pswp__caption__center"></div>
                </div>

            </div>

        </div>

    </div>

    <!-- template for thumbnails -->
    <template v-for="(photo, index) in compPhotos" >
      <a :href="photo.src" class="screenshots-click" :key="index">
        <img class="ui image" :title="photo.caption" :src="photo.thumbnail">&nbsp;
      </a>
    </template>
    <!-- {{compPhotos}} -->

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

    function show(index){
        var pswpElement = document.querySelectorAll('.pswp')[0];
        if(items === null){
            return;
        }
        options.index = index;
        destroy();
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    }

    function destroy(){
      if(gallery){
          gallery.destroy();
      }
    }

    return{
        push_item: push_item,
        show: show,
        destroy: destroy
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

  computed: {
    compPhotos (){
      return this.photos.map( (photo, index) => {
        let filenamePrefix = "./screenshots/" + this.photoId + "-" + ("000" + (Number(index)+1) ).slice(-3);
        let extension = "." + (photo.extension||"png");
        photo.thumbnail = filenamePrefix + "-thumbnail" + extension;
        photo.src = filenamePrefix + extension;
        return photo;
      });
    }
  },
  
  mounted(){
    this.showPhotos();
  },
  updated(){
    this.showPhotos();
  },
  beforeDestroy(){
    //photoswipe.destroy();
  }, 

  methods: {
    showPhotos(){
      if(this.photos.length > 0){

        //photoswipe.show();
      }
    }
  }
}
</script>

