<template>
  <div id="app" :class="{previewMode : previewMode}">
    <Topbar v-on:preview="preview" class="topbar"></Topbar>
    <main>
      <Editor  class="editor"></Editor>
      <Preview  class="preview"></Preview>
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

import store from './store/index'

export default {
  name:'app',
  store,
  data() {
    return {
      previewMode: false
    }
  },
  methods: {
    exitPreview() {
      this.previewMode = false
    },
    preview() {
      this.previewMode = true
    }
  },
  components: {
    Topbar,
    Editor,
    Preview
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;


  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .topbar {
    position: relative;
    index: 1;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
  }

  main {
    display: flex;
    flex: 1;
    background: #ddd;
    >.editor {
      width: 40em;
      margin: 16px 8px 16px 16px;
      background: #fff;
      box-shadow: 0 0 3px rgba(0, 0, 0, .5);
      border-radius: 4px;
      overflow: hidden;
    }
    >.preview {
      flex: 1;
      margin: 16px 16px 16px 8px;
      background: #fff;
      box-shadow: 0 0 3px rgba(0, 0, 0, .5);
      border-radius: 4px;
      overflow: hidden;
    }
  }

  &.previewMode>#topbar {
    display: none;
  }

  &.previewMode #editor {
    display: none;
  }

  &.previewMode #preview {
    max-width: 800px;
    margin: 32px auto;
  }

  #exitPreview {
    display: none;
  }

  &.previewMode #exitPreview {
    display: inline-block;
    position: fixed;
    right: 16px;
    bottom: 16px;
  }
}
</style>
