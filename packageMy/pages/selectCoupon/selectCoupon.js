// packageMy/pages/selectCoupon/selectCoupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponList:[
      //discountStatus 0代表元1代表折 status 0未使用 1已使用 2已过期
      {id:1,meet:100,discountStatus:0,startTime:'2020.10.10',  overTime:'2020.11.11',  discount:15, status:0,workable:true},
      {id:2,meet:100,discountStatus:1,startTime:'2020.10.10',  overTime:'2020.11.11',  discount:15,status:1,workable:false},
      {id:3,meet:100,discountStatus:2,startTime:'2020.10.10',  overTime:'2020.11.11',  discount:15,status:2,workable:false}
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})