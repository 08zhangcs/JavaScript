(function() {
    ' use strict ';

    if (!window.UI) { window.UI = {} };

    const messageConfig = {
        duration: 3000
    }

    function $message(params) {
        const body = document.getElementsByTagName('body')[0];
        const messageDom = window.Afun.createEl('div', {
                id: 'alert-ui'
            })
        if (params.html) {
            messageDom.innerHtml = params.message;
        }else{
            messageDom.innerText = params.message;
        }
        // 时间配置
        if (params.duration) { messageConfig.duration = params.duration }
        //  主题
        UI.theme(messageDom ,params.type)
        // 添加至页面
        body.appendChild(messageDom);
        // 执行show
        UI.show(messageDom);
    }
    window.UI.$message = $message;

    //  处理主题
    function theme(node, type) {
        if(!type){
            return false;
        }
        node.classList.add(`message-theme-${type}`);
    }
    window.UI.theme = theme;

    // 显示 show对象
    function show(node){
        node.timerShow = setTimeout(() => {
            node.classList.add("show");
            clearTimeout(node.timerShow);
        }, 10);
        UI.hide(node);
    }
    window.UI.show = show;

    // 影藏 hide对象
    function hide(node){
        node.timerHide = setTimeout(() => {
            node.classList.remove("show");
            clearTimeout(node.timerHide);
            // remove 对象
            UI.remove(node);

        }, messageConfig.duration);
    }
    window.UI.hide = hide;

    // 删除对象 remove
    function remove(node) {
        const body = document.getElementsByTagName('body')[0];
        node.timerRemove = setTimeout(() => {
            clearTimeout(node.timerRemove);
            // remove 对象
            body.removeChild(node);
        }, 1000);
    }
    window.UI.remove = remove;

    


})()