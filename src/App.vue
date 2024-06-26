<template>
<div>
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
  }
}
</script>

<style src="@/assets/css/style.css">
</style>
