import { StrictMode, Suspense } from 'react'
import { RouterProvider, } from 'react-router'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'


import { router } from './routes/router'
import { ErrorBoundary } from '@shared/ui/utils/ErrorBoundary'
import { ChunkErrorBoundary } from '@shared/ui'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChunkErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<></>}>
          <RouterProvider router={router} />

        </Suspense>
      </ErrorBoundary>
    </ChunkErrorBoundary>
  </StrictMode>,
)
