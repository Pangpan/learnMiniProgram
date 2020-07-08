// pages/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: '',
    num: 0,

    navbararr: ['衣服', '鞋子', '裙子', '帽子']
  },

  numins(e){
    console.log(e)
    this.setData({
      num: this.data.num += 1
    })
  },

  handleChangeBar(e){
    // console.log(e.detail);
    
  },

  changenum(){
    // 最终目的：改变m-select组件中的计数count
    // 1、获取组件对象
    const m_sel = this.selectComponent('#m-select')
    // console.log(m_sel);

    // 2、通过组件.setData修改组件中的数据（不合理）
    // m_sel.setData({
    //   count: m_sel.data.count +=1
    // })
    
    // 3、通过组件中暴露出的方法对数据进行修改
    m_sel.changecount(10)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload');
    wx.showToast({
      title: '这是onload',
    })

    app.getUserInfo()
    
  },

  getInput(){
    console.log(this.data.info)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onshow');
    wx.showToast({
      title: '这是onshow',
    })
  },

})