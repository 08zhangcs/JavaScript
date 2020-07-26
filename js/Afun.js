(function () {
    ' use strict ';

    if (!window.Afun) { window.Afun = {}};

    // 获取元素
    function $(id) {
        if (typeof id != 'string') {
            throw new Error('参数ID必须是一个字符串')
        }
        const dom = document.getElementById(id);
        if (!dom) {
            throw new Error('没有找到dom对象')
        }
        return dom;
    }
    window.Afun.$ = $;

    // 创建元素
    function createEl(node) {
        return document.createElement(node);
    }
    window.Afun.createEl = createEl;

    //setAttribute 设置属性
    function setAtter(node, styles) {
        for (let key in styles) {
            node.setAttribute(key, styles[key]);
        }
    }
    window.Afun.setAtter = setAtter;

    // 获取属性
    // function getAttr(node, attr) {
    //     return node.getAttribute(attr);
    // }
    // window.Afun.getAttr = getAttr;


    


})()
