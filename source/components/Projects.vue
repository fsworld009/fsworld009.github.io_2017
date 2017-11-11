<template>
  <Segment class="blue secondary" header="Projects" headerClass="brown">
    <Grid :items="projects" class="three column">
      <template slot-scope="{item, index}">
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
            <a href="javascript:void(0)" @click="showProjectDetail($event, index)"><i class="icon big zoom"></i></a>
          </div>
        </Panel>
      </template>
    </Grid>
    <ProjectDetail :project="selectedProject" @closeModal="onCloseDetail"/>
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
import Grid from "./semantic/Grid.vue";
import ProjectDetail from "./ProjectDetail.vue";
let json = require('../json/projects.json');

export default {
  data(){
    return {
      projects: json,
      selectedProject: {}
    }
  },
  components: {
    Segment,
    Panel,
    Grid,
    ProjectDetail
    // SubSegments
  },
  methods: {
    showProjectDetail(event, index){
      this.$data.selectedProject = this.$data.projects[index];
    },
    onCloseDetail(){
        //clean up project data so that 'updated' callback is always triggered on user click
        this.$data.selectedProject={};
    }
  }
}
</script>

