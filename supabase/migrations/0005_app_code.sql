insert into storage.buckets (id, name, public)
values ('app', 'app', false)
on conflict (id) do update set public = false;

drop policy if exists "app_code_read_licensed" on storage.objects;
create policy "app_code_read_licensed" on storage.objects
  for select to authenticated
  using (bucket_id = 'app' and (select public.is_licensed()));
