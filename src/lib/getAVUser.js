import AV from '../lib/leancloud'

export default function(user) { //传参有问题，不懂
    var { id, attributes: { username } } = user || AV.User.current() || { attributes: {} }
        //https://leancloud.cn/docs/leanstorage_guide-js.html#当前用户 leancloud文档
    return { id, username }
}