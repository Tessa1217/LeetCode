/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // object 프로토타입 가지고 있지 않은 경우
    if (!obj || typeof obj !== 'object') return obj    
    Object.entries(obj).forEach(([k, v]) => {
        const value = compactObject(v)        
        if (!value) {            
            delete obj[k]
        } else {
            obj[k] = value
        }
    })
    // Array는 delete로 삭제 시 length 조정하지 않음
    // undefined filtering 필요
    if (Array.isArray(obj)) {
        obj = obj.filter((e) => !!e)
    }
    return obj
};