<template>
  <div class="panel">
    <div class="ui green inverted top attached segment">
      <component :is="headerSize? 'h'+headerSize : 'h6'" :class="'ui header '+headerClass">
        {{header}}
        <span class="sub header" v-if="subHeader" v-html="subHeader" />
      </component>
    </div>
    <div class="ui bottom attached clearing segment">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.panel{
  font-size: 14px !important;
}

.panel .header{
  margin: 5px 0;
}
</style>

<style scoped>
h6.ui.header {
  font-size: 1.2rem;
}

h6.ui.header .sub.header {
  font-size: 0.9rem;
}

div.panel div.top.segment {
  min-height: 70px;
}

div.panel div.segment {
  padding: 8px;
}
</style>



<script>
//https://bootsnipp.com/semanticui/snippets/featured/panels-like-bootstrap
export default {
  props: ['header','subHeader','headerSize', 'headerClass']
}
</script>
