window.jQuery.ajax = function(url,method,body,successFn,failFn){
    let request = new XMLHttpRequest()
    request.open(method,url) //配置 request
    request.onreadystatechange = ()=>{
        if(requsst.readyState === 4){
            if(request.status >= 200 && request.status <300){
                successFn.call(undefined,request.responseText)
            }else if(request.status >= 400){
                failFn.call(undefined,request)
            }
        }
    }
    request.send(body)
}