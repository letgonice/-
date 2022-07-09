// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nation:'美国',
    popup:{
      show:false,
      btnList:['普通货物','电子产品','液体粉末','内地EMS','广东EMS'],
      index:"0",
      // 可以换成需要的参数
      name:'普通货物'
    }
  },
  toCopyAddress(){
    wx.navigateTo({
      url: '/packageA/pages/warehouse/warehouse',
    })
  },

  selectGoods(e){
    let index =  e.currentTarget.dataset.index
    let name = e.currentTarget.dataset.name
    console.log(name);
    this.setData({
      "popup.index":index,
      "popup.name" :name
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  immediatelyBtn(){
    this.setData({ 'popup.show': true });
  },
  onClose() {
    this.setData({ 'popup.show': false });
  },
  quitBtn(){
    this.setData({ 'popup.show': false });
  },
  next(){
    wx.navigateTo({
      url: `/packageA/pages/writeaddress/writeaddress?name=${this.data.popup.name}`,
    })
  },

  onLoad(options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    let nation = wx.getStorageSync('nation')
    this.setData({
      nation:nation.label
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let nation = wx.getStorageSync('nation')
    this.setData({
      nation:nation.label,
      'popup.show':false
    })
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