<template>
  <div id=app>
    <h1>Add Item Page</h1>
    <form id="fm1">
        <label>Item Name</label>
        <input type="text" v-model.lazy="item.name" required/>
        <label> Category</label>
        <input type = "text" v-model.lazy = "item.category" required/>

        <h2> Choose High or Low Sugar Content Type </h2>
        <label for = "Option1"> High Sugar Content </label> 
        <input type="checkbox" id = "Option1"/>
        <br>
        <label for = "Option2"> Low Sugar Content </label>      
        <input type="checkbox" id = "Option2"/>
        <br> 

        <h2> Choose Discounted or not option </h2>

        <label for = "discounted">Use Discounted Price (Only Valid Once)</label>
        <input type = "radio" id = "discounted" value = "discounted" v-model="item.discounted"/>

        <label for = "notdiscounted">Don't use</label>
        <input type = "radio" id = "notdiscounted" value = "notdiscounted" v-model="item.discounted"/>
        <h3> {{discounted}} </h3>
        <br>

        <button v-on:click.prevent="addItem">Add Item</button>
        <button v-on:click = "updateItem">Update Item</button>
        
    </form>
  </div>
</template>

<script>

import database from '../firebase.js'
export default {

  data(){
    return{
        msg:"Add Item",
        item:{
          name:'',
          category:'',
          discounted: '',
          timestamp: '',
        },
        
        
        }
  },
  methods:{
    addItem:  function () {
          //Save item to database
          this.item.timestamp = new Date();
          database.collection('items').doc().set(this.item);
          this.item.name="";
          this.item.category="";
          alert("I am in the DB .... :-) Item saved successfully")
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}
</style>