// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    tabList:[
      {id:'1',name:'全部'},
      {id:'2',name:'待支付'},
      {id:'3',name:'已支付'},
      {id:'4',name:'已完成'}
    ],
    orderList:[
      {id:1,orderNumber:12212122121211,status:0},
      {id:2,orderNumber:675634233434434,status:1},
      {id:3,orderNumber:23556744555566,status:2},
      {id:4,orderNumber:23556744555566,status:3},
      {id:5,orderNumber:23556744555566,status:4}
    ],
    awaitList:[]
  },
  onChange(event) {
    let index =  event.detail.name
    let result
    if(index==1){
       result = this.data.orderList.filter((item)=>{
          return item.status==2
      })
      this.setData({
        awaitList:result
      })
    
    }else if(index==3){
      result = this.data.orderList.filter((item)=>{
        return item.status==4
      })
      this.setData({
        awaitList:result
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  tapTab(e){
      let index = e.target.dataset.index
      this.setData({
        active:index
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  tosupport(e){
    wx.navigateTo({
      url: `/packageA/pages/supportval/supportval?orderNumber=${e.detail.orderNumber=''}`,
    })
  },
  onReady() {

  },

  copyNum(data){
      let orderNum = data.detail;
      wx.setClipboardData({
        data: orderNum+'',
        success(){
          wx.showToast({
            title: '复制成功',
            icon:"none"
          })
        }
      })
  },
  orderDetail(data){
    let  query = data.detail.status
    console.log(query);
    wx.navigateTo({
      url: '/packageA/pages/orderDetails/orderDetails',
    })
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