<template>
  <div class="ui grid container">
    <template v-for="(item, index) in items">
        <div class="column" :key="index" v-bind="item.columnProps">
          <slot :item="item">
            {{item}}
          </slot>
        </div>
      </template>
  </div>
</template>

<style scoped>
/* .ui.grid .column {
  padding: 0;
} */
</style>


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
    borderStyle: {
      type: String
    }
  },
  components: {Segment}
}
</script>
