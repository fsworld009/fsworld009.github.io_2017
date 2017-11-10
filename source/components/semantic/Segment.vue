<template>
  <div class="ui raised segment">
    <h1 class="ui header">{{header}}</h1>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header']
}
</script>
