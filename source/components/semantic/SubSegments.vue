<template>
  <div :class="'ui segments ' +(typeof borderStyle === 'undefined'? 'stacked':'')">
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
    },
    borderStyle: {
      type: String
    }
  },
  components: {Segment}
}
</script>

