<template>
    <div id="resumePreview">
        <transition name="slide-fade">
            <header v-show="resume.profile && resume.profile.name">
                <section data-name="profile" v-show="resume.profile && resume.profile.name">
                    <h1>
                        {{resume.profile.name}}
                    </h1>
                    <h2>意向岗位:</h2>
                    <h2>{{resume.profile.title}}</h2>
                    <p>
                        <small>现居住：{{resume.profile.city}}</small>
                    </p>
                    <p>
                        <small>出生年月：{{resume.profile.birthday}}</small>
                    </p>
                </section>
                <section data-name="contacts" v-if="resume.contacts &&resume.contacts.length>0">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-phone"></use>
                    </svg>
                    <h2>联系方式</h2>
                    <table>
                        <tr v-for="item in resume.contacts">
                            <td>{{item.contact}}</td>
                            <td v-show="item.content"> {{item.content}} </td>
                        </tr>
                    </table>
                </section>
            </header>
        </transition>
        <main>
             <transition-group  tag="section" name="slide-fade"> 
                <section data-name="projects" v-if="resume.projects && resume.projects.length>0" :key="0">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-heart"></use>
                    </svg>
                    <h2>项目经历</h2>
                    <ol>
                        <li v-for="(item,index) in resume.projects" :key="index">
                            <h3>{{item.name}}</h3>
                            <p v-show="item.content"> {{item.content}} </p>
                        </li>
                    </ol>
                </section>
                <section data-name="workHistory" v-if="resume.workHistory &&resume.workHistory.length>0" :key="1">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-work"></use>
                    </svg>
                    <h2>工作经历</h2>
                    <ol>
                        <li v-for="(item,index) in resume.workHistory" :key="index">
                            <h3>{{item.company}}</h3>
                            <p v-show="item.content">{{item.content}}</p>
                        </li>
                    </ol>
                </section>
    
                <section data-name="education" v-if="resume.education &&resume.education.length>0" :key="2">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-book"></use>
                    </svg>
                    <h2>毕业学校</h2>
                    <ol>
                        <li v-for="(item,index) in resume.education" :key="index">
                            <h3>{{item.school}}</h3>
                            <p v-show="item.content">{{item.content}}</p>
                        </li>
                    </ol>
                </section>
                <section data-name="awards" v-if="resume.awards &&resume.awards.length>0" :key="3">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-cup"></use>
                    </svg>
                    <h2>获奖情况</h2>
                    <ol>
                        <li v-for="(item,index) in resume.awards" :key="index">
                            <h3>{{item.name}}</h3>
                            <p v-show="item.content"> {{item.content}} </p>
                        </li>
                    </ol>
                </section>
             </transition-group> 
        </main>
    </div>
</template>
 
 <script>
export default {
    name: 'ResumePreview',
    computed: {
        resume() {
            return this.$store.state.resume
        }
    },
    created() {
        console.log(this.resume)
    }
}
</script>
 
 <style scoped lang="scss">
#resumePreview {
    height: 100%;
    background: #ffffff;
    color: #1a1a1a;
    line-height: 1.2; // ol{ list-style: none; }
    overflow: hidden;
    display: flex; // 动画
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s ease;
    }
    .slide-fade-enter,
    .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
    header {
        width: 32%;
        padding: 64px;
        background: #1a1a1a;
        color: #fff;
        h1 {
            // font-weight: 700;
        }
        h2,
        p {
            color: rgba(255, 255, 255, 0.88);
        }
    }
    main {
        flex-grow: 1;
        padding: 14px 96px 64px 96px;
        overflow: auto;
        section {
            position: relative;
            margin-top: 48px;
            h2,
            h3 {
                font-size: 16px;
                font-weight: bold;
            }
            h3 {
                font-size: 14px;
                margin-bottom: .3em;
            }
            ol {
                margin-top: 24px;
                li {
                    margin-bottom: 24px;
                }
            }
            svg.icon {
                position: absolute;
                fill: #1a1a1a;
                top: 2px;
                left: -24px;
            }
        }
    }
    * {
        box-sizing: border-box;
        font-variant: normal;
        font-weight: normal;
    }
    section+section {
        margin-top: 2em;
    }
    p {
        white-space: pre-line; //忽略文字间的空格
    }
    section {
        >h2:first-child {
            display: inline-block;
            padding: .2em;
            margin-bottom: .5em; // font-size: 16px;
        }
    }
    section[data-name="profile"] {
        >h1 {
            margin: .1em 0;
            font-size: 4em;
        }
        p {
            margin-top: 8px;
        }
    }
    section[data-name="workHistory"] {
        li li {
            margin-top: 1em;
        }
        li {
            h3 {
                // border-bottom: 1px solid #999;
            }
        }
    }
    section[data-name="contacts"] {
        position: relative;
        h2 {
            margin-left: 24px;
            font-size: 17px;
            font-weight: 700;
        }
        svg.icon {
            position: absolute;
            fill: #ffffff;
            top: 4px;
            left: 0;
        }
        table {
            margin-top: 8px;
        }
        td:first-child {
            padding-right: 1em;
            font-weight: 700;
            text-transform: uppercase;
        }
    }
}
</style>