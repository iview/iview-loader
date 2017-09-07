<template>
    <div>
        <i-select v-model="value">
            <i-option value="beijing">北京</i-option>
            <i-option value="shanghai">上海</i-option>
        </i-select>
        <Switch></Switch>
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