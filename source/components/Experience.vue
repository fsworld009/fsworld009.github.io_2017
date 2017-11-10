<template>
  <Segment class="yellow secondary" header="Experience" headerClass="brown">
    <SubSegments :items="compPositions" :segmentProps="segmentProps" :segmentClass="segmentClass">
      <template slot-scope="{item}">
        <div class="ui bulleted list" v-for="(description, index) in item.descriptions" :key="index">
          <div class="item"> {{description}} </div>
        </div> 
      </template>
    </SubSegments>
  </Segment>
</template>


<script>
import Segment from "./semantic/Segment.vue";
import SubSegments from "./semantic/SubSegments";
let json = require('../json/experience.json');

export default {
  data: function(){
    return Object.assign({
      segmentProps: {
        headerSize: 4,
        headerClass: "green"
      },
      segmentClass: ""
    },json);
  },
  computed: {
    compPositions () {
      return this.positions.map( (position) => {
        position.segmentProps = {
          header: position.title,
          subHeader: position.location + "<br/>" + position.dateString
        }
        return position;
      });
    }
  },
  components: {
    Segment,
    SubSegments
  }
}
</script>
