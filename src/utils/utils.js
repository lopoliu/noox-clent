//取localStorage 里面的值
export const getLocalStorage = (key) => {
    try {
        const value = localStorage.getItem(key)
        if (value === null || value === undefined || value === '') {
            return null
        }
        return JSON.parse(localStorage.getItem(key))

    } catch (err) {
        return null
    }
}

//存localStorage 里面的值
export const setLocalStorage = (key, item) => {
    let meta = null
    let type = typeof item

    if (type === 'object' || type === 'array') {
        meta = JSON.stringify(item)
    } else {
        meta = item
    }
    window.localStorage.setItem(key, meta)
}

// 删除localStorage
export const removeLocalStorage = (key) => {
    window.localStorage.removeItem(key)
}