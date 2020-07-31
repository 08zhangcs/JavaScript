" use strict "; //严格模式


window.Afun.setAtter(tableDom, {
    'width': '100%',
    'border': '0',
    'cellpadding': '0',
    'csllspacing': '0',
    'rules': 'none',
    'id': 'table-data-warp'
});

window.Afun.getAttr(tableDom, 'id')// 获取属性


//表头数据
let theadHtml = `<thead><tr>`;
// forEach((item, index, arr)   es6语法
tableTheData.forEach((item) => {
    // 检测是否有width
    let width = item.width ? ` width= "${item.width}"` : '';
    // 检测是否有id
    let id = item.id ? ` id= "${item.id}"` : '';
    // 字符串拼接
    theadHtml += `<th${width}${id}>${item.label}</th>`;
})
theadHtml += `</tr></thead>`;
/* 列表数据 */
let tbodyHtml = `<tbody>`;
tbodyHtml += `${creatTbodyData()}</tbody>`;
// 生成表头
tableDom.innerHTML = theadHtml + tbodyHtml;
// 添加到页面
divDom.appendChild(tableDom);



/* 添加信息的显示/隐藏  */
// 打开
window.Afun.addEvent(addInfoButton, 'click', function () {
    infoDialog.classList.add('dialog-show');
});
// 关闭
window.Afun.addEvent(closeDialog, 'click', function () {
    infoDialog.classList.remove('dialog-show');
});



/* 头像事件处理 */
window.Afun.addEvent(faceView, 'click', function () {
    handlerFaceList();
    // 这里的handlerFaceList命名时由公司自己定义的
});
window.Afun.addEvent(faceViewList, 'click', function (e) {
    const ev = e || window.event;
    let nodeName = ev.target.nodeName.toLowerCase();
    // 获取img 对象
    const getImg = window.Afun.getTagName(faceView, 'img');
    const createImg = window.Afun.createEl('img');
    // 点击获取src
    let getSrc = '';
    // 清除头像高光
    if (faceSave) {
        faceSave.classList.remove('active');
    }
    // 更新src
    if (nodeName === 'li') {
        // let img = window.Afun.getTagName(e.target, 'img')[0]; // 两种方法任选 getChildren可以节省内存
        let img = window.Afun.getChildren(ev.target)[0];
        getSrc = img.src;

        faceSave = ev.target
    }
    if (nodeName === 'img') { 
        getSrc = ev.target.src;
        faceSave = ev.target.parentNode;
    }
    faceSave.classList.add('active');
    //  更新头像
    // faceUpdate(getImg, createImg, getSrc, 'add');
    // faceUpdate({
    //     type: 'add',
    //     gImg: getImg,
    //     cImg: createImg,
    //     src: getSrc
    // })
    // es6写法
    faceUpdate({
        type: 'add',
        getImg,
        createImg,
        getSrc
    })
});
window.Afun.addEvent(faceDelButton, 'click', function(e){
    const ev = e || window.event;
    // 获取 img对象
    const getImg = window.Afun.getTagName(faceView, 'img')[0];
    // 删除某个父级下面的子对象
    // faceView.removeChild(getImg, "", "", "del");
    faceUpdate({
        type: 'add',
        getImg
    })
    阻止时间冒泡
    if (ev.stopPropagation) {
        ev.stopPropagation();
    }else{
        ev.cancelBubble = true; // IE浏览器 11以下版本
    }
});

inputUsername.onblur = function(){  // 谁绑定方法 this就指向谁
    let value = this.value;
    if(!value){
        window.UI.$message({
            message: '账户不能为空',
            type: "paimary",
            duration: 3000
        })
        // alert('账户不能为空');
    }
}
