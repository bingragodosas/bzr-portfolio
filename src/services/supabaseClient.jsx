import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project URL and anon key
// from https://supabase.com → Project Settings → API
const SUPABASE_URL = 'https://rzbfxhgsazfajdloribu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6YmZ4aGdzYXpmYWpkbG9yaWJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MDM0NTAsImV4cCI6MjA5NTA3OTQ1MH0.SebdqPL0N6ew6zb7Fy0zcmpsPxiabGmqRPdPzWnys6Y';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);