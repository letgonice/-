// packageMy/pages/myaddress/myaddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userAddress: [
      {
      id: 2,
      name: "KK Chen",
      user:'我',
      number: "15017812311",
      address: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5A TUCSON, AZ 85705 USA',
      // img: '../../assets/image/icon/国外地址.png',
      bgc: '#e7691d',
      checked:true
    },
      {
      id: 3,
      name: "KK Chen",
      user:'我',
      number: "15017812311",
      address: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5A TUCSON, AZ 85705 USA',
      // img: '../../assets/image/icon/国外地址.png',
      bgc: '#4e148c',
      checked:false
    }
  ],
  },
  addAddressBtn(){
    wx.navigateTo({
      url: '/packageMy/pages/addAddress/addAddress',
    })
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