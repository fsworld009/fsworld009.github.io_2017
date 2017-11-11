import Vue from 'vue';
import Index from './Index.vue';

require('./semantic/semantic.css');
require('./semantic/semantic.js');
require('./photoswipe/photoswipe.css');

new Vue({
    el: "#app",
    template: '<Index/>',
    components: {Index}
});

