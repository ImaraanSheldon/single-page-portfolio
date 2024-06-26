<template>
    <footer class="container-fluid">
        <div class="row">
            <p class="lead">
                Joel's Portfolio &copy;
                <span>{{ cYear }}</span>
            </p>
        </div>
    </footer>
</template>

<script>
    export default{
        data(){
            return{
                cYear: new Date().getUTCFullYear()
            }
        }
    }
</script>