" use strict "; //严格模式


const divDom = window.Afun.$('table-data-warp'); 
// const divDom = $('table-data-warp'); 
const tableDom = window.Afun.createEl('table');//创建DOM元素
// const tableDom = createEl('table');//创建DOM元素

window.Afun.setAtter(tableDom, {
    'width':'80%',
    'border':'0',
    'cellpadding':'0',
    'csllspacing':'0',
    'rules':'none',
    'id':'table-data-warp'
});
//setAttribute 设置属性
// setAtter(tableDom, {
//     'width':'80%',
//     'border':'0',
//     'cellpadding':'0',
//     'csllspacing':'0',
//     'rules':'none',
//     'id':'table-data-warp'
// });

window.Afun.getAttr(tableDom, 'id')
//tableDom.getAttribute('id'); // 获取属性
// getAttr(tableDom, 'id');
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








