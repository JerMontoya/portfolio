import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} JM. All rights reserved.
        </p>
        <div className="flex gap-3">
          <a
            href="https://github.com/JerMontoya"
            target='blank'
            aria-label="GitHub"
            className="text-gray-600 hover:text-gray-900"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .5C5.37.5 0 5.88 0 12.5c0 5.29 3.44 9.78 8.21 11.37.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.07-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.47 11.47 0 0112 6.8c1.02.01 2.05.14 3.01.41 2.28-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.82 5.63-5.5 5.93.43.38.82 1.12.82 2.25 0 1.62-.01 2.92-.01 3.32 0 .32.21.7.83.58A12.01 12.01 0 0024 12.5C24 5.88 18.63.5 12 .5z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jeralyn-montoya-066860100/"
            target='blank'
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-gray-900"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0zM8 8h4.8v2.2h.1c.66-1.25 2.28-2.2 4.7-2.2C23.1 8 24 11 24 15.6V22h-5v-6c0-1.4 0-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1V22H8V8z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/jeralyn.haycock/"
            target='blank'
            aria-label="facebook"
            className="text-gray-600 hover:text-gray-900"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.69V11.01h3.13V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.098 2.796.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.31h3.587l-.467 3.696h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
