var pageData = {
  data:{
    msg: [0,1,2,3,4]
  }
};
for(var i = 1; i < 5; ++i) {
  (function (index) {
    pageData[`slider${index}change`] = function(e) {
      console.log(`slider${index}发生change事件，携带值为`, e.detail.value);
      this.data.msg[index]=e.detail.value;
      this.setData({
        msg: this.data.msg
      });
    }
  })(i);
}
Page(pageData)