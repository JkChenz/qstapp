const TokenKey = 'saber-access-token'
const RefreshTokenKey = 'saber-refresh-token'
export function getToken() {
    return uni.getStorageSync(TokenKey)
}

export function setToken(token) {
    let date = new Date().getTime()
    return uni.setStorageSync(TokenKey,{token,date})
}

export function getRefreshToken() {
  return uni.getStorageSync(RefreshTokenKey)
}

export function setRefreshToken(token) {
  let date = new Date().getTime()
  return uni.setStorageSync(RefreshTokenKey, {token,date})
}

export function removeToken() {
    return uni.removeStorageSync(TokenKey)
}

export function removeRefreshToken() {
  return uni.removeStorageSyn(RefreshTokenKey)
}

