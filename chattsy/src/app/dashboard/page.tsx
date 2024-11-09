import DashNav from "@/components/dashboard/DashNav";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import CreateChat from "@/groupChat/CreateChat";

export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <>
    <DashNav
      name={session?.user?.name!}
      image={session?.user?.image ?? undefined}
    />
    <div className="container">
    <div className="flex justify-end mt-10">
      <CreateChat user={session?.user!}/>
    </div>
    </div>
    </>
  );
}
