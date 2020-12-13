export const isiOS = function () {
  const u = navigator.userAgent
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

export const isAndroid = function () {
  const u = navigator.userAgent
  return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
}

// 是否是safari内核的浏览器
export const isSafari = function () {
  return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
}

// 是否是微信浏览器
export const isWeChat = function () {
  const ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true
  } else {
    return false
  }
}

// ios 微信
export const isiOSWechat = function () {
  if (isWeChat() && isiOS()) {
    return true
  } else {
    return false
  }
}

// android 微信
export const isAndroidWechat = function () {
  if (isWeChat() && isAndroid()) {
    return true
  } else {
    return false
  }
}
