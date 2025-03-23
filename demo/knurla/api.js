export default function api(supabase){

  async function getUser(){
    const { data, error } = await supabase.auth.getUser();
    return data.user;
  }

  return {
    //[{note: "start", date: new Date()}]
    //[{note: "start", date: "2024-08-05"}]
    //{note: "start", date: "2024-08-05"}
    insert: async function(events = []){
      if (Array.isArray(events) && !events.length)
        return console.log("api insert called with empty array, not doing that");
      if (!Array.isArray(events)) events = [events];

      const user = await getUser()

      // Insert a new event
      const { data, error } = await supabase
        .from('events')
        .insert(events.map(e => ({...e, user_id: user.id})))
      return ("insert", data, error );
    },

    select: async function(){
      const user = await getUser()

      // Fetch events for the logged-in user
      let { data, error } = await supabase
        .from('events')
        .select("date,note")
        .eq('user_id', user.id)
      return {data, error};
    },

    //{note: "start", date: "2024-08-05"}
    delete: async function(event = {}){
      const user = await getUser()
      
      // Delete an event
      let { data, error } = await supabase
        .from('events')
        .delete()
        .eq('date', event.date)
        .eq('note', event.note)
        .eq('user_id', user.id)
      return {data, error};
    }

  }


}
