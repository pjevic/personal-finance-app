/** @format */

import { supabase } from "../lib/supabase";

export async function getTransactions(id) {
  const { data, error } = await supabase
    .from("trasactions")
    .select("*")
    .eq("userID", id);

  if (error) {
    console.error(error);
  }

  return data;
}
