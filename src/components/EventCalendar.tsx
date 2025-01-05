"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Science Fair",
    time: "10:00 AM - 2:00 PM",
    description: "Join us for the annual science fair. Showcase your projects and explore innovative ideas.",
  },
  {
    id: 2,
    title: "Music Concert",
    time: "6:00 PM - 8:30 PM",
    description: "An evening of mesmerizing performances by the school choir and orchestra.",
  },
  {
    id: 3,
    title: "Art Exhibition",
    time: "11:00 AM - 3:00 PM",
    description: "Discover artistic talents at the school’s art exhibition featuring student artwork.",
  },
  {
    id: 4,
    title: "PTA Meeting",
    time: "3:00 PM - 5:00 PM",
    description: "Parents and teachers, join us for a discussion about school programs and future plans.",
  },
  {
    id: 5,
    title: "Sports Day",
    time: "8:00 AM - 4:00 PM",
    description: "A day full of thrilling sports events. Cheer for your favorite team!",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;