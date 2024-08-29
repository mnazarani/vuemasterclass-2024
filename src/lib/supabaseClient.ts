import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://rbctaezrbdakuheektiq.supabase.co/', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiY3RhZXpyYmRha3VoZWVrdGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5NjIwNjksImV4cCI6MjA0MDUzODA2OX0.sbzV3tfOQutK2NFI6VCEKUmxVPZMFA7Vz1_6NZzfmEg')
