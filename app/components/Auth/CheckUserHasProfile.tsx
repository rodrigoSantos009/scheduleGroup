import { supabase } from "../../lib/supabase";

export async function checkIfUserHasProfile(userId: string) {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("full_name")
      .eq("id", userId)
      .single();

    if (error) {
      throw error;
    }
    return data.full_name !== null
  } catch (error) {
    console.error("Error checking if user has a profile:", error);
    return false;
  }
}
