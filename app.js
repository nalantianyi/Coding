/**
 * Created by nalantianyi on 15/7/28.
 */

var express=require('express'),
    app=express();
app.get('/',function(req,res,next){
    res.send('正在开发,尽请期待');
});
app.listen(1314);

