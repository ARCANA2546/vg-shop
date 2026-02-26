import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://mkdxdcxrolyiawgueeey.supabase.co' 
const supabaseKey = 'sb_publishable_yA_zDvU6qCB7cVufOzx9KQ_KKp9fcis'
export const supabase = createClient(supabaseUrl, supabaseKey)