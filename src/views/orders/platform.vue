<template>
    <div>
        <p>This is admin order view</p>
    </div>
</template>

<script>

    export default {
        data() {
            return {}
        },
        methods: {},

        mounted() {
            let data = {
                platform_id: 12
            }
            findItem(data).then(response=>{
                const data = response.data
                console.log(data)
            })
            console.log('admin order view start')
        }
    }
</script>

<style scoped>

</style>
