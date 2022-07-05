// packageA/pages/paydetail/paydetail.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
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