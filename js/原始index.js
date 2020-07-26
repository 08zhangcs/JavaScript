" use strict "; //严格模式


const divDom = document.createElemen('table-data-warp'); // 等同于上面的获取ID
const tableDom = document.createElement('table');//创建DOM元素




tableDom.setAttribute('width','80%'); //setAttribute 设置属性
tableDom.setAttribute('border','0');
tableDom.setAttribute('cellpadding','0');
tableDom.setAttribute('csllspacing','0');
tableDom.setAttribute('id','table-data-warp');
tableDom.setAttribute('rules','none');

tableDom.getAttribute('id'); // 获取属性





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

// console.log(tableDom)

divDom.appendChild(tableDom);








