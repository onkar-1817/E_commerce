import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { GlobalProvider } from '../GlobalContext'

it('renders the app shell with the navigation', () => {
  render(
    <BrowserRouter>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </BrowserRouter>
  )

  expect(screen.getAllByRole('link', { name: /home/i }).length).toBeGreaterThan(0)
})
