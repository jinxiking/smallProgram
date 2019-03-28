//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tel : ''
  },    
  onLoad: function (option) {
    this.setData({
      tel : option.tel
    })
  },
  toHome : ()=>{
    wx.redirectTo({
      url: '/pages/home/index/index',
    })
  },
  scanCode : ()=>{
    wx.scanCode({
      success : (res)=>{
        //获得的mac地址
        console.log(res.result)
      }
    })
  }
})
