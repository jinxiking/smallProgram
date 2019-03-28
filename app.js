//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var token = wx.getStorageSync('token') || '';

    // 登录
    if (token){
      //走API验证token是否过期
      //过期doLogin 根据用户信息做跳转 不过期直接根据用户信息判断是否跳转到首页
      // wx.redirectTo({
      //   url: '/pages/home/index/index',
      // })
      
    }else{
      this.doLogin();
    }
  },
  doLogin : function(){
    let _this = this;
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res);
        //拿着code去后台请求token
        
        //假设返回了 token 123456 如果是首次登录 

        wx.setStorageSync('token', '123456');
        _this.globalData.token = '123456';
        //如果是首次登录 
      }
    })  
  },
  globalData: {
    userInfo: null,
    token : ''
  }
})