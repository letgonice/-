// packageA/pages/writeaddress/writeaddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
nationMsg:{
  name:'',
  phone:'',
  address:'',
  city:'',
  postcode:''
}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      console.log(options);
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
  blueText(){
    console.log(11);
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