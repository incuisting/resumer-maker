import AV from 'leancloud-storage'

var APP_ID = 'k6SOIiFIuxrQRmjsXD7sPbxq-gzGzoHsz';
var APP_KEY = 'KHrbNCeqsmqKPctnhyYrzIzh';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

export default AV