// packageA/pages/paydetail/paydetail.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
        couponList:[
          //discountStatus 0代表元1代表折 status 0未使用 1已使用 2已过期
          {id:1,meet:100,discountStatus:0,startTime:'2022.7.8',  overTime:'2022.8.11',  discount:15, status:0,workable:true},
          {id:2,meet:190,discountStatus:1,startTime:'2020.10.10',  overTime:'2020.11.11',  discount:15,status:1,workable:false},
          {id:3,meet:100,discountStatus:2,startTime:'2020.10.10',  overTime:'2020.11.11',  discount:15,status:2,workable:false},
          {id:4,meet:100,discountStatus:1,startTime:'2020.10.10',  overTime:'2022.8.11',  discount:35,status:1,workable:true},
          {id:5,meet:100,discountStatus:1,startTime:'2020.10.10',  overTime:'2022.8.11',  discount:55,status:1,workable:true},
        ],
        //转运费
        cost:130,
        //附加费
        extra:30,
        //优惠费用
        couponCost:0,
        //实际费用
        realityCost:0,
        selectCoupon:false,
        insurance:{
          loseRisk:0,
          tariffRisk:0
        },
        address: [{
          id: 2,
          name: "KK Chen",
          number: "15017812311",
          address: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5A TUCSON, AZ 85705 USA',
          img: '../../assets/image/icon/国外地址.png',
          bgc: '#4c168e'
        }],
        // 阅读协议复选框
        checked:false,
        // 支付按钮
        payBtnDisabled:true,
        // 弹出层状态
        show:false,
        // 倒计时
        consentText:5,
        // 同意协议按钮状态
        consentDisabled:true
      },
      quitselectCoupon(){
        this.setData({
          selectCoupon:false
        })
      },
      sleCoupon(){
        this.setData({
          selectCoupon:true
        })
      },
      //复选框值改变
      onChange(event){
        let timer=null
          this.setData({
            show:true
          })
          if(this.data.consentText>0){
            timer = setInterval(() => {
              if(this.data.consentText==0){
                this.setData({
                  consentText:'同意本条款',
                  consentDisabled:false
                })
                clearTimeout(timer)
                return
              }
              this.setData({
                consentText:this.data.consentText-1
              })
            }, 1000);
          }
      },
//弹出层隐藏
      hidePopup(){
          this.setData({
            show:false
          })
          
      },

      // 支付按钮状态
      agreeclauseBtn(){
        this.setData({
          checked:true,
          payBtnDisabled:false,
          show:false
        })
      },
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {
          if(options.loseRisk||options.tariffRisk)
              this.setData({
                insurance:options
              })
        },

        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady() {
            let res= this.data.couponList
            let  loseRisk=!this.data.insurance.loseRisk?0:parseFloat( this.data.insurance.loseRisk).toFixed(2)
            let  tariffRisk=!this.data.insurance.tariffRisk?0:parseFloat( this.data.insurance.tariffRisk).toFixed(2)
            let originalCost =(this.data.cost*100+this.data.extra*100+loseRisk*100+tariffRisk*100)/100
            console.log(originalCost);
            // 首先满足了满减条件
              let times;
              let data;
              let  result = res.filter((item)=>{
                  return !(item.meet >originalCost)
              }).filter((item)=>{
                  // 得到有效时间戳与当前事件戳进行想减
                   times= item.overTime.split('.').join('-')
                   times= new Date(times)
                   times = times.getTime();
                    data =Date.now()
                  return times>data
              })
             
                let max=0
                let couponCost;
                result.map((item)=>{
                  max = item.discount>max? item.discount:item.discount
                  couponCost =item.discount==max?item:false
                })
              // couponCost
              this.setData({
                couponCost:couponCost.discount,
                realityCost:originalCost-couponCost.discount,
              })
           
        },

        toPay(){
          if(this.data.checked){
            wx.navigateTo({
              url: '/packageA/pages/payComplete/payComplete',
            })
          }
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