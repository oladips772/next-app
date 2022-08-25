/** @format */
import React from "react";
import { useRouter } from "next/router";

function ProfileDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>profile details {id}</h1>
    </div>
  );
}

export default ProfileDetail;
