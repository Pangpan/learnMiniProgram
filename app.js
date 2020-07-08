const TOKEN = 'token'

App({
  globalData: {
    userInfo: '',
    token: ''
  },

  // 监听小程序初始化
  onLaunch(){
    const token = wx.getStorageSync(TOKEN)
    if(token && token.length > 0){
      console.log('进行了验证token是否过期的操作')
      this.check_token(token)
    } else {
      console.log('进行了登陆操作')
      this.login()
    }
  },

  check_token(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        // console.log(res)
        // console.log('token有效')
        if(!res.data.errCode){
          this.globalData.token = token
        } else {
          this.login()
        }
      },
      fail(err){
        console.log(err)
      }
    })
  },

  login(){
    // 登录操作
    wx.login({
      // timeout: 0,     // 超时时间
      success: (res) => {
        // code只有5分钟有效期
        console.log(res.code)
        // 1、获取code
        const code = res.code

        // 2、将code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            console.log(res)
            // 1、取出token
            const token = res.data.token
            // 2、将token保存到globalData中
            this.globalData.token = token

            // 3、将token存到本地存储中
            // wx.setStorage({     // 异步
            //   data: data,
            //   key: 'key',
            // })
            wx.setStorageSync(TOKEN, token)   // 同步
          }
        })
      }
    })
  },

  onError (msg) {
    console.log(msg)
  },
  getUserInfo(){
    wx.getSetting({
      withSubscriptions: true,
      success:(res) =>{
        console.log(res);
        if(!res.authSetting["scope.userInfo"]){
          wx.openSetting({
            withSubscriptions: true,
            success: () => {
              wx.authorize({
                scope: 'scope',
              })
            }
          })
        } else {
          console.log('已授权');
          wx.getUserInfo({
            // lang: '',
            success: (res) => {
              console.log(res);
            }
          })
        }
      },
      fail: () =>{
        console.log(res);
        
      }
    })
  }
})