<template>
  <div class="hello">
     <mavon-editor v-model="value"/>
     <div ref="katex" v-katex="'\\frac{a_i}{1+x}'"></div>
    </div>
</template>

<script>
export default {
  name: 'Demo',
  props: {
  },
  data(){
    return{
      value:this.$refs.katex.textContent,
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


