import supabase from "../config/supabase.js";

export const createOrder = async (req, res) => {
  try {
    const { product_name, quantity, price, customerId } = req.body;
    if (!product_name || !quantity || !price || !customerId) {
      res.status(400).json({ message: "All fields are required!" });
    }
    const { error } = await supabase
      .from("orders")
      .insert([{ product_name, quantity, price, customer_id: customerId }]);

    if (error) throw error;
    res.status(201).json({ message: "Orders will created successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrder = async (req, res) => {
  try {
    const { customerId } = req.params;
    const { data: order, error } = await supabase
      .from("orders")
      .select("*")
      .eq("customer_id", customerId)
      .single();

    if (!order || order.length === 0) {
      return res.status(404).json({ message: "Order not found" });
    }
    if (error) throw error;
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { quantity, price, order_status } = req.body;

    const { data: order, error } = await supabase
      .from("orders")
      .update([{ quantity, price, order_status }])
      .eq("id", orderId)
      .select()
      .single();

    if (!order || order.length === 0) {
      return res.status(404).json({ message: "Order not found!" });
    }
    if (error) throw error;
    res.status(200).json({ message: "Order Updated Successfully!", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { data: order, error } = await supabase
      .from("orders")
      .delete()
      .eq("id", orderId)
      .select()
      .single();

    if (!order || order.length === 0) {
      return res.status(404).json({ message: "Order not found!" });
    }
    if (error) throw error;
    res.status(200).json({ message: "Order deleted successfully!", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
