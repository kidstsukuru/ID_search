import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// 環境変数を読み込み
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getUser(name) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('name', name)
      .single()
    
    if (error) {
      console.error('Error fetching user:', error)
      return null
    }
    
    return data
  } catch (err) {
    console.error('Error:', err)
    return null
  }
}

export async function getAllUsers() {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
    
    if (error) {
      console.error('Error fetching users:', error)
      return []
    }
    
    return data
  } catch (err) {
    console.error('Error:', err)
    return []
  }
}

export async function createUser(userData) {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert([userData])
      .select()
      .single()
    
    if (error) {
      console.error('Error creating user:', error)
      return { success: false, error }
    }
    
    return { success: true, data }
  } catch (err) {
    console.error('Error:', err)
    return { success: false, error: err }
  }
}

export async function updateUser(name, userData) {
  try {
    const { data, error } = await supabase
      .from('users')
      .update(userData)
      .eq('name', name)
      .select()
      .single()
    
    if (error) {
      console.error('Error updating user:', error)
      return { success: false, error }
    }
    
    return { success: true, data }
  } catch (err) {
    console.error('Error:', err)
    return { success: false, error: err }
  }
}

export async function deleteUser(name) {
  try {
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('name', name)
    
    if (error) {
      console.error('Error deleting user:', error)
      return { success: false, error }
    }
    
    return { success: true }
  } catch (err) {
    console.error('Error:', err)
    return { success: false, error: err }
  }
}