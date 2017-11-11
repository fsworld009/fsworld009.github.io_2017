<template>
  <Segment class="purple" header="Contact" headerClass="brown">
    <SubSegments :items="contacts">
      <template slot-scope="{item}">
        <a :href="item.link" target="_blank"><i :class="'large icon '+item.color+ ' '+ item.icon"></i> {{item.text}}</a>
      </template>
    </SubSegments>
  </Segment>
</template>


<script>
import Segment from "./semantic/Segment.vue";
import SubSegments from "./semantic/SubSegments";
let json = require("../json/contact");

export default {
  data: function(){
    return {contacts: json};
  },
  components: {
    Segment,
    SubSegments
  }
}
</script>
