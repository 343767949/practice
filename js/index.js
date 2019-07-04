window.onload=function(){

	//顶部透明导航栏
	var headerNFixed=document.querySelector(".header-nav-fixed");
	var header=document.querySelector(".header");
window.onscroll=function(){
	var top=document.body.scrollTop+document.documentElement.scrollTop;
	if(top>header.offsetHeight){
		headerNFixed.style.display='block';
	}else{
		headerNFixed.style.display="none"
	}
}
	
	
//定位地图	
   var geo = new qq.maps.Geocoder()
// var addressText=$(".address-text");
// var addressBtn=$(".address-text");
// addressText.on("change",function(){
// 	var addressTextVal=addressText.val()
// })
        console.log(geo)
        geo.getLocation('中国,广州,华南新材料创新园')//输入查询地址
        geo.setComplete(function(res){
            console.log(res,res.detail.location)//得到经纬度
            var map = new qq.maps.Map(document.getElementById('test'),{
                center: res.detail.location,//将经纬度加到center属性上
                zoom: 16,//缩放   
                draggable: true,//是否可拖拽
                scrollwheel: true,//是否可滚动缩放
                disableDoubleClickZoom: false
            })
            var marker = new qq.maps.Marker({
                position: res.detail.location,//标记的经纬度
                animation: qq.maps.MarkerAnimation.BOUNCE,//标记的动画
                map: map//标记的地图
            })

            var citylocation = new qq.maps.CityService({
                //设置地图
                map : map,

                complete : function(results){
                    console.log(9999,results)
                }
            });
        })	
	
	
//婚礼流程扇形图	

//var canvas1=document.querySelector("#process-canvas1")
//var canvas2=document.querySelector("#process-canvas2")
//var canvas3=document.querySelector("#process-canvas3")
//
//var ctx1=canvas1.getContext("2d");
//var ctx2=canvas2.getContext("2d");
//var ctx3=canvas3.getContext("2d");
//
//canvas1.width=250;
//canvas1.height=250;
//canvas1.style.background="#fff";
//
//var start1=-Math.pi/2;
//var end1=0;
//function animation(obj){
//	var num=0;//每次动画增加的角度
//	obj.timer=setInterval(function(){
//		if(end1==0){
//			clearInterval(obj.timer)
//		}else{
//			start1=end1;
//			end1=start1+
//			ctx1.beginPath();
//			ctx1.moveTo(125,125);
//			ctx1.arc(125,125,100,start1,end1);
//			ctx1.closePath();
//			ctx.fillStyle = rgb(232,91,55)
//          ctx.fill();
//		}
//	},1000/60)
//}










}
