<template>
  <div id="app">
    <img src="./assets/logo-coffee.jpg">
    <h1>{{ msg }}</h1>
   
   <div v-for="bouton in boutons">
    <h2>{{bouton.nom}}
     <toggle-button v-model="bouton.status"
               :value="false" 
               color="FireBrick" 
               width="85" 
               height='35'
               :sync="true" 
               :labels="{checked: 'Active', unchecked: 'Inactive'}"/>
    </h2>
     
   </div>
  
    
   
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Bienvenue sur le nouveau projet !',
      boutons: [{
        nom: "Machine 1",
        status:true,

    },
    {
      nom: "Machine 2",
      status:false,
    }]
    }
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
