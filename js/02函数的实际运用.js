" use strict "; //严格模式

// 获取元素
function $(id) {
    return document.getElementById(id);
}
// 创建元素
function createEl(node) {
    return document.createElement(node);
}
//.......
//setAttribute 设置属性
// function setAtter(node, style, value) {
//     node.setAttribute(style, value);
// }
// setAtter(tableDom, 'width','80%');
// setAtter(tableDom, 'border','0');
// setAtter(tableDom, 'cellpadding','0');
// setAtter(tableDom, 'csllspacing','0');
// setAtter(tableDom, 'rules','none');
// setAtter(tableDom, 'id','table-data-warp');
//.......

//setAttribute 设置属性
function setAtter(node, styles) {
    for (let key in styles) {
        node.setAttribute(key, styles[key]);
    }
}
// 获取属性
function getAttr(node, attr) {
    return node.getAttribute(attr);
}
// (1)


const divDom = $('table-data-warp'); 
const tableDom = createEl('table');//创建DOM元素


//setAttribute 设置属性
setAtter(tableDom, {
    'width':'80%',
    'border':'0',
    'cellpadding':'0',
    'csllspacing':'0',
    'rules':'none',
    'id':'table-data-warp'
});
//tableDom.getAttribute('id'); // 获取属性
getAttr(tableDom, 'id');
// (2)





tableDom.innerHTML = `<thead>
                        <tr>
                            <th>头像</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>手机号</th>
                            <th>国籍</th>
                            <th width= "200">爱好</th>
                            <th>头衔</th>
                            <th>操作</th>
                        </tr>
                    </thead>`




divDom.appendChild(tableDom);








