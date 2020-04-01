var rp= require('request-promise');
var rq=require('request');
function callPostApi() {
    var options = {
        method: "POST",
        uri: "http://localhost:9090/api/addBookWithAnyBody/abc",
        headers: {
            "Content-Type": "application/json"
        },
        body: {"name": "noBody"},
        json: true
    };
    rp(options).then (function (parseBody) {
        console.log(parseBody)
    })
        .catch(function(error){console.log("call api error" + error)})

}

function callPostApi2() {
    const option= {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: {"name": "noBody"},
        json: true
    };
    const uri="http://localhost:9090/api/addBookWithAnyBody/abc";

    rq(uri,option,function callBack(error,response,body) {
        console.log(response);
        console.log(body);
        console.log(response.headers);
    })
}

function callGetApi() {
    var options= {
        method:"GET",
        uri:"http://localhost:9090/api/getBookResponse/abc",
        headers: {
            "Content-Type": "application/json"
        },
        json: true
    };
    rp(options).then(function (parseBody){
        console.log(parseBody)
        console.log(parseBody.books[0].name)

    }).catch(function(error) {

    })
}
// callPostApi();
// callGetApi();
callPostApi2();
