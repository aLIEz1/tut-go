Page({
    data: {
        inputShowed: false,
        inputVal: "",
        banners: [
            {url:'/images/goods/1.png'},
            {url:'/images/goods/2.png'},
            {url:'/images/goods/5.png'},
            {url:'/images/goods/6.png'}
        ],
    },
    onLoad() {
        this.setData({
            search: this.search.bind(this)
        })
    },
    search: function (value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
            }, 200)
        })
    },
    selectResult: function (e) {
        console.log('select result', e.detail)
    },
});