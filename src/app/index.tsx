import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'
import { RouterProvider } from 'react-router'
import { router } from './routes/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
