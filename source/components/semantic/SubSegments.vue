<template>
  <div class="ui stacked segments">
      <template v-for="(item, index) in items">
        <div class="ui segment" :key="index" >
          <slot :item="item">
            {{item}}
          </slot>
        </div>
      </template>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>

