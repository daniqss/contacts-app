<template>
    <header :style="{ backgroundColor: bg, color: text }">
        <p>{{title}}</p>
    </header>
</template>

<script>
    export default {
        name: "NavBar",
        props: {
            title: {
                type: String,
                required: true
            },
            bg: {
                type: String,
                default: "#f5f5f5"
            },
            text: {
                type: String,
                default: "#333"
            }
        }
    };
</script>

<style scoped>
    header {
        padding: 1.3rem;
        text-align: center;
        font-size: 3rem;
    }
    p {
        margin: 0;
    }
</style>