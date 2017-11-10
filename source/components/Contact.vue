<template>
  <Segment class="red" header="Contact">
    <SubSegments :items="contacts">
      <template slot-scope="{item}">
        <a :href="item.link" taget="_blank"><i :class="'large icon '+item.color+ ' '+ item.icon"></i> {{item.text}}</a>
      </template>
    </SubSegments>
  </Segment>
</template>


<script>
import Segment from "./semantic/Segment.vue";
import SubSegments from "./semantic/SubSegments";

export default {
  data: function(){
    return {
      "contacts": [
        {"icon": "mail", "color": "red", "text": "Email (Primary)", "link": "mailto:fsworld009@gmail.com"},
        {"icon": "mail", "color": "red", "text": "Email (Work-specific)", "link": "mailto:lycecs9130@gmail.com"},
        {"icon": "github", "color": "black", "text": "Github", "link": "https://github.com/fsworld009"},
        {"icon": "twitter", "color": "teal", "text": "Twitter", "link": "https://twitter.com/fsworld009"},
        {"icon": "linkedin square", "color": "blue", "text": "LinkedIn", "link": "https://linkedin.com/in/lycecs9130"}
      ]
    }
  },
  components: {
    Segment,
    SubSegments
  }
}
</script>
