<template>
    <div>
        <Select v-model="value">
            <Option value="beijing">北京</Option>
            <Option value="shanghai">上海</Option>
        </Select>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }
        }
    }
</script>