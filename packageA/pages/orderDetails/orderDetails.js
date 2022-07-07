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
      expressArr:[],
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
      // let value =  parseInt(e.detail.value)
      // if(value>20){

      // }
  },
  expressNumBlur(e){
    let value =parseInt(e.detail.value)
    let arr = []
    for(let i=1;i<=value ; i++){
      // false代表不禁用true代表已经确定订单号可以禁用了
      arr=[...arr,{id:i,value:'',status:false}]
    }
    if(arr.length>0){
        this.setData({
          iptStatus:true,
          expressArr:arr
        })
        wx.setStorageSync('expressArr',arr)
    }
  },
    // 填写订单号
  getOrderCode(e){
    if(e.detail.value=='')return
    let id = e.target.dataset.id
    let ordernum = e.detail.value
    let orderCoderList = this.data.expressArr
    // 通过id拿到该订单号的下标
     let index = orderCoderList.findIndex((item)=>{
       return item.id ==id
     })
     orderCoderList[index].value=ordernum
     orderCoderList[index].status=true
     let _this =this
    //  wx.showModal(Object object)
    wx.showModal({
      title:'请确认快递单号是否无误',
      content:`请确认快递单号【${ordernum}】是否无误，一旦提交，不可修改。`,
      confirmColor:'#02bb00',
        success(res){
          if (res.confirm) {
            _this.setData({
              expressArr:orderCoderList
             })
             wx.setStorageSync('expressArr', orderCoderList)
             wx.showToast({
               title: '填写快递单号成功',
               icon:"none"
             })
          } else if (res.cancel) {
            console.log('取消')
          }
        }
    })

  },

  // 删除订单单号
  delOrderNum(e){
    let _this = this
    let id = e.currentTarget.dataset.id
    console.log(e);
    let orderCoderList = this.data.expressArr
    let index = orderCoderList.findIndex((item)=>{
      return id==item.id
    })

    wx.showModal({
      title:'是否删除订单号',
      content:`一旦删除不可恢复`,
      confirmColor:'#fc011a',
        success(res){
          if (res.confirm) {
            orderCoderList.splice(index,1)
            _this.setData({
              expressArr:orderCoderList
            })
             wx.setStorageSync('expressArr', orderCoderList)
             wx.showToast({
               title: '删除成功',
               icon:'none'
             })
          } else if (res.cancel) {
            console.log('取消')
          }
        }
    })

  },

  onShow() {
    let expressArrStorg = wx.getStorageSync('expressArr')
        if(expressArrStorg.length>0){
          this.setData({
            iptStatus:true,
            expressArr:expressArrStorg
          })
        }
  },

  // 取消订单
   cancelOrder(){
      wx.showModal({
        title:"是否取消订单",
        content:"取消订单后，订单将不能进行后续操作是否要继续？",
        cancelColor: 'cancelColor',
        success(res){
          if (res.confirm) {
            wx.removeStorageSync('expressArr')
            wx.switchTab({
              url: '/pages/home/home',
            })
          } else if (res.cancel) {
          }

        }
      })
   },

   //添加快递单号
   addOrder(){
     let _this =this
     let obj ={id:Date.now(),value:'',status:false}
    wx.showModal({
      title:"是否增加快递单号",
      content:"增加快递单号后，发往转运中心的快递个数+1。是否要继续？",
      success(res){
        if (res.confirm) {
          _this.setData({
            expressArr:[..._this.data.expressArr,obj]
          })
          wx.showToast({
            title: '添加成功',
            icon:'none'
          })
         wx.setStorageSync('expressArr', _this.data.expressArr)
        } else if (res.cancel) {
        }
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