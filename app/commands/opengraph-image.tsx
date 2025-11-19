import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Linovia - Linux Commands Reference'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(to bottom right, #1e1b4b, #581c87, #1e1b4b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #c084fc, #f472b6)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Linovia
          </div>
        </div>
        <div style={{ fontSize: 40, opacity: 0.9, marginBottom: 20 }}>
          Linux Commands Reference
        </div>
        <div style={{ fontSize: 24, opacity: 0.7, textAlign: 'center' }}>
          200+ Commands • Interactive Tutorials • Practice Quizzes
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
