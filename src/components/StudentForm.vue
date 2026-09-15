<script setup>

const emit = defineEmits(['submitStudent'])

function submitStudent() {
    emit('submitStudent', {
        name: "Juan",
        age: 10
    })
}
</script>

<template>
 <button @click="submitStudent">Submit</button>
</template>