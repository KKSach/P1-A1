# About me
I'm not a developer. Explain what you're doing in plain English, briefly.

# How to work
- Before starting a task, give me a short numbered plan and wait for my OK.
- Make one small change at a time. Tell me how to check it worked on my phone.
- At the end, summarise in 3–5 sentences what you built and what's next.
- Save work to GitHub at the end of each task.
- Keep explanations short unless I ask for more.
- UK English.

# The project
"Stash": a phone app (iPhone + Android, built with Expo) that collects screenshots and
saved links (TikTok, Instagram, Google Maps), uses Claude to sort them into themed
collections (date nights, London, books, products), shows the source of each item,
and suggests items for free calendar slots.
Backend: Supabase (database + server function holding the Claude API key — never put keys in the app).

# Build order
1. Skeleton running on phones via Expo Go  ← current
2. Add items (pick screenshot / paste link) with source label
3. Claude sorts items into themes
4. Collection screens + "Save to Google Maps"
5. Installable builds (share menu, screenshot scanning) — Android first
6. Calendar suggestions

See AGENTS.md for Expo technical rules.
