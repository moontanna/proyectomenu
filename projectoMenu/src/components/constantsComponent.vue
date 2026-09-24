<template>
    <div>
        <h3>{{ alumno.lastname }}</h3>
        <h4>El profesor es: {{ profesor.lastname }}</h4>
    </div>
</template>

<script setup lang="ts">
    import { alumno, profesor } from '../constants/people'
</script>

<style scope>
</style>