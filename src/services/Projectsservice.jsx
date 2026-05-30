import { supabase } from './supabaseClient';

/**
 * Fetch all projects from Supabase.
 * Table: projects
 * Columns: id, title, description, tech_stack (text[]), live_url, github_url, image_url, featured, created_at
 */
export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

/**
 * Submit a contact message to Supabase.
 * Table: contacts
 * Columns: id, name, email, message, created_at
 */
export async function submitContact({ name, email, message }) {
  const { data, error } = await supabase
    .from('contacts')
    .insert([{ name, email, message }])
    .select();

  if (error) throw error;
  return data;
}