" use strict "; //严格模式

const divDom = window.Afun.$('table-data-warp'); 
const tableDom = window.Afun.createEl('table');//创建DOM元素

window.Afun.setAtter(tableDom, {
    'width':'80%',
    'border':'0',
    'cellpadding':'0',
    'csllspacing':'0',
    'rules':'none',
    'id':'table-data-warp'
});

// window.Afun.getAttr(tableDom, 'id')// 获取属性


//表头数据
let theadHtml= `<thead><tr>`; 
// forEach((item, index, arr)   es6语法
tableTheData.forEach((item) =>{
    // 检测是否有width
    let width = item.width ? ` width= "${item.width}"` : '';
    // 检测是否有id
    let id = item.id ? ` id= "${item.id}"` : '';
    // 字符串拼接
    theadHtml +=`<th${width}${id}>${item.label}</th>`;
})
theadHtml += `</tr></thead>`;


/*
    列表数据
* */
let tbodyHtml =  `<tbody>`;
tbodyHtml += `${creatTbodyData()}</tbody>`;

// 生成表头
tableDom.innerHTML = theadHtml + tbodyHtml;


divDom.appendChild(tableDom);








