// packageA/pages/supportval/supportval.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 保险
    loseRiskCheck:true,
    tariffRiskCheck:true,

    //显示风险通知书
    rishShow:false,
    //物品的价格
    supportValue:'',
    //选中保险的保险费
    insurance:{
      loseRisk:0,
      tariffRisk:0
    }
  },
  callHandle(e){
    console.log('call',e);
  },
  nextHandle(e){
    this.setData({
      rishShow:true
    })
  },

  clickShade(){
   this.setData({
    rishShow:false
   })

  },
// 离开ipt
  blurValue(event){
    let nums =event.detail.value==''?0:parseInt(event.detail.value)
    let loseRisk =nums==0?0:nums*3/100
    let tariffRisk =nums==0?0:nums*2/100
        this.setData({
          'insurance.loseRisk':loseRisk,
          'insurance.tariffRisk':tariffRisk
        })  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 丢失险选中
  loseRiskonChange(event){
        this.setData({
          loseRiskCheck:event.detail
        })
  },
  // 关税险选中
  tariffRiskChange(event){
    this.setData({
      tariffRiskCheck:event.detail
    })
},
  onLoad(options) {

  },
  buy(){
    let obj = {
      loseRisk:0,
      tariffRisk:0
    }
    if(this.data.loseRiskCheck){obj.loseRisk=this.data.insurance.loseRisk}
    if(this.data.tariffRiskCheck){
      obj.tariffRisk=this.data.insurance.tariffRisk}
      let data = `${Object.keys(obj)[0]}=${obj.loseRisk}&${Object.keys(obj)[1]}=${obj.tariffRisk}
      `
      this.setData({
        rishShow:false
      })
      wx.navigateTo({
        url: `/packageA/pages/paydetail/paydetail?${data.trim()}`,
      })
  },
  // 承担风险按钮
  assume(){
    let obj = {
      loseRisk:0,
      tariffRisk:0
    }
      let data = `${Object.keys(obj)[0]}=${obj.loseRisk}&${Object.keys(obj)[1]}=${obj.tariffRisk}
      `

      wx.navigateTo({
        url: `/packageA/pages/paydetail/paydetail?${data.trim()}`,
      })
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