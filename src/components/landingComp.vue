<template>
<div class="container">

    <div class="row">
        <div class="col">
            <img src="../assets/logo.png" alt="flip">
        </div>
        <div class="col">
            <div id="details">
                <h1 class=" display-1">Imaraan Sheldon</h1>
                <span>{{Home[0].home_Title}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
    import{computed, onMounted} from 'vue'
    const Home =
    computed(() => this.$store.state.Home)

    onMounted(() =>{
        this.$store.dispatch('fetchHome')
    } )
</script>