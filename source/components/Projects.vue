<template>
  <Segment class=" secondary" header="Projects" headerClass="brown">
    <Grid :items="compProjects" class="three column">
      <template slot-scope="{item, index}">
        <Panel :header="item.title" :subHeader="item.date">
          <div class="project-desc">
            {{ item.brief || item.description}}
            <div class="labels">
              <template v-for="(skill, index) in item.skills">
                <span class="ui tiny label orange" :key="index">
                  {{skill}}
                </span>
              </template>
            </div>
          </div>

          <div class="ui container" style="height:80px">
            <template v-if="item.screenshots && item.screenshots[0]">
              <a href="javascript:void(0)" @click="showProjectDetail($event, index)"><img :src="item.screenshots[0].thumbnail" width="80" height="80" align="bottom"/></a>
            </template>
            <a href="javascript:void(0)" @click="showProjectDetail($event, index)" class="detail-icon"><i class="icon big zoom"></i></a>
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

.detail-icon {
  position: absolute;
  right: 8px;
  bottom: 8px;
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
  computed: {
    compProjects(){
      return this.projects.map((project, index)=>{
        if(project.screenshots instanceof Array){
          project.screenshots.forEach((photo, index)=>{
            let filenamePrefix = "./screenshots/" + project.id + "-" + ("000" + (Number(index)+1) ).slice(-3);
            let extension = "." + (photo.extension||"png");
            photo.thumbnail = filenamePrefix + "-thumbnail" + extension;
            photo.src = filenamePrefix + extension;
          });
        }
        return project;
      });
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

