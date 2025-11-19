import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dglsjuuecqddtfdzqylf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnbHNqdXVlY3FkZHRmZHpxeWxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzMTM1NzEsImV4cCI6MjA3MDg4OTU3MX0.jRoY2EDEoaurxbW6VO8bCwFyAjbdHvuSiDVhq4zGyVM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for blogs table
export interface Blog {
  id: string
  title: string
  content: string
  excerpt: string | null
  slug: string | null
  published: boolean | null
  featured_image: string | null
  created_at: string
  updated_at: string
}

// Helper functions for blog operations
export const blogService = {
  // Get all published blogs
  async getPublishedBlogs(): Promise<Blog[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Get blog by slug
  async getBlogBySlug(slug: string): Promise<Blog | null> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()
    
    if (error) throw error
    return data
  },

  // Get blog by ID
  async getBlogById(id: string): Promise<Blog | null> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  // Get featured blogs
  async getFeaturedBlogs(): Promise<Blog[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('published', true)
      .eq('featured', true)
      .order('created_at', { ascending: false })
      .limit(3)
    
    if (error) throw error
    return data || []
  }
}
