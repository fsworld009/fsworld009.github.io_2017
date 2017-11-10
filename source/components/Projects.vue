<template>
  <Segment class="blue secondary" header="Projects" headerClass="brown">
    <Grid :items="projects" class="three column">
      <template slot-scope="{item}">
        <!-- <Segment borderClass="stacked" :header="item.degree" :subHeader="item.name + ', ' + item.dateString + ', ' + item.location" headerSize="4" headerClass="violet"> -->
        <Panel>
        </Panel>
      </template>
    </Grid>
  </Segment>
</template>

<script>
import Panel from "./semantic/Panel.vue";
import Segment from "./semantic/Segment.vue";
import Grid from "./semantic/Grid.vue"
let json = require('../json/projects.json');

export default {
  // data: function(){
  //   return Object.assign({
  //     segmentProps: {
  //       headerSize: 4,
  //       headerClass: "green"
  //     },
  //     segmentClass: ""
  //   },json);
  // },
  // computed: {
  //   compPositions () {
  //     return this.positions.map( (position) => {
  //       position.segmentProps = {
  //         header: position.title,
  //         subHeader: position.location + "<br/>" + position.dateString
  //       }
  //       return position;
  //     });
  //   }
  // },
  data: function(){
    return {
      projects: json
    }
  },
  components: {
    Segment,
    Panel,
    Grid
    // SubSegments
  }
}
</script>

