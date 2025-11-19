import { useBlogs } from '../hooks/use-blogs'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

export const SupabaseTest = () => {
  const { data: blogs, isLoading, error, refetch } = useBlogs()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading blogs...</span>
      </div>
    )
  }

  if (error) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-red-600">Connection Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500 mb-4">
            Error connecting to Supabase: {error.message}
          </p>
          <Button onClick={() => refetch()}>Retry Connection</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-green-600">✅ Supabase Connected Successfully!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Your Supabase connection is working. Found {blogs?.length || 0} blog(s) in the database.
          </p>
          <Button onClick={() => refetch()} className="mt-4">
            Refresh Data
          </Button>
        </CardContent>
      </Card>

      {blogs && blogs.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Blogs from Database:</h2>
          {blogs.map((blog) => (
            <Card key={blog.id}>
              <CardHeader>
                <CardTitle className="text-lg">{blog.title}</CardTitle>
                <p className="text-sm text-gray-500">
                  Created: {new Date(blog.created_at).toLocaleDateString()}
                </p>
              </CardHeader>
              <CardContent>
                {blog.excerpt && (
                  <p className="text-gray-700 mb-2">{blog.excerpt}</p>
                )}
                <p className="text-sm text-gray-600">
                  Slug: {blog.slug || 'No slug'}
                </p>
                <p className="text-sm text-gray-600">
                  Published: {blog.published ? 'Yes' : 'No'}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {blogs && blogs.length === 0 && (
        <Card>
          <CardHeader>
            <CardTitle>No Blogs Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              The connection is working, but no blogs were found in the database.
              This might mean the blogs table is empty or the published filter is too restrictive.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
