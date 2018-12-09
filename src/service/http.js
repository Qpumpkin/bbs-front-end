
function http(url, methodType) {
  const promise = new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open(methodType, url, true)
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const resp = xhr.responseText
          const respJson = JSON.parse(resp)
          console.log(`${url}成功接收到请求，返回数据为${respJson}`)
          resolve(respJson)
        } else {
          console.log(`${url}请求失败`)
          reject(xhr.status)
        }
      }
    }
    xhr.send()
    console.log(`请求${url}，已成功发送`)
  })
  return promise
}