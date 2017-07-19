<template>
  <div id="app">
    <Topbar class="topbar"></Topbar>
    <main>
      <Editor v-bind:resume="resume" class="editor"></Editor>
      <Preview v-bind:resume="resume" class="preview"></Preview>
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'


export default {
  data() {
    return {
      resume: {
        profile: {
          name: '',
          city: '',
          birth: ''
        },
        workHistory: [
          { company: '', content: '' }
        ],
        studyHistory: [
          { school: '', duration: '', degree: '' }
        ],
        projects: [
          { name: '', content: '' }
        ],
        awards: [
          { name: '' }
        ],
        contacts: {
          qq: '', wechat: '', phone: '', email: ''
        }
      }
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
}

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
</style>
