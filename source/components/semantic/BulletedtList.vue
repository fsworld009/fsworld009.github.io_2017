<template>
  <div class="ui bulleted list" >
    <template v-for="(item, index) in items">
      <div class="item" :key="index">
        <slot :item="item" :index="index">
            {{item}}
          </slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }, 
  }
}
</script>