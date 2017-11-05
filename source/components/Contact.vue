<template>
  <div class="ui raised red segment">
    <h1 class="ui header">Contact</h1>
    <div class="content">
      <div class="ui segments">
        <template v-for="contact in contacts">
          <div class="ui segment" :key="contact.link">
            <a :href="contact.link" taget="_blank"><i :class="'large icon '+contact.color+ ' '+ contact.icon"></i> {{contact.text}}</a>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>


<script>
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
  }
}
</script>
