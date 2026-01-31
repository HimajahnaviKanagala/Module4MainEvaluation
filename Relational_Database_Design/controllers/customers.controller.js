import supabase from "../config/supabase.js";

export const registerCustomer = async (req, res) => {
  try {
    const { full_name, email, phone } = req.body;
    if (!full_name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const { existingCustomer } = await supabase
      .from("customers")
      .select("id")
      .eq("email", email)
      .single();

    if (existingCustomer) {
      return res
        .status(409)
        .json({ message: "Customer with this email already exists!" });
    }

    const { data: customer, error } = await supabase
      .from("customers")
      .insert([{ full_name, email, phone }]);

    if (error) throw error;
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
