"use client";
import React from "react";
import Image from "next/image";
import person1 from "../assets/profile-pictures/hoda.png";
import person2 from "../assets/profile-pictures/diya.png";
import person3 from "../assets/profile-pictures/emma.png";
import person4 from "../assets/profile-pictures/krupa.png";
import person5 from "../assets/profile-pictures/Leyna.png";

const people = [
  {
    name: "Hoda Niaz",
    role: "President",
    major: "Computer Science and Psychology",
    year: "Senior",
    description: "FUN FACT- I am from Kashmir and I have two cats :p",
    image: person1,
  },
  {
    name: "Diya Kithani",
    role: "Secretary",
    major: "Computer Science and Mathematics",
    year: "Senior",
    description: "FUN FACT - I Powerlift! :)",
    image: person2,
  },
  {
    name: "Emma Bogdan",
    role: "Events Coordinator",
    major: "Biology",
    year: "Junior",
    description: "FUN FACT- I have a dog named Scooby! :)",
    image: person3,
  },
  {
    name: "Krupa Patel",
    role: "Treasurer",
    major: "Computer Science and Applied Computational Math",
    year: "Senior",
    description: "FUN FACT- I have a dog and four birds.",
    image: person4,
  },
  {
    name: "Leyna Nguyen",
    role: "Public Representative",
    major: "Biology",
    year: "Junior",
    description: "FUN FACT - I crochet stuffed animals!",
    image: person5,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-purple-100 to-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-8">
          Meet The Women In STEM Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg">
              <Image
                src={person.image}
                alt={person.name}
                className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold text-purple-900">{person.name}</h3>
              <p className="text-pink-600">{person.role}</p>
              <p className="text-gray-700 italic">{person.major}</p>
              <p className="text-purple-600 font-medium">{person.year}</p>
              <p className="mt-2 text-gray-600">{person.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


