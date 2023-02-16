import { useRef, useEffect } from 'react'

export default function useDropoff(callback: any) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: any) => {
      e.stopPropagation()
      if (!ref.current?.contains(e.target)) {
        callback()
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref])

  return ref
}
