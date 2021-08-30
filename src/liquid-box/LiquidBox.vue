<template>
    <TroisCanvas :cameraPosition="[2, 2, 4]">
        <OrbitControlsWrapper :autoRotate="false" />
        <LiquidBoxComponent />
    </TroisCanvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OrbitControlsWrapper from '../utils/OrbitControlsWrapper.vue'
import LiquidBoxComponent from './LiquidBoxComponent.vue'

export default defineComponent({
    components: { LiquidBoxComponent, OrbitControlsWrapper },
})
</script>