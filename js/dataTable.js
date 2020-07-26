" use strict "


// 表头数据
const tableTheData = [
    {label: "头像"},
    {label: "姓名"},
    {label: "性别"},
    {label: "年龄"},
    {label: "手机号"},
    {label: "国籍"},
    {
        label: "爱好",
        width: 200,
        id: "abc"
    },
    {label: "头衔"},
    {label: "操作"}
]

const tableTbodyData = [
    {
        face: {
            gender: 'boy',
            img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3521319392,1160740190&fm=26&gp=0.jpg'
        },
        name: {
            trueName: '张三',
            nickname: '你的昵称'
        },
        age: {
            number: 25
        },
        phone: {
            code: '+86',
            number: 17700000000
        },
        country: {
            National_flag: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3784426051,231539644&fm=26&gp=0.jpg',
            name: '中国',
            color: 'red'
        },
        like: [
            {tag: '跑步', color: '#468d9c'},
            {tag: '看电影', color: '#468c4e'},
            {tag: '二次元', color: '#9c468b'},
            {tag: '小狗', color: '#9c4646'},
            {tag: '小说', color: '#ba3f10'}
        ],
        rank: {
            name: '小白',
            level: 2
        }

    },
    {
        face: {
            gender: 'girl',
            img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3521319392,1160740190&fm=26&gp=0.jpg'
        },
        name: {
            trueName: '张三',
            nickname: '你的昵称'
        },
        age: {
            number: 20
        },
        phone: {
            code: '+86',
            number: 17700000000
        },
        country: {
            National_flag: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3784426051,231539644&fm=26&gp=0.jpg',
            name: '中国',
            color: 'red'
        },
        like: [
            {tag: '跑步', color: '#468d9c'},
            {tag: '看电影', color: '#468c4e'},
            {tag: '二次元', color: '#9c468b'},
            {tag: '小狗', color: '#9c4646'},
            {tag: '小说', color: '#ba3f10'}
        ],
        rank: {
            name: '小白',
            level: 3
        }
    }
]