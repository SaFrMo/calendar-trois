<template>
    <Calendar />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Calendar from './calendar/Calendar.vue'

export default defineComponent({
    components: {
        Calendar,
    },
})
</script>
