<template>
    <div class="dialogWrapper" v-show="visible"> 
        <!--v-show控制显示与隐藏  -->
        <div class="dialog">
            <header>
                <span>{{title}}</span>
                <span class="close" @click="close">X</span>
            </header>
            <main>
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyDialog',
    props: ['title', 'visible'],
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped lang="scss">
.dialogWrapper {
    position: fixed;
    background: hsla(0, 0%, 0%, 0.8);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.dialog {
    background: #a1a1a1;
    min-height: 4em;
    min-width:25em;
    >header {
        width: 25em;
        padding: 16px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .close{
            cursor: pointer;
        }
    }
    >main {
        padding: 16px;
    }
}
</style>
