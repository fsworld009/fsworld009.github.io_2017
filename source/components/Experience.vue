<template>
  <Segment class=" secondary" header="Experience" headerClass="brown">
    <SubSegments :items="compPositions" :segmentProps="segmentProps" :segmentClass="segmentClass">
      <template slot-scope="{item}">
        <BulletedList :items="item.descriptions"/>
      </template>
    </SubSegments>
  </Segment>
</template>


<script>
import Segment from "./semantic/Segment.vue";
import SubSegments from "./semantic/SubSegments.vue";
import BulletedList from "./semantic/BulletedtList.vue"
let json = require('../json/experience.json');

export default {
  data(){
    return {
      segmentProps: {
        headerSize: 4,
        headerClass: "green"
      },
      segmentClass: "",
      positions: json
    };
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
    SubSegments,
    BulletedList
  }
}
</script>
