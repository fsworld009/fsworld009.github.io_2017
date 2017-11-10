<template>
  <Segment class="green" header="Education">
    <Grid :items="education" class="doubling stackable  two column ">
      <template slot-scope="{item}">
        <!-- <h4 class="ui header">{{item.degree}}
          <div class="sub header">{{item.location}} – {{item.dateString}}</div>
          <div class="content">
            <div class="ui bulleted list">
              <div class="item"> GPA: {{item.gpa}} </div>
            </div> 
          </div>  
        </h4> -->
        <Segment borderStyle="stacked" :header="item.degree" :subHeader="item.name + ', ' + item.dateString + ', ' + item.location" headerSize="4">
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
    return json;
  },
  
  components: {
    Segment,
    Grid
  }
}
</script>
