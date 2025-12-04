import Post from "./Post";

export default function Gallery() {
  return (
    <div>
      <Post
        image="https://images.unsplash.com/photo-1589643912900-a2448388e781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        caption="Bryggen, Bergen, Norway."
      />

      <Post
        title="Bryggen in Bergen"
        text="Bryggen ... to be continued."
        image="https://images.unsplash.com/photo-1726759491296-eb796fa99e27?q=80&w=1002&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        caption="Bergen, Norway."
      />

      <Post
        title="Fløyen and the City Below"
        image="https://images.unsplash.com/photo-1607891891983-f0145aa93e7b?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        caption="View from Mount Fløyen, Bergen."
      />
    </div>
  );
}
