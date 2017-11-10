<template>
  <div :class="'ui segments ' +(typeof borderClass === 'undefined'? 'stacked':'')">
      <template v-for="(item, index) in items">
        <Segment :key="index" v-bind="Object.assign({},item.segmentProps,segmentProps)" :class="segmentClass">
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
    borderClass: {
      type: String
    },
    segmentClass: {
      type: [String, Object]
    }
  },
  components: {Segment}
}
</script>

