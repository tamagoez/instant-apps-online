import { createClient } from '@supabase/supabase-js'

const getSupabase = () => {
    const supabase_ = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_KEY
    );
  
    return supabase_;
  };

export default getSupabase ;