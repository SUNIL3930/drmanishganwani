# Supabase Setup for Ganwani Heart Care Website

## Configuration

Your Supabase project is now connected to this React application with the following credentials:

**Project URL:** `https://dglsjuuecqddtfdzqylf.supabase.co`
**Anon Key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnbHNqdXVlY3FkZHRmZHpxeWxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzMTM1NzEsImV4cCI6MjA3MDg4OTU3MX0.jRoY2EDEoaurxbW6VO8bCwFyAjbdHvuSiDVhq4zGyVM`

## Files Created

1. **`src/lib/supabase.ts`** - Main Supabase client configuration and blog service functions
2. **`src/hooks/use-blogs.ts`** - React Query hooks for managing blog data
3. **`src/components/SupabaseTest.tsx`** - Test component to verify connection

## Database Schema

Your `blogs` table has these columns:
- `id` (string, primary key)
- `title` (string)
- `content` (string)
- `excerpt` (string, nullable)
- `slug` (string, nullable)
- `published` (boolean, nullable)
- `featured_image` (string, nullable)
- `created_at` (string, timestamp)
- `updated_at` (string, timestamp)

## Available Functions

### Blog Service Functions
- `getPublishedBlogs()` - Get all published blogs
- `getBlogBySlug(slug)` - Get blog by slug
- `getBlogById(id)` - Get blog by ID
- `getFeaturedBlogs()` - Get featured blogs

### React Query Hooks
- `useBlogs()` - Hook for all published blogs
- `useBlogBySlug(slug)` - Hook for specific blog by slug
- `useBlogById(id)` - Hook for specific blog by ID
- `useFeaturedBlogs()` - Hook for featured blogs

## Testing the Connection

The `SupabaseTest` component has been added to your Blog page to verify the connection is working. It will:

1. ✅ Show a green success message if connected
2. ❌ Show an error message if there's a connection issue
3. 📊 Display the number of blogs found in the database
4. 🔄 Allow you to refresh the data

## Next Steps

1. **Test the connection** by visiting `/blog` page
2. **Add blogs to your database** through Supabase dashboard
3. **Customize the blog display** based on your needs
4. **Remove the test component** once you're satisfied with the connection

## Security Notes

- The anon key is public and safe to use in frontend code
- Row Level Security (RLS) policies should be configured in Supabase for data protection
- Consider adding environment variables for production deployments

## Troubleshooting

If you encounter connection issues:
1. Check your internet connection
2. Verify the Supabase project is active
3. Check the browser console for error messages
4. Ensure the `blogs` table exists in your database
