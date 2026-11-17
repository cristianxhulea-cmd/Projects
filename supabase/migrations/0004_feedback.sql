create table if not exists public.feedback (
  id bigint generated always as identity primary key,
  at timestamptz not null default now(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  email text not null default '',
  kind text not null check (kind in ('vreau', 'nu_place', 'bug')),
  body text not null check (char_length(body) between 3 and 4000),
  context jsonb not null default '{}'::jsonb,
  status text not null default 'nou' check (status in ('nou', 'vazut', 'rezolvat'))
);
alter table public.feedback enable row level security;
create index if not exists feedback_at_idx on public.feedback (at desc);

drop policy if exists "feedback_insert" on public.feedback;
create policy "feedback_insert" on public.feedback
  for insert to authenticated
  with check (user_id = (select auth.uid()) and status = 'nou' and (select public.is_licensed()));

drop policy if exists "feedback_select" on public.feedback;
create policy "feedback_select" on public.feedback
  for select to authenticated using (user_id = (select auth.uid()) or (select public.is_admin()));

drop policy if exists "feedback_update" on public.feedback;
create policy "feedback_update" on public.feedback
  for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));

drop policy if exists "feedback_delete" on public.feedback;
create policy "feedback_delete" on public.feedback
  for delete to authenticated using ((select public.is_admin()));
