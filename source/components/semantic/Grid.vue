<template>
  <div class="ui stretched grid doubling stackable">
    <template v-for="(item, index) in items">
        <div class="column" :key="index" v-bind="item.columnProps">
          <slot :item="item">
            {{item}}
          </slot>
        </div>
      </template>
  </div>
</template>


<script>
import Segment from './Segment.vue';
export default {
  props: {
    items: {
      type: Array
    }, 
    columnProps: {
      type:Object
    },
    borderClass: {
      type: String
    }
  },
  components: {Segment}
}
</script>
