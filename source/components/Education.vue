<template>
  <Segment class="green secondary" header="Education" headerClass="brown">
    <Grid :items="education" class="two column">
      <template slot-scope="{item}">
        <!-- <h4 class="ui header">{{item.degree}}
          <div class="sub header">{{item.location}} – {{item.dateString}}</div>
          <div class="content">
            <div class="ui bulleted list">
              <div class="item"> GPA: {{item.gpa}} </div>
            </div> 
          </div>  
        </h4> -->
        <Segment borderClass="stacked" :header="item.degree" :subHeader="item.name + ', ' + item.dateString + ', ' + item.location" headerSize="4" headerClass="violet">
          <div class="ui bulleted list" >
            <div class="item"> GPA: {{item.gpa}} </div>
          </div> 
        </Segment>
      </template>
    </Grid>
  </Segment>
</template>


<script>
import Segment from "./semantic/Segment.vue";
import Grid from "./semantic/Grid.vue";
let json = require('../json/education.json');

export default {
  data: function(){
    return {
      education: json
    };
  },
  
  components: {
    Segment,
    Grid
  }
}
</script>
