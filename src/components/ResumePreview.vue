<template>
    <div id="resumePreview">
        <header v-show="resume.profile && resume.profile.name">
            <section data-name="profile" v-show="resume.profile && resume.profile.name">
                <h1>
                    {{resume.profile.name}}
                </h1>
                <h2>{{resume.profile.title}}</h2>
                <p>
                    <small>{{resume.profile.city}}</small>
                    <small>{{resume.profile.birthday}}</small>
                </p>
            </section>
        </header>
        <main>
            <section data-name="projects" v-if="resume.projects && resume.projects.length>0">
                <h2>项目经历</h2>
                <ol>
                    <li v-for="item in resume.projects">
                        <h3>{{item.name}}</h3>
                        <p v-show="item.content"> {{item.content}} </p>
                    </li>
                </ol>
            </section>
            <section data-name="workHistory" v-if="resume.workHistory &&resume.workHistory.length>0">
                <h2>工作经历</h2>
                <ol>
                    <li v-for="item in resume.workHistory">
                        <h3>{{item.company}}</h3>
                        <p v-show="item.content">{{item.content}}</p>
                    </li>
                </ol>
            </section>
    
            <section data-name="education" v-if="resume.education &&resume.education.length>0">
                <h2>毕业学校</h2>
                <ol>
                    <li v-for="item in resume.education">
                        <h3>{{item.school}}</h3>
                        <p v-show="item.content">{{item.content}}</p>
                    </li>
                </ol>
            </section>
            <section data-name="awards" v-if="resume.awards &&resume.awards.length>0">
                <h2>获奖情况</h2>
                <ol>
                    <li v-for="item in resume.awards">
                        <h3>{{item.name}}</h3>
                        <p v-show="item.content"> {{item.content}} </p>
                    </li>
                </ol>
            </section>
    
            <section data-name="contacts" v-if="resume.contacts &&resume.contacts.length>0">
                <h2>联系方式</h2>
                <table>
                    <tr v-for="item in resume.contacts">
                        <td>{{item.contact}}</td>
                        <td v-show="item.content"> {{item.content}} </td>
                    </tr>
                </table>
            </section>
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
    overflow: auto;
    display: flex;
    header {
        width: 32%;
        padding: 64px;
        background: #1a1a1a;
        color: #fff;
        h1{
            // font-weight: 700;
        }
        h2,p{
            color: rgba(255, 255, 255, 0.88);
        }
    }
    main {
        flex-grow: 1;
        padding: 64px;
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
            margin-bottom: .5em;
            font-size: 16px;
        }
    }
    section[data-name="profile"],
    section[data-name="workHistory"],
    section[data-name="projects"],
    section[data-name="awards"] {
        >h1 {
            margin: .1em 0;
            font-size: 4em;
        }
    }
    section[data-name="workHistory"] {
        li li {
            margin-top: 1em;
        }
        li {
            h3 {
                // border-bottom: 1px solid #999;
                padding-bottom: .3em;
                margin-bottom: .3em;
            }
        }
    }
    section[data-name="education"] {
        li {
            line-height: 1.5;
        }
    }
    section[data-name="contacts"] {
        td:first-child {
            padding-right: 1em;
        }
    }
}
</style>