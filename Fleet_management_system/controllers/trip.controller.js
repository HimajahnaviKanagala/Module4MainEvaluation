import supabase from "../config/supabase.js";

export const createTrip= async(req, res)=>{
    const {vehicle_id, passengers, distance_km}= req.body;

    const {data:vehicle}= await supabase.from("vehicles")
    .select("*")
    .eq("id", vehicle_id)
    .single()

    if(!vehicle.isAvailable)
        return res.status(400).json({message:"Vehicle not available"});

    if(passengers>vehicle.allowed_passengers)
        return res.status(400).json({message:"Passener limit exceeded!"});
    const tripCost=distance_km* vehicle.rate_per_km;

    await supabase.from("vechicles".update({isAvailable:false})).eq("id", vehicle_id);

    await supabase.from("trips").insert([{
        ...req.body,
        customer_id:req.user.id,
        tripCost;
    }]);
    res.status(201).json({message:"Trip created!"});
};

export const updateTrip=async(req, res)=>{
    await supabase.from("trips")
    .update(req.body)
    .eq("id", req.params.tripId);
    res.json({message:"Trip updated"});
};

export const getTrip=async(req, res)=>{
    const {data}= await supabase.from("trips")
    .select("*")
    .eq("id", req.params.tripId)
    .single();

    res.json(data);
}

export const deleteTrip= async(req, res)=>{
    await supabase.from("trips").delete().eq("id", req.params.tripId);
    req.json({message:"Trip deleted!"});
};