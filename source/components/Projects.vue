<template>
  <Segment class="blue secondary" header="Projects" headerClass="brown">
    <Grid :items="projects" class="three column">
      <template slot-scope="{item}">
        <!-- <Segment borderClass="stacked" :header="item.degree" :subHeader="item.name + ', ' + item.dateString + ', ' + item.location" headerSize="4" headerClass="violet"> -->
        <Panel :header="item.title" :subHeader="item.date">
          <div class="project-desc">
            {{ item.brief || item.description}}
            <div class="labels">
              <template v-for="(skill, index) in item.skills">
                <span class="ui tiny label" :key="index">
                  {{skill}}
                </span>
              </template>
            </div>
          </div>
          
          <div class="ui right aligned container">
            <a href="javascript:void(0)"><i class="icon big zoom"></i></a>
          </div>
        </Panel>
      </template>
    </Grid>
  </Segment>
</template>

<style scoped>
.project-desc {
  min-height: 90px;
}
</style>


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

