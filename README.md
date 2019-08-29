#  __  []   >   -  |  [x]

# npm 包  

>  gm 裁剪图片的

gm("./picture/danny.jpg")
    .crop(w,h,x,y)
    .resize(100,100,"!")
    .write("./picture/danny2.jpg",function(err){
    if(err){
        res.send("-1");
        return;
    }
    res.send("1");
});


