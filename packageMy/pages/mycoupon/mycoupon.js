// packageMy/pages/mycoupon/mycoupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponLIstanbul:[
      //discount 0代表元1代表折 status 0未使用 1已使用 2已过期
      {id:1,meet:100,discountStatus:0,data:'2020.10.10-2020.11.11', discount:15, status:0},
      {id:2,meet:100,discountStatus:1,data:'2020.10.10-2020.11.11', discount:15,status:1},
      {id:3,meet:100,discountStatus:2,data:'2020.10.10-2020.11.11', discount:15,status:2}
    ],
    shadeShow:false,
    iptValue:''
  },

  convertCoupon(){
    this.setData({
      shadeShow:true
    })
  },
  cancel(){
    this.setData({
      shadeShow:false
    })
  },
  getCoupon(){
    if(this.data.iptValue==''){
      wx.showToast({
        title: '兑换码不能为空',
        icon:'none'
      })
      return
    }else{
      let code = this.data.iptValue
      console.log(code);
      this.setData({
        iptValue:'',
        shadeShow:false
      })
    }

    // this.setData({
    //   iptValue:this.data.iptValue.value
    // })
  },
  iptValueChange(event){
          this.setData({
            iptValue:event.detail.value
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