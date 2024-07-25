'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function AddOverlay() {
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(160)
  const [scale, setScale] = useState(0.35)
  const [offsetTheta, setOffsetTheta] = useState(0)
  const [imgWidth, setImgWidth] = useState(0)
  const [imgHeight, setImgHeight] = useState(0)
  const [opacity, setOpacity] = useState(0.5)

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const context = canvas?.getContext('2d')
    if (context && image) {
      canvas.width = imgWidth
      canvas.height = imgHeight
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(image, 0, 0, image.width, image.height)
      
      // Add color overlay
      context.fillStyle = `rgba(117, 215, 0, ${opacity})`
      context.fillRect(0, 0, canvas.width, canvas.height)
    }
  }, [image, imgWidth, imgHeight, opacity])

  return (
    <div className='flex flex-col gap-4 max-w-[500px] mx-auto'>
			<input type="file" accept="image/*" onChange={(event) => {
				const file = event.target.files?.[0]
				if (!file) return
				const reader = new FileReader()
				reader.onload = () => {
					const img = new Image()
					if (typeof reader.result === 'string') {
						img.src = reader.result
					}
					img.onload = () => {
						setOffsetX(0)
						setOffsetY(160)
						setScale(0.35)
						setOffsetTheta(0)
						setImgWidth(img.width)
						setImgHeight(img.height)
						setImage(img)
					}
				}
				reader.readAsDataURL(file)
			}} />
			<canvas id="canvas" width="800" height="800" style={{
				border: '1px solid #333',
				borderRadius: 10,
				width: '100%',
				height: 'auto',
				margin: '20px 0'
			}} />
			<div className='flex justify-center'>
				<Button
					onClick={() => {
					const canvas = document.getElementById('canvas') as HTMLCanvasElement
					const dataURL = canvas.toDataURL('image/png')
					const a = document.createElement('a')
					a.href = dataURL
					a.download = `brattpilled-${Date.now()}.png`
					a.click()
				}}>
					Download Image
				</Button>
			</div>
    </div>
  )
}