import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

Vue.component("machine", {
	props: ["rien"],
	template : 
	'<li :class="{red:rien.status}">{{rien.nom}}<toggle-button v-model="rien.status" heigth = "35" width="85" color="FireBrick" :sync="true" :labels="{checked: \'Active\', unchecked: \'Inactive\'}"/></li>'
	
})

new Vue({
  el: '#app',
  render: h => h(App)

})



// new Vue({
// 	el: "#exemple"	
// })