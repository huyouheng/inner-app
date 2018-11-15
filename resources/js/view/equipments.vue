<template>
    <custom-panel page-name="设备" sub-name="包含设备类型">
        <select name="name" id="" class="form-control input-sm">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    </custom-panel>
</template>

<script>
    import CustomPanel from '../components/CustomPanel'
    export default {
        name: "equipments",
        components: {
            CustomPanel
        }
    }
</script>

<style scoped>

</style>