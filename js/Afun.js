(function () {
    ' use strict ';

    if (!window.Afun) {
        window.Afun = {}
    };



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

    // 获取classname 元素
    function getClassName(className) {
        // document.querySelector(className)   // 单个对象
        // document.querySelectorAll(className)  // 数组对象
        return document.getElementsByClassName(className);
    }
    window.Afun.getClassName = getClassName;

    // 获取标签 元素
    function getTagName(parentNode, target) {
        return parentNode.getElementsByTagName(target);
        // getElementsByTagName  获取无限层级
        // ul.children  获取第一层
    }
    window.Afun.getTagName = getTagName;

    // 获取标签 对象第一层
    function getChildren(parentNode) {
        return parentNode.children;
    }
    window.Afun.getChildren = getChildren;



    // 创建元素
    function createEl(node, attr) {
        let dom = document.createElement(node);
        if (attr) {
            Afun.setAtter(dom, attr)
        }
        return dom;
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
    function getAttr(node, attr) {
        return node.getAttribute(attr);
    }
    window.Afun.getAttr = getAttr;

    //addEventListener  添加方法
    function addEvent(domNode, eventType, handlerFunction) { //第三个参数是true （事件捕获） / false （事件冒泡）
        if (window.addEventListener) {
            domNode.addEventListener(eventType, handlerFunction);
        }else{
            domNode.attachEvent(`on${eventType}`, handlerFunction);
        }
    }
    window.Afun.addEvent = addEvent;

    //removeEventListener  删除方法
    function removeEvent(domNode, eventType, handlerFunction) {
        if (window.removeEventListener) {
            domNode.removeEventListener(eventType, handlerFunction);
        }else{
            domNode.detachEvent(`on${eventType}`, handlerFunction);
        }
    }
    window.Afun.removeEvent = removeEvent;


    // 往父级末尾添加子节点
    function addChild(parentNode, node) {
        parentNode.appendChild(node); // 对象末尾添加

    }
    window.Afun.addChild = addChild;



})()