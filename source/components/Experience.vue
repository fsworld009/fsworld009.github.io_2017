<template>
  <Segment class="green" header="Experience">
    <SubSegments :items="compPositions" >
      <template slot-scope="{item}">
        <!-- <Segment :header="item.title" headerSize="4" :subHeader="item.location + '<br/>' + item.dateString" borderStyle=""> -->
            <div class="ui bulleted list" v-for="(description, index) in item.descriptions" :key="index">
            <div class="item"> {{description}} </div>
          </div> 
        <!-- </Segment> -->
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
      "positions": [
        {
          "title": "Front-End Web Developer",
          "location": "Inpensa, Edison, New Jersey, United States",
          "dateString": "January 2015 – August 2017",
          "descriptions":[
            "Created customized frozen-column and fixed-header HTML tables",
            "Dynamically generated page layout based on user configuration",
            "Migrated code base to Backbone.js framework",
            "Populated graphs and charts with Highcharts",
            "Updated only partial sections without reloading the whole page after user actions",
            "Used jQuery for AJAX data loading and updating"
          ]
        },
        {
          "title": "Front-End Web Developer",
          "location": "Inpensa, Edison, New Jersey, United States",
          "dateString": "January 2015 – August 2017",
          "descriptions":[
            "Created customized frozen-column and fixed-header HTML tables",
            "Dynamically generated page layout based on user configuration",
            "Migrated code base to Backbone.js framework",
            "Populated graphs and charts with Highcharts",
            "Updated only partial sections without reloading the whole page after user actions",
            "Used jQuery for AJAX data loading and updating"
          ]
        }
      ]
    }
  },
  computed: {
    compPositions () {
      return this.positions.map( (position) => {
        position.segmentProps = {
          headerSize: 4,
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
