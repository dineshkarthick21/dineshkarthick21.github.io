import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function serverlessApiDevPlugin() {
  return {
    name: 'serverless-api-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : ''
        if (url === '/api/contact') {
          let body = ''
          req.on('data', (chunk) => {
            body += chunk
          })
          req.on('end', async () => {
            try {
              req.body = body ? JSON.parse(body) : {}
            } catch {
              req.body = {}
            }

            res.status = (code) => {
              res.statusCode = code
              return res
            }
            res.json = (data) => {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(data))
              return res
            }

            try {
              const { default: handler } = await server.ssrLoadModule('/api/contact.js')
              await handler(req, res)
            } catch (err) {
              console.error('Local Dev API Error:', err)
              if (!res.writableEnded) {
                res.status(500).json({ error: 'Internal Dev API Error' })
              }
            }
          })
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  if (env.RESEND_API_KEY && !process.env.RESEND_API_KEY) {
    process.env.RESEND_API_KEY = env.RESEND_API_KEY
  }

  return {
    base: '/',
    plugins: [react(), tailwindcss(), serverlessApiDevPlugin()],
  }
})