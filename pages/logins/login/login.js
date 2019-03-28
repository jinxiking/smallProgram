//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    telephone : 18604238608
  },
  onLoad: function () {
    
  },
  telephoneBlur(e){
    this.setData({
      telephone: e.detail.value
    })
  },
  bindViewTap(){
    //对手机号进行验证发送验证码验证页面
    let reg = /\d{11}$/;

    if (reg.test(this.data.telephone)){
      wx.redirectTo({
        url: '/pages/logins/bind/bind?tel=' + this.data.telephone,
      })
    }else{
      wx.showToast({
        title : '格式不正确',
        icon: 'none' 
      });
    }

  }
})
