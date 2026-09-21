<script setup>

    import {ref} from 'vue'

    const name = ref('Clarke')
    const score = ref(0)

    function increment() {
        score.value++
    }

    function decrement() {
        if (score.value > 0) {
            score.value--
        }
    }

    function reset() {
        score.value = 0
    }

</script>   

<template>
    <h1>Welcome Page</h1>

    <h5>This is the equivalent of the Mixins </h5>

    <h3>Student: {{ name }}</h3>
    <p>Score: {{ score }}</p>
    <button @click="increment">Add Score</button>
    <button @click="decrement">Deduct Score</button>
    <button @click="reset">Reset</button>

</template>