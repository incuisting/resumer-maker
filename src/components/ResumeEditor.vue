<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item,index) in resumeConfig" :class="{active: item.field === selected}" @click="selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resumeConfig" v-show="item.field === selected">
        <h2 class="item-title">{{item.title}}</h2>
        <div v-if="item.type === 'array'">
          <div class="subitem" v-for="(subitem, i) in resume[item.field]">
              <el-button class="remove" type="danger" @click="removeResumeSubfield(item.field, i)" size="mini">删除</el-button>
            <div class="resumeField" v-for="(value,key) in subitem">
              <label> {{item.template[key]}} </label>
              <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)">
            </div>
            <hr>
          </div>
          <el-button type="success"  @click="addResumeSubfield(item.field)">添加</el-button>
        </div>
        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label> {{item.template[key]}} </label>
          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`, $event.target.value)">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'ResumeEditor',
  computed: {
    selected: {
      get() {
        return this.$store.state.selected
      },
      set(value) {
        return this.$store.commit('switchTab', value)
      }
    },
    resume() {
      return this.$store.state.resume
    },
    resumeConfig() {
      return this.$store.state.resumeConfig
    }
  },
  methods: {
    changeResumeField(path, value) {
      this.$store.commit('updateResume', {
        path,
        value
      })
    },
    addResumeSubfield(field) {
      console.log(1);
      this.$store.commit('addResumeSubfield', { field })
    },
    removeResumeSubfield(field, index) {
      this.$store.commit('removeResumeSubfield', { field, index })
    }
  }
}
</script>

<style lang="scss" scoped>
@function vw($target) {
    $vw-context: (1920*.01) * 1px;
    @return ($target/$vw-context) * 1vw;
}
#resumeEditor {
  background: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  overflow: hidden;
  >nav {
    width: vw(80px);
    background: #1a1a1a;
    color: white;
    >ol {
      >li {
        height: vw(48px);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: vw(16px);
        margin-bottom: vw(16px);
        &.active {
          background: white;
          color: black;
        }
      }
    }
  }
  >.panels {
    flex-grow: 1;
    overflow: auto;
    >li {
      padding: vw(24px);
      .item-title {
        margin-bottom: .5em;
      }
     .subitem{
       position: relative;
       .remove{
         position: absolute;
         right: 0;
         top: 0;
       }
     }
    }
  }
  svg.icon {
    width: vw(24px); // 原设计稿 32px 不好看，改成 24px
    height: vw(24px);
  }
}

ol {
  list-style: none;
}

.resumeField {
  >label {
    display: block;
  }
  input[type=text] {
    margin: vw(16px) 0;
    border: 1px solid #ddd;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    width: 100%;
    height: vw(40px);
    padding: 0 vw(8px);
  }
}

hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: vw(24px) 0;
}
</style>