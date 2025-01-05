"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Initial profile state (either from localStorage or default)
  const [profile, setProfile] = useState({
    name: "John Doe",
    role: "Student",
    email: "johndoe@example.com",
    about: "Hi, I’m John! I specialize in learning new technologies and improving my academic performance. I’m passionate about computer science.",
  });

  // Fetch the profile data from localStorage (if available)
  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile)); // Load saved profile
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Save the updated profile to localStorage
    localStorage.setItem("profile", JSON.stringify(profile));
    setIsEditing(false);
  };

  // School-related activities
  const activities = [
    {
      id: 1,
      title: "Completed Assignment: Algebra Homework",
      description: "Submitted on time with a score of 95%.",
      date: "2025-01-03",
    },
    {
      id: 2,
      title: "Math Exam Results",
      description: "Scored 88% in the semester finals.",
      date: "2025-01-02",
    },
    {
      id: 3,
      title: "Upcoming Event: Science Fair",
      description: "Participation in the annual Science Fair event next month.",
      date: "2025-02-01",
    },
  ];

  // Subjects the user is enrolled in
  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      grade: "A",
    },
    {
      id: 2,
      name: "Science",
      grade: "B+",
    },
    {
      id: 3,
      name: "Computer Science",
      grade: "A-",
    },
    {
      id: 4,
      name: "History",
      grade: "B",
    },
  ];

  return (
    <div className="bg-[#F7F8FA] min-h-screen p-6">
      {/* Profile Header */}
      <div className="bg-white rounded-md p-6 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-lg">
        {/* Profile Picture */}
        <div className="w-40 h-40 relative bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <Image
            src="/avatar.png" // Replace with actual profile picture path
            alt="Profile Picture"
            fill
            className="rounded-full object-cover border-4 border-white"
          />
        </div>
        {/* Profile Details */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="text-3xl font-semibold text-gray-700">{profile.name}</h1>
          <p className="text-gray-500">{profile.role}</p>
          <p className="text-gray-500">{profile.email}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div className="mt-6 flex flex-col lg:flex-row gap-6">
        {/* About Me */}
        <div className="bg-white rounded-md p-6 flex-1 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">{profile.about}</p>
        </div>

        {/* Subjects */}
        <div className="bg-white rounded-md p-6 flex-1 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Subjects</h2>
          <ul className="space-y-4">
            {subjects.map((subject) => (
              <li key={subject.id} className="flex items-center justify-between">
                <span className="text-gray-600">{subject.name}</span>
                <span className="text-gray-500">{subject.grade}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent School Activities */}
      <div className="mt-6 bg-white rounded-md p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent School Activities</h2>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id} className="flex items-center justify-between">
              <div className="flex-1 ml-4">
                <h3 className="text-gray-600 font-semibold">{activity.title}</h3>
                <p className="text-gray-500 text-sm">{activity.description}</p>
                <span className="text-xs text-gray-400">{activity.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-md p-6 w-full max-w-md shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Edit Profile</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name"
              />
              <input
                type="text"
                name="role"
                value={profile.role}
                onChange={handleInputChange}
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Role"
              />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
              <textarea
                name="about"
                value={profile.about}
                onChange={handleInputChange}
                rows={3}
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="About Me"
              />
            </div>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
