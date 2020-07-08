// pages/about/about.js

import request from '../../utils/network.js'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    allData: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // --------- 1、原生的方式发送请求 -------------
    // this.get_data_origin()

    // --------- 2、使用封装的request发送请求
    // Promise的好处是防止出现回调地狱
    request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {

      }
    }).then(res => {
      console.log(res)
      this.setData({
        allData: res.data
      })
    })
  },

  get_data_origin(){
    // 1、发送最简单的数据请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success(res){
    //     console.log(res)
    //   }
    // })

    // 2、get请求，并且携带参数
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success(res){
    //     console.log(res)
    //   }
    // })

    // 3、post请求，并且携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        type: 'sell',
        page: 1
      },
      success(res){
        console.log(res)
      },
      fail(err){
        console.log('数据请求失败时')
      },
      complete(){
        console.log('接口调用结束时')
      }
    })
  },

  // 弹框的展示
  // 1、showToast
  handleShowToast(){
    wx.showToast({
      title: '成功',
      duration: 3000,
      // icon: 'loading',
      mask: true,
      success(){
        console.log('弹框展示成功')
      },
      fail(){
        console.log('弹框展示失败')
      },
      complete(){
        console.log('弹框展示')
      }
    })
  },

  // 2、showModal
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      cancelColor: 'red',
      // showCancel: false,
      success(res){
        console.log(res)
        if(res.cancel){
          console.log('点击的是取消')
        }
        if(res.confirm){
          console.log('点击的是确定')
        }
      }
    })
  },

  // 3、ShowLoading
  handleShowLoading(){
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    // 会一直存在，需手动添加一个hideLoading消失
    setTimeout(() => {
      wx.hideLoading({
        success: (res) => {},
      })
    }, 3000)
  },

  // 4、showActionSheet
  handleshowActionSheet(){
    wx.showActionSheet({
      itemList: ['相册', '爱好'],
      itemColor: 'blue',
      success(res){
        console.log(res)
        console.log(res.tapIndex) // 记录点击的下标值
      },
      fail(err){
        console.log(err)
      }
    })
  }
  
})