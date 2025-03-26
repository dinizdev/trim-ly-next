// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jkveezddizqmesqsunay.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprdmVlemRkaXpxbWVzcXN1bmF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNDk1NjUsImV4cCI6MjA1NzcyNTU2NX0.QZo8y-emIGKm7e0ODc6AxX69VxT3z4cZ2y6mvZeJxgc'

export const supabase = createClient(supabaseUrl, supabaseKey)
