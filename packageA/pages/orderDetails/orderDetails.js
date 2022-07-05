// packageA/pages/orderDetails/orderDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      address:[
        {id:1,name:"新希望仓库",number:"15017812311",address:'深圳市龙华区龙华街道工业路壹城环智中心C座2607室',img:'../../../assets/image/icon/地址.png',bgc:'#40b850',copyText:'复制'},
        {id:2,name:"KK Chen",number:"15017812311",address:'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5A TUCSON, AZ 85705 USA',img:'../../../assets/image/icon/国外地址.png',
        bgc:'#4c168e'},
      ],
      orderMsg:{
        orderCode:'20220509140712345678',
        path:"中国-美国",
        goodsType:"普通货物",
        status:"待填写",
        buyTime:"2022-05-09 14:07:12"
      },
      expressNum:null,
      iptStatus:false
  },

  copyNumber(e){
        wx.setClipboardData({
          data:e.target.dataset.number,
          success(){
            wx.showToast({
              title: '复制成功',
              icon:'none'
            })
          }
        })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  orderCode(e){
    console.log(e);
    wx.setClipboardData({
      data:e.target.dataset.ordercode,
      success(){
        wx.showToast({
          title: '复制订单号成功',
          icon:'none'
        })
      }
    })
  },
  limitNum(e){
    if(parseInt(e.detail.value)>20){
      wx.showToast({
        title: '个数不能超过20个',
        icon:'none'
      })
      this.setData({
        expressNum:0
      })
      return
    }
  },
  expressNumBlur(e){
    if(parseInt(e.detail.value)>0){
        this.setData({
          iptStatus:true,
          expressNum:parseInt(e.detail.value)
        })
        wx.setStorageSync('expressNum', e.detail.value)
    }
  },

  onShow() {
    let expressNum = wx.getStorageSync('expressNum')
     if(parseInt(expressNum)>0){
       this.setData({
         expressNum:parseInt(expressNum),
         iptStatus:true
       })
     }
   },

   cancelOrder(){
      wx.showModal({
        title:"是否取消订单",
        content:"取消订单后，订单将不能进行后续操作是否要继续？",
        cancelColor: 'cancelColor',
        success(){
          wx.removeStorageSync('expressNum')
          wx.switchTab({
            url: '/pages/home/home',
          })
        }
      })
   },

  onLoad(options) {
  },
  onReady() {
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