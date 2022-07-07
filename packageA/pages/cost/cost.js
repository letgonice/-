// packageA/pages/cost/cost.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seletGoods:"普通货物",
    strongShow: false,
    goodsTypeShow:false,
    cost:0,
    radio: 1,
    strongInput:{
      strong:null
    },
      goodsType:[
        {id:1,name:'普通货物',first:59,next:39},
        {id:2,name:'电子产品',first:69,next:49},
        {id:3,name:'液体粉末',first:79,next:59},
        {id:4,name:'广东EMS',first:128,next:49},
        {id:5,name:'内地EMS',first:128,next:35}
      ]
  },

  cargoType(){
    this.setData({
      goodsTypeShow:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  strongBtn(){
    this.setData({ strongShow: true });
  },
  onClose() {
    this.setData({
      strongShow:false,
      'strongInput.strong':''
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onChange(event) {

    this.setData({
      radio: event.detail,
    });
  },
  onClick(event) {

    const { name } = event.currentTarget.dataset;
    let result =  this.data.goodsType.filter((item)=>{
      return item.id ==name
    })
    this.setData({
      radio: name,
      seletGoods:result[0].name
    });
  },
  quitShade(){
    this.setData({goodsTypeShow:false});
  },
 
  //重量值
  goodsValue(e){
   let value =  parseInt(e.detail.value)
   let id =  this.data.radio
   let result =  this.data.goodsType.filter((item)=>{
    return item.id ==id
  })
  result =value==0?0:((value*2-1)*result[0].next)+result[0].first
  this.setData({
    cost:result
  })
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