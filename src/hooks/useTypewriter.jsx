import { useEffect, useState } from 'react'

export default function useTypewriter(words = [], speed = 120) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (index >= words.length) return
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000)
      return
    }
    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words, speed])

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return `${words[index].substring(0, subIndex)}${blink ? '|' : ''}`
}
