
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, processLock } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL! || "https://zbnvhglzqzoitqxginop.supabase.co",
  process.env.EXPO_PUBLIC_SUPABASE_KEY! || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpibnZoZ2x6cXpvaXRxeGdpbm9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MTMwNjUsImV4cCI6MjA3MDE4OTA2NX0.a4y4RaCYIrrsBMhkwHQePEko1M37tE9w0rVksL2pH_c",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
      lock: processLock,
    },
  })
        