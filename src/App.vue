<template>
<div class="wrapper">
  <navComp/>
  <main>
    <router-view/>
  </main>
  <footerComp/>
</div>
</template>

<script>
import navComp from "@/components/navComp.vue"
import footerComp from "@/components/footerComp.vue"

export default{
  components:{
    navComp,
    footerComp
  },
  computed:{
    Home(){
      return this.$store.state.Home
    },
  },

}
</script>

<style src="@/assets/css/style.css">
</style>
