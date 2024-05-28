import React from 'react'
import CommunityMembers from "../Components/CommunityMembers"
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Community members",
  description:
    "Okhai Memon Jamat Community  Office Bearers,  Board members and co-opted board members ",
};

function page() {
  return (
    <div><CommunityMembers /></div>
)}

export default page