// packageA/pages/payComplete/payComplete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countDown:5
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
      console.log();
      let timer = null;
      timer=setInterval(()=>{
        if(this.data.countDown==0){
          clearInterval(timer)
          wx.switchTab({
            url: '/pages/home/home',
          })
          return
        }
        this.setData({
          countDown:this.data.countDown - 1
        })
      },1000)
},

  /**
   * 生命周期函数--监听页面隐藏
   */
  tohome(){
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
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