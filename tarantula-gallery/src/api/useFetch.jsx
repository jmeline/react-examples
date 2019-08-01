import { useState, useEffect } from 'react'

const useFetch = (url, requestBody) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        const response = await fetch(url, requestBody)
        const json = await response.json()
        setData(json)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [fetchData])
    return { loading, data }
}

export default useFetch