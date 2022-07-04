// pages/warehouse/warehouse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

      addressList:[
        {id:1,name:"收件人:",msg:"盒马仓库"},
        {id:2,name:"收货地址:",msg:"深圳市龙华区龙华街道工业路壹城环智中心C座2607室"},
        {id:3,name:"联系电话",msg:"15516017811"},
        {id:4,name:"邮政编码",msg:"515134"},
      ]
  },
  copyAddressbtn(){
    let result= this.data.addressList.map((res)=>{
      return res.msg
    }).join('-')
    wx.setClipboardData({
      data: result,
      success: (res) => {
        wx.showToast({
          title: '复制成功',
        })
      },
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