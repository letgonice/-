// packageMy/pages/notice/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnText:5,
    btnstatus:true
  },

  toOrderDetail(){
    if(!this.data.btnstatus){
      wx.navigateTo({
        url: '/packageA/pages/orderDetails/orderDetails',
      })
    }

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
      let _this = this
      let timer = null;
      timer = setInterval(()=>{
        if(_this.data.btnText==0){
          clearInterval(timer)
          _this.setData({
            btnText:'我已知悉',
            btnstatus:false
          })
          return
        }
            _this.setData({
              btnText:this.data.btnText-1
            })
      },1000)
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