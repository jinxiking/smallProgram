//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    telephone : 99999
  },
  onLoad: function () {
    
  },
  telephoneBlur(e){
    this.setData({
      telephone: e.detail.value
    })
  }
})
