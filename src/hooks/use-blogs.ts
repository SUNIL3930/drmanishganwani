import { useQuery } from '@tanstack/react-query'
import { blogService, Blog } from '../lib/supabase'

export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: blogService.getPublishedBlogs,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useBlogBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['blog', slug],
    queryFn: () => blogService.getBlogBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useBlogById = (id: string) => {
  return useQuery({
    queryKey: ['blog', id],
    queryFn: () => blogService.getBlogById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useFeaturedBlogs = () => {
  return useQuery({
    queryKey: ['featured-blogs'],
    queryFn: blogService.getFeaturedBlogs,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
