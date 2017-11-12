<template>
  <Segment class="secondary" header="Contact" headerClass="brown">
    <SubSegments :items="contacts">
      <template slot-scope="{item}">
        <a :href="item.link" target="_blank"><i :class="'large icon '+item.color+ ' '+ item.icon"></i> {{item.text}}</a>
      </template>
    </SubSegments>
  </Segment>
</template>


<script>
import Segment from "./semantic/Segment.vue";
import SubSegments from "./semantic/SubSegments.vue";
let json = require("../json/contact");

export default {
  data(){
    return {contacts: json};
  },
  components: {
    Segment,
    SubSegments
  }
}
</script>
