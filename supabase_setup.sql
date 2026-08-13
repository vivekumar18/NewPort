-- =====================================================================
-- SUPABASE DATABASE SETUP SCRIPT FOR VIVEK KUMAR PORTFOLIO
-- Execute this script in your Supabase Dashboard -> SQL Editor
-- =====================================================================

-- 1. Create contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Allow any public visitor to INSERT contact messages
CREATE POLICY "Allow public insert into contact_messages"
ON public.contact_messages
FOR INSERT
WITH CHECK (true);

-- 4. Policy: Protect message readings (Only authenticated admins can read)
CREATE POLICY "Allow authenticated read on contact_messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (true);

-- 5. Policy: Protect message deletions (Only authenticated admins can delete)
CREATE POLICY "Allow authenticated delete on contact_messages"
ON public.contact_messages
FOR DELETE
TO authenticated
USING (true);

-- Done! Your Supabase database is now configured securely.
