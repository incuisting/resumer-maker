<template>
  <div id="app" :class="{previewMode : previewMode}">
    <div :class="{page:page,fullPage:fullPage}">
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
      previewMode: false,
      page:true,
      fullPage:false
    }
  },
  components: { Topbar, ResumeEditor, ResumePreview },
  methods: {
    exitPreview() {
      this.previewMode = false
      this.fullPage = false
      this.page = true
    },
    preview() {
      this.previewMode = true
      this.fullPage = true
      this.page = false
    }
  },
  created() {
    document.body.insertAdjacentHTML('afterbegin', icons) //插入icon的svg
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
@function vw($target) {
    $vw-context: (1920*.01) * 1px;
    @return ($target/$vw-context) * 1vw;
}
// px to vw
#app {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background:url('./assets/images/background.jpg'); 
}
.fullPage{
  margin: 10vh 0 5vh 0;
}
.page {
  width: 80vw;
  height: 80vh;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;

  display: flex;
  header {
    width: vw(560px);
    display: flex;
    flex-direction: column;
    #resumeEditor{
      flex-grow: 1;
    }
  }
  
  main {
    flex-grow: 1;
    #resumePreview{
      // margin-left: 8px;
    }
  }
}


svg.icon {
  height: 1em;
  width: 1em;
  fill: currentColor;
  vertical-align: -0.1em;
  font-size: vw(16px);
}

#app {
  &.previewMode{
    overflow: auto; //使得全屏显示时的底部白边
  }
  &.previewMode #topbar {
    display: none;
  }
  &.previewMode #resumeEditor {
    display: none;
  }
  &.previewMode #resumePreview {
    min-width: vw(976px);
    margin: 0 auto;
  }
  #exitPreview {
    display: none;
  }
  &.previewMode #exitPreview {
    display: inline-block;
    position: fixed;
    right: vw(16px);
    bottom: vw(16px);
  }
}
</style>