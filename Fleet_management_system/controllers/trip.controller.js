import supabase from "../config/supabase.js";

export const createTrip= async(req, res)=>{
    const {vehicle_id, passengers, distance_km}= req.body;

    const {data:vehicle}= await supabase.from("vehicles")
    .select("*")
    .eq("id", vehicle_id)
    .single()

    if(!vehicle.isAvailable)
        return res.status(400).json({message:"Vehicle not available"});

    if(paasengers>vehicle.allowed_passengers)
        return res.status(400).json({message:"Passener limit exceeded!"});
    const tripCost=distance_km* vehicle.rate_per_km;
};

export const deleteTrip= async(req, res)=>{
    await supabase.from("trips").delete().eq("id", req.params.tripId);
    req.json({message:"Trip deleted!"});
};