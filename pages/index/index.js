    
    // index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      cate_list:[{
      cate:"书籍",
      id:"book",
      top_pic:"../../image/image012.jpg",
      detail:[{
        title:"三山五园文化巡展",
        image:"/image/image001.jpg",
        old_price:"110",
        new_price:"90",
        pid:'1'
      },{
        title:"圆明园流散文物精装版" ,
        image:"/image/image003.jpg",
        old_price:"220",
        new_price:"150",
        pid:"2"
      }]
      },
      {
        cate:"纪念品",
        id:"jinian",
        top_pic:"/image/image044.jpg",
        detail:[{
          title:"圆明园钥匙串",
          image:"/image/image006.jpg",
          old_price:"300",
          new_price:"120",
          pid:"3",
        },{
          title:"圆明园荷花茶",
          image:"/image/image008.jpg",
          old_price:"40",
          new_price:"35",
          pid:"4",
        }]
        }
      ],
      cur_index:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 点击标签切换显示的商品函数
   */
  switchTag:function(e){
    console.log(e.currentTarget)
    this.setData({
      cur_index:e.currentTarget.dataset.index,
    })
  }
})