import { useState, useEffect } from 'react'

export const useGetUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data.users)
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { users, loading, error }
}