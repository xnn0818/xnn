-- =============================================
-- 溫暖小鎮 FiveM Server Website - Database Schema
-- =============================================

-- 1. Players table
CREATE TABLE IF NOT EXISTS public.players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'offline',
  role TEXT NOT NULL DEFAULT '玩家',
  join_date DATE NOT NULL DEFAULT CURRENT_DATE,
  play_time TEXT NOT NULL DEFAULT '0h',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.players ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "players_public_read" ON public.players;
CREATE POLICY "players_public_read" ON public.players FOR SELECT USING (true);

-- 2. Team members table
CREATE TABLE IF NOT EXISTS public.team_members (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  icon_name TEXT NOT NULL DEFAULT 'Shield',
  icon_color TEXT NOT NULL DEFAULT '#3b82f6',
  description TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "team_members_public_read" ON public.team_members;
CREATE POLICY "team_members_public_read" ON public.team_members FOR SELECT USING (true);

-- 3. Store items table
CREATE TABLE IF NOT EXISTS public.store_items (
  id SERIAL PRIMARY KEY,
  icon_name TEXT NOT NULL DEFAULT 'Gem',
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price TEXT NOT NULL,
  color TEXT NOT NULL DEFAULT '#00d4ff',
  popular BOOLEAN NOT NULL DEFAULT FALSE,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.store_items ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "store_items_public_read" ON public.store_items;
CREATE POLICY "store_items_public_read" ON public.store_items FOR SELECT USING (true);

-- 4. Updates table
CREATE TABLE IF NOT EXISTS public.updates (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  version TEXT NOT NULL,
  title TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.updates ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "updates_public_read" ON public.updates;
CREATE POLICY "updates_public_read" ON public.updates FOR SELECT USING (true);

-- 5. Update items table
CREATE TABLE IF NOT EXISTS public.update_items (
  id SERIAL PRIMARY KEY,
  update_id INT NOT NULL REFERENCES public.updates(id) ON DELETE CASCADE,
  type TEXT NOT NULL DEFAULT 'new',
  text TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

ALTER TABLE public.update_items ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "update_items_public_read" ON public.update_items;
CREATE POLICY "update_items_public_read" ON public.update_items FOR SELECT USING (true);

-- 6. Rules table
CREATE TABLE IF NOT EXISTS public.rules (
  id SERIAL PRIMARY KEY,
  icon_name TEXT NOT NULL DEFAULT 'Ban',
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  penalty TEXT NOT NULL,
  penalty_color TEXT NOT NULL DEFAULT '#f59e0b',
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.rules ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "rules_public_read" ON public.rules;
CREATE POLICY "rules_public_read" ON public.rules FOR SELECT USING (true);

-- 7. FAQ table
CREATE TABLE IF NOT EXISTS public.faqs (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "faqs_public_read" ON public.faqs;
CREATE POLICY "faqs_public_read" ON public.faqs FOR SELECT USING (true);

-- 8. Server stats table
CREATE TABLE IF NOT EXISTS public.server_stats (
  id SERIAL PRIMARY KEY,
  icon_name TEXT NOT NULL,
  value TEXT NOT NULL,
  label TEXT NOT NULL,
  color TEXT NOT NULL DEFAULT '#00d4ff',
  sort_order INT NOT NULL DEFAULT 0
);

ALTER TABLE public.server_stats ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "server_stats_public_read" ON public.server_stats;
CREATE POLICY "server_stats_public_read" ON public.server_stats FOR SELECT USING (true);

-- 9. Features table
CREATE TABLE IF NOT EXISTS public.features (
  id SERIAL PRIMARY KEY,
  icon_name TEXT NOT NULL,
  icon_bg TEXT NOT NULL DEFAULT 'bg-[#0284c7]',
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

ALTER TABLE public.features ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "features_public_read" ON public.features;
CREATE POLICY "features_public_read" ON public.features FOR SELECT USING (true);

-- 10. About values table
CREATE TABLE IF NOT EXISTS public.about_values (
  id SERIAL PRIMARY KEY,
  icon_name TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

ALTER TABLE public.about_values ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "about_values_public_read" ON public.about_values;
CREATE POLICY "about_values_public_read" ON public.about_values FOR SELECT USING (true);

-- 11. About content table (for story text)
CREATE TABLE IF NOT EXISTS public.about_content (
  id SERIAL PRIMARY KEY,
  section TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.about_content ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "about_content_public_read" ON public.about_content;
CREATE POLICY "about_content_public_read" ON public.about_content FOR SELECT USING (true);
