// packageMy/pages/packageList/packageList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    packageList:[
      {id:1,title:'全部包裹',text:'查看您的全部包裹'},
      {id:2,title:'退回包裹',text:'退回商家或者仓库处理'},
      {id:3,title:'异常包裹',text:'违禁品'},
      {id:4,title:'入口包裹',text:'已入库的包裹'},
    ],
    steps: [
      {
        text: '待处理  3',
        // inactiveIcon: 'location-o',
        inactiveIcon: 'circle',
        activeIcon: 'circle',
      },
      {
        text: '待入仓  6',
        desc: `待拣货 6    待打包 0`,
        inactiveIcon: 'circle',
        activeIcon: 'success',
      },
      {
        text: '待出仓   7',
        desc: '未付款 3 已付款 4 打包中 7 打包完成 0',
        inactiveIcon: 'circle',
        activeIcon: 'success',
      },
      {
        text: '待收货  8',
        desc: '转运中 8',
        inactiveIcon: 'circle',
        activeIcon: 'success',
      },
    ],
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