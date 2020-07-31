" use strict "; //严格模式

// 获取div  
const divDom = window.Afun.$('table-data-warp');
// 固定语法
const tableDom = window.Afun.createEl('table'); //创建DOM元素
/* 添加信息的显示/隐藏  */
// 拿到的是一个数组
const addInfoButton = window.Afun.getClassName('add-info-button')[0];
// const addInfoButton = window.Afun.getClassName('.add-info-button span');  //用querySelector
// 获取from 弹窗打开关闭对象
const infoDialog = window.Afun.$('info-dialog');
const closeDialog = window.Afun.getClassName('close-dialog')[0];
// 获取头像区域
const faceView = window.Afun.getClassName('face-view')[0];
// 获取头像列表区域
const faceViewList = window.Afun.getClassName('face-view-list')[0];
// 获取删除头像按钮
const faceDelButton = window.Afun.getTagName(faceView, 'a')[0];
// 头像存储
let faceSave = null;

// input dom 对象
const inputUsername = window.Afun.$('usernameInput');