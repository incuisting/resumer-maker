<template>
  <div id="app" :class="{previewMode : previewMode}">
    <div class=page>
      <header>
        <Topbar @preview="preview" />
        <ResumeEditor/>
      </header>
      <main>
        <ResumePreview/>
      </main>
      <el-button id="exitPreview" v-on:click="exitPreview">退出全屏</el-button>
    </div>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
import icons from './assets/icons'
import store from './store/index'
import AV from './lib/leancloud'
import getAVUser from './lib/getAVUser'
export default {
  name: 'app',
  store,
  data() {
    return {
      previewMode: false
    }
  },
  components: { Topbar, ResumeEditor, ResumePreview },
  methods: {
    exitPreview() {
      this.previewMode = false
    },
    preview() {
      this.previewMode = true
    }
  },
  created() {
    document.body.insertAdjacentHTML('afterbegin', icons) //
    let state = localStorage.getItem('state')
    if (state) {
      state = JSON.parse(state)
    }
    // 先临时关闭一下，以免影响我开发
    this.$store.commit('initState', state)
    this.$store.commit('setUser', getAVUser())
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background:#222629; 
}

.page {
  width: 80vw;
  height: 80vh;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;

  display: flex;
  header {
    width: 40em;
    display: flex;
    flex-direction: column;
    #resumeEditor{
      flex-grow: 1;
    }
  }
  
  main {
    flex-grow: 1;
  }
}


svg.icon {
  height: 1em;
  width: 1em;
  fill: currentColor;
  vertical-align: -0.1em;
  font-size: 16px;
}

#app {
  &.previewMode #topbar {
    display: none;
  }
  &.previewMode #resumeEditor {
    display: none;
  }
  &.previewMode #resumePreview {
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