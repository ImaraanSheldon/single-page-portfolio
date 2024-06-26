<template>
<div>
  <navComp/>
  <main>
    <router-view/>
  </main>
</div>
</template>

<script>
import navComp from "@/components/navComp.vue"

export default{
  components:{
    navComp
  }
}
</script>

<style src="@/assets/css/style.css">
</style>
