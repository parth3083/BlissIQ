import React from "react";

import NotificationMessageCard from "./NotificationMessageCard";

function NotificationContent() {
  return (
    <div className="w-full h-full  p-3">
      <h2 className="text-4xl mb-3 font-semibold">Notifications</h2>

      <div className="w-full h-[77vh] overflow-hidden overflow-y-auto  ">
        <NotificationMessageCard />
        <NotificationMessageCard />
        <NotificationMessageCard />
        <NotificationMessageCard />
        <NotificationMessageCard />
        <NotificationMessageCard />
  

      </div>
    </div>
  );
}

export default NotificationContent;
