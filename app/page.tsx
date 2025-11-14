import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Code className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Cloudflare Pages Functions Template
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A production-ready starter template with API routes, middleware, and TypeScript support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle>API Routes</CardTitle>
              <CardDescription>Server-side functions at the edge</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• File-based routing in /functions</li>
                <li>• TypeScript support out of the box</li>
                <li>• Full HTTP method support</li>
                <li>• Environment variable access</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Edge Middleware</CardTitle>
              <CardDescription>Request/response processing</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Global request handling</li>
                <li>• CORS configuration</li>
                <li>• Authentication checks</li>
                <li>• Request logging</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Try the API</CardTitle>
              <CardDescription>Test the example endpoints</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <p className="font-mono text-sm">GET /api/hello</p>
                    <p className="text-xs text-muted-foreground mt-1">Simple greeting endpoint</p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a href="/api/hello" target="_blank">Test</a>
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <p className="font-mono text-sm">GET /api/time</p>
                    <p className="text-xs text-muted-foreground mt-1">Current server time</p>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a href="/api/time" target="_blank">Test</a>
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <p className="font-mono text-sm">POST /api/echo</p>
                    <p className="text-xs text-muted-foreground mt-1">Echo back request body</p>
                  </div>
                  <Button variant="outline" size="sm" disabled>
                    POST Only
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Built with Cloudflare Pages Functions • Deploy to the edge in seconds
          </p>
        </div>
      </div>
    </main>
  )
}
