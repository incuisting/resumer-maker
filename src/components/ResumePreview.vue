<template>
    <div id="resumePreview">
        <transition name="slide-fade">
            <header v-show="resume.profile && resume.profile.name">
                <section data-name="profile" v-show="resume.profile && resume.profile.name">
                    <h1>
                        {{resume.profile.name}}
                    </h1>
                    <h2>意向岗位:</h2>
                    <h2>{{resume.profile.intention}}</h2>
                    <p>
                        现居住：{{resume.profile.city}}
                    </p>
                    <p>
                        出生年月：{{resume.profile.birthday}}
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
 @function vw($target) {
    $vw-context: (1920*.01) * 1px;
    @return ($target/$vw-context) * 1vw;
}
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
        padding: vw(64px);
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
        padding: vw(14px) vw(96px) vw(64px) vw(96px);
        overflow: auto;
        section {
            position: relative;
            margin-top: vw(48px);
            h2,
            h3 {
                font-size: vw(16px);
                font-weight: bold;
            }
            h3 {
                font-size: vw(14px);
                margin-bottom: .3em;
            }
            ol {
                margin-top: vw(24px);
                li {
                    margin-bottom: vw(24px);
                }
            }
            svg.icon {
                position: absolute;
                fill: #1a1a1a;
                top: vw(2px);
                left: vw(-24px);
            }
        }
    }
    * {
        box-sizing: border-box;
        font-variant: normal;
        font-weight: normal;
    }
    section+section {
        margin-top: vw(24px);
    }
    p {
        white-space: pre-line; //忽略文字间的空格
        max-width: vw(784px);
        word-wrap:break-word; 
        word-break:normal; 
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
            font-size: vw(56px);
        }
        p {
            margin-top: vw(8px);
            font-size: vw(14px);
            line-height: 0.5;
            &:last-of-type{
                margin: vw(2px) 0 vw(8px) 0;
            }
        }
        h2{
            font-size: vw(20px);
            margin-top:vw(16px);
            &:last-of-type{
                margin: 0 0 vw(16px) 0;
            } 
        }
        
    }
    section[data-name="workHistory"] {
        li li {
            margin-top: vw(14px);
        }
        li {
            h3 {
                // border-bottom: 1px solid #999;
            }
        }
    }
    section[data-name="contacts"] {
        position: relative;
        margin-top: vw(16px);
        h2 {
            margin-left: vw(24px);
            font-size: vw(17px);
            font-weight: 700;
        }
        svg.icon {
            position: absolute;
            fill: #ffffff;
            top: vw(4px);
            left: 0;
        }
        table {
            margin-top: vw(8px);
        }
        td:first-child {
            padding-right: vw(14px);
            font-weight: 700;
            text-transform: uppercase;
        }
    }
}
</style>