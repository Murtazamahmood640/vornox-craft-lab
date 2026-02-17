
-- Create storage bucket for project attachments
INSERT INTO storage.buckets (id, name, public) VALUES ('project-attachments', 'project-attachments', true);

-- Allow authenticated users to upload files to their own folder
CREATE POLICY "Users can upload project attachments"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'project-attachments' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Allow anyone to view project attachments (public bucket)
CREATE POLICY "Project attachments are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'project-attachments');

-- Allow users to delete their own attachments
CREATE POLICY "Users can delete own attachments"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'project-attachments' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Add attachments column to projects table to store file URLs
ALTER TABLE public.projects ADD COLUMN attachments text[] DEFAULT '{}';
