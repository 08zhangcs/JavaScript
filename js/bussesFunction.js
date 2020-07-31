" use strict "; //严格模式
//  api获取头像的函数
function handlerFaceListCallback(data) {
    const requesData = data.data;

    let liHtml = ``;
    for (let key of requesData) {
        liHtml += `<li><img src="${key}" alt=""></li>`;
    }
    faceViewList.innerHTML = liHtml;
}



//  更新头像
function faceUpdate(params) {
    if (params.type === 'add') {
        // 头像存在  则修改头像的src
        if (params.getImg.length !== 0) {
            params.getImg[0].getSrc = params.getSrc; 
        }else{
            // img  写入 src
            params.createImg.src = params.getSrc;
            window.Afun.addChild(faceView, params.createImg);
        }
    }
    if (params.type === 'del' && params.getImg) {
        faceView.removeChild(params.getImg);
    }
     
}

