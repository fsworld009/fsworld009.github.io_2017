<template>
  <div class="ui stacked segments">
      <template v-for="(item, index) in items">
        <Segment :key="index" v-bind="item.segmentProps">
          <slot :item="item">
            {{item}}
          </slot>
        </Segment>
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
    segmentProps: {
      type:Object
    }
  },
  components: {Segment}
}
</script>

