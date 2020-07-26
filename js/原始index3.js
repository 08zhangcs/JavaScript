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

window.Afun.getAttr(tableDom, 'id')// 获取属性


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

    let trHtml =  ``;

        for (let i = 0; i < tableTbodyData.length; i++) {
            const data = tableTbodyData[i];
            // break  终止
            // continue 跳过此循环
            // 开始tr
            trHtml += `<tr>`
            // 头像
            trHtml += `<td>
                        <div class = "face">
                            <span class= "gender icon-${data.face.gender}"></span>
                            <img src="${data.face.img}" />
                        </div>
                       </td>`
            // 姓名
            trHtml += `<td>
                        <div class = "people-name">
                            <h4 class= "name">${data.name.trueName}</h4>
                            <span class= "nickname option-05 fs-12">昵称：${data.name.nickname}</span>
                        </div>
                        </td>`
            // 性别
            trHtml += `<td>
                        <div class = "gender-wrap">
                            <span class= "gender icon-boy ${data.face.gender === 'boy'? '' : 'option-05'}"></span>
                            <span class= "gender icon-girl ${data.face.gender === 'girl'? '' : 'option-05'}"></span>
                        </div>
                        </td>`
            // 年龄
            trHtml += `<td>
                        <div class = "age">
                            <p>${data.age.number}</p>
                            <span class= "option-05 fs-12">(单身狗)</span>   
                        </div>
                        </td>`
            // 手机号
            trHtml += `<td>
                        <div class = "phone">
                            ${data.phone.code}<span class= "option-05">(中国)</span><br />
                            ${data.phone.number}
                        </div>
                        </td>`
            // 国籍
            trHtml += `<td>
                        <div class = "country">
                            <img src="${data.country.National_flag}" alt="${data.country.name}" />
                            <p class="country-name" style="color: ${data.country.color};">${data.country.name}</p>
                        </div>
                        </td>`
            // 爱好
            let likeHtml = '';
            data.like.forEach(item => {
                likeHtml += `<span style="background-color: ${item.color}">${item.tag}</span>`
            })
            trHtml += `<td>
                        <div class = "likes">
                            ${likeHtml}
                        </div>
                        </td>`
            // 头衔
            trHtml += `<td>
                        <div class = "grade">
                            <span class="role-name">${data.rank.name}</span>
                            <div class="grade-wrap icon-grade">
                                <div class="grade-hight icon-grade" style="width: ${data.rank.level * 20}%;"></div> 
                            </div> 
                        </div>
                        </td>`
            // 操作
            trHtml += `<td>
                        <div class = "operation">
                            <a href="javascript: void(0)" class="operation-btn">设置</a>
                            <ul class="likes">
                                <a href="javascript: void(0);">编辑</a>
                                <a href="javascript: void(0);">删除</a>
                                <a href="javascript: void(0);">锁定</a>
                                <a href="javascript: void(0);">收起</a>
                            </ul>
                        </div>
                        </td>`

            // 结束tr
            trHtml +=  `</tr>`;
        }
    


tbodyHtml += `${trHtml}</tbody>`;


    // const btn = document.getElementsByClassName('operation-btn')
    // const likes = document.getElementsByClassName('likes')
    // btn.onclick = function(){
    //     likes.style.display = block;
    // }






// 生成表头
tableDom.innerHTML = theadHtml + tbodyHtml;




divDom.appendChild(tableDom);








