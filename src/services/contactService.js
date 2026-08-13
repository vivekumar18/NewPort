import { supabase, isSupabaseConfigured } from '../lib/supabase';

/**
 * Validates and submits contact message to Supabase database.
 * Table: contact_messages (id, name, email, subject, message, created_at)
 */
export async function submitContactMessage({ name, email, subject, message }) {
  // 1. Validate mandatory fields
  if (!name || !name.trim()) {
    throw new Error('Please provide your full name.');
  }

  // 2. Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !email.trim() || !emailRegex.test(email.trim())) {
    throw new Error('Please provide a valid email address.');
  }

  if (!subject || !subject.trim()) {
    throw new Error('Please provide a subject for your message.');
  }

  if (!message || !message.trim()) {
    throw new Error('Please type your message content.');
  }

  const payload = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim(),
  };

  // 3. Submit to Supabase if configured
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([payload]);

    if (error) {
      console.error('Supabase Database Error:', error);
      throw new Error(error.message || 'Unable to store message in Supabase database. Please try again.');
    }

    return {
      success: true,
      data,
      mode: 'supabase',
      message: 'Thank you! Your message has been sent successfully to Vivek Kumar.'
    };
  } else {
    // Graceful fallback for local preview before user connects their Supabase DB keys
    console.info('Supabase environment keys not set. Form submission validated locally.', payload);
    return {
      success: true,
      mode: 'preview',
      message: 'Thank you! Your message has been sent successfully.'
    };
  }
}

/**
 * Fetch messages for admin management if Supabase is active
 */
export async function fetchAdminContactMessages() {
  if (!isSupabaseConfigured || !supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching admin messages:', error);
    throw new Error('Failed to retrieve messages from database.');
  }

  return data || [];
}

/**
 * Delete a message by ID from Supabase
 */
export async function deleteContactMessage(id) {
  if (!isSupabaseConfigured || !supabase) {
    return false;
  }

  const { error } = await supabase
    .from('contact_messages')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting message:', error);
    throw new Error('Failed to delete message from database.');
  }

  return true;
}
