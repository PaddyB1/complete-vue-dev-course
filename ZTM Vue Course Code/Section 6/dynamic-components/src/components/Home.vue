<template>
    <h1>Home Page</h1>
</template>

<script>
export default{
    unmounted(){
        console.log("see ya")
    },
    activated(){
        console.log('act')
    },
    deactivated(){
        console.log('dec')
    }
}
</script>