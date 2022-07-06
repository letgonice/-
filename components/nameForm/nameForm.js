// components/nameForm/nameForm.js
import { areaList } from '@vant/area-data';
Component({
  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    areaList,
    showCountry:false,
    formData:{
      name:"",
      phone:"",
      address:"",
      city:'',
      postcode:'',
      country:''   
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectCity(){
      this.setData({
        showCountry:true
      })
    },
    cancelArea(){
      this.setData({
        showCountry:false
      })
    },
    selectCountry(data){
      let province=data.detail.values[0].name
      let countrys=data.detail.values[1].name
      console.log(province);
      let country=province=== countrys?countrys: province+'-'+countrys
      this.setData({
        showCountry:false,
       'formData.country':country
      })
    }
  }
})
