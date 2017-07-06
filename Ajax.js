/**
 * @author Xieqian
 * 异步请求
 */
function createAjaxRequst(method, url, paras, callback){
    var options = options || {};

    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    console.log(xmlhttp.readyState);

    method = method.toLowerCase()
    if(method == 'post') {
        xmlhttp.open('POST',url,true);
        xmlhttp.send(paras);      //post方法时，参数需要通过send()方法传递
    }
    else if(method == 'get'){
        xmlhttp.open('GET',url,true);
        xmlhttp.send();
    }

    xmlhttp.onreadystatechange = function(){
        console.log("state:"+xmlhttp.readyState);
        if(xmlhttp.readyState==4 &&　xmlhttp.status==200){
            if(callback instanceof Function){
                var allResH = xmlhttp.getAllResponseHeaders();
                callback(xmlhttp.responseText);   //接收到的数据
            }
        }
    }
}

