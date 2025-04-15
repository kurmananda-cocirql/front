import React from 'react';
import SimpleNavbar from './simpleNav';
import CourseCard from '../components/CourseCard';
import { useState } from 'react';
import { motion } from 'framer-motion';

const WorkshopsPage = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to Programming",
      category: "Computer Science/Development",
      rating: "4.8/5",
      students: "16.1K Students",
      image: "https://picsum.photos/seed/programming-1/300/450",
      redirectUrl: "/courses/intro-programming"
    },
    {
      id: 2,
      title: "Advanced Web Development",
      category: "Web Development",
      rating: "4.5/5",
      students: "12.9K Students",
      image: "https://picsum.photos/seed/webdev-2/300/450",
      redirectUrl: "/courses/web-development"
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      category: "Data Science",
      rating: "4.7/5",
      students: "8.6K Students",
      image: "https://picsum.photos/seed/datascience-3/300/450",
      redirectUrl: "/courses/data-science"
    },
    {
      id: 4,
      title: "Mobile App Development",
      category: "Mobile Development",
      rating: "4.9/5",
      students: "5.2K Students",
      image: "https://picsum.photos/seed/mobile-4/300/450",
      redirectUrl: "/courses/mobile-dev"
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      category: "Design",
      rating: "4.6/5",
      students: "7.3K Students",
      image: "https://picsum.photos/seed/design-5/300/450",
      redirectUrl: "/courses/ui-ux"
    }
  ]);

  const handleCourseClick = (url) => {
    // Your navigation logic here
    console.log("Navigating to:", url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <SimpleNavbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Discover Your Next <span className="text-amber-600">Adventure</span>
          </h1>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Explore our premium workshops designed to boost your skills and career
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all">
            All Categories
          </button>
          <button className="px-4 py-2 bg-white text-amber-800 rounded-full hover:bg-amber-100 transition-all">
            Development
          </button>
          <button className="px-4 py-2 bg-white text-amber-800 rounded-full hover:bg-amber-100 transition-all">
            Design
          </button>
          <button className="px-4 py-2 bg-white text-amber-800 rounded-full hover:bg-amber-100 transition-all">
            Data Science
          </button>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              onClick={() => handleCourseClick(course.redirectUrl)}
              className="cursor-pointer"
            >
              <CourseCard 
                course={course} 
                className="hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Can't find what you're looking for?
          </h2>
          <button className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl">
            Request a Custom Workshop
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkshopsPage;