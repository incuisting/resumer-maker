import AV from '../lib/leancloud'

export default function(user) {
    var { id, attributes: { username } } = user || AV.User.current() || { attributes: {} }
        //https://leancloud.cn/docs/leanstorage_guide-js.html#当前用户 leancloud文档
    return { id, username }
}