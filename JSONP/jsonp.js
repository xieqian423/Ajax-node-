/**
 * @author Xieqian
 * 异步请求
 */
function createJsonp(url,callbackStr){
    var script = document.createElement('script');
    script.setAttribute("type","text/javascript");

    var str = url.substring(url.length-1);
    if(typeof callbackStr === "string"){
        if(str === "/"){
            script.src = url + "jsonp?callback=" + callbackStr;
        }else{
            script.src = url + "/jsonp?callback=" + callbackStr;
        }
    }else{
        throw new Error("please append string type");
    }

    document.body.appendChild(script);
}
