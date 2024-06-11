"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { Profile } from "@components";

const MyProfile = () => {

    const { data:session } = useSession();
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async () => {
          const response = await fetch(`api/users/${session?.user.id}/posts`);
          const data = await response.json();
          setPosts(data);
        }
        if(session?.user.id) fetchPosts();
      },[])

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

  return (
    <Profile
        name = "my"
        desc = "Welcome to My Profile"
        data = {posts}
        handleEdit = {handleEdit}
        handleDelete = {handleDelete}
    />
  )
}

export default MyProfile