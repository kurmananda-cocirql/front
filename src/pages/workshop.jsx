import React, { useState } from 'react';
import SimpleNavbar from './simpleNav';
import CourseCard from '../components/CourseCard';
import { motion } from 'framer-motion';

const WorkshopsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const allCourses = [
    // Development (7 courses)
    {
      id: 1,
      title: "Introduction to Programming",
      category: "Development",
      rating: "4.8/5",
      students: "16.1K Students",
      image: "https://picsum.photos/seed/programming-1/300/450",
      redirectUrl: "/courses/intro-programming"
    },
    {
      id: 2,
      title: "Advanced Web Development",
      category: "Development",
      rating: "4.5/5",
      students: "12.9K Students",
      image: "https://picsum.photos/seed/webdev-2/300/450",
      redirectUrl: "/courses/web-development"
    },
    {
      id: 3,
      title: "Mobile App Development",
      category: "Development",
      rating: "4.9/5",
      students: "5.2K Students",
      image: "https://picsum.photos/seed/mobile-4/300/450",
      redirectUrl: "/courses/mobile-dev"
    },
    {
      id: 4,
      title: "Python Masterclass",
      category: "Development",
      rating: "4.7/5",
      students: "18.3K Students",
      image: "https://picsum.photos/seed/python-5/300/450",
      redirectUrl: "/courses/python"
    },
    {
      id: 5,
      title: "JavaScript Frameworks",
      category: "Development",
      rating: "4.6/5",
      students: "14.2K Students",
      image: "https://picsum.photos/seed/js-6/300/450",
      redirectUrl: "/courses/javascript"
    },
    {
      id: 6,
      title: "Backend Development",
      category: "Development",
      rating: "4.4/5",
      students: "9.7K Students",
      image: "https://picsum.photos/seed/backend-7/300/450",
      redirectUrl: "/courses/backend"
    },
    {
      id: 7,
      title: "DevOps Fundamentals",
      category: "Development",
      rating: "4.8/5",
      students: "7.5K Students",
      image: "https://picsum.photos/seed/devops-8/300/450",
      redirectUrl: "/courses/devops"
    },
    
    // Design (5 courses)
    {
      id: 8,
      title: "UI/UX Design Principles",
      category: "Design",
      rating: "4.6/5",
      students: "7.3K Students",
      image: "https://picsum.photos/seed/design-5/300/450",
      redirectUrl: "/courses/ui-ux"
    },
    {
      id: 9,
      title: "Adobe Photoshop Mastery",
      category: "Design",
      rating: "4.7/5",
      students: "11.2K Students",
      image: "https://picsum.photos/seed/photoshop-9/300/450",
      redirectUrl: "/courses/photoshop"
    },
    {
      id: 10,
      title: "Figma for Beginners",
      category: "Design",
      rating: "4.9/5",
      students: "8.9K Students",
      image: "https://picsum.photos/seed/figma-10/300/450",
      redirectUrl: "/courses/figma"
    },
    {
      id: 11,
      title: "Graphic Design Fundamentals",
      category: "Design",
      rating: "4.5/5",
      students: "6.4K Students",
      image: "https://picsum.photos/seed/graphic-11/300/450",
      redirectUrl: "/courses/graphic-design"
    },
    {
      id: 12,
      title: "3D Modeling Basics",
      category: "Design",
      rating: "4.3/5",
      students: "5.1K Students",
      image: "https://picsum.photos/seed/3d-12/300/450",
      redirectUrl: "/courses/3d-modeling"
    },
    
    // Data Science (5 courses)
    {
      id: 13,
      title: "Data Science Fundamentals",
      category: "Data Science",
      rating: "4.7/5",
      students: "8.6K Students",
      image: "https://picsum.photos/seed/datascience-3/300/450",
      redirectUrl: "/courses/data-science"
    },
    {
      id: 14,
      title: "Machine Learning Basics",
      category: "Data Science",
      rating: "4.9/5",
      students: "12.4K Students",
      image: "https://picsum.photos/seed/ml-14/300/450",
      redirectUrl: "/courses/machine-learning"
    },
    {
      id: 15,
      title: "Data Visualization",
      category: "Data Science",
      rating: "4.6/5",
      students: "6.8K Students",
      image: "https://picsum.photos/seed/viz-15/300/450",
      redirectUrl: "/courses/data-viz"
    },
    {
      id: 16,
      title: "SQL for Data Analysis",
      category: "Data Science",
      rating: "4.8/5",
      students: "10.3K Students",
      image: "https://picsum.photos/seed/sql-16/300/450",
      redirectUrl: "/courses/sql"
    },
    {
      id: 17,
      title: "Big Data Concepts",
      category: "Data Science",
      rating: "4.4/5",
      students: "5.9K Students",
      image: "https://picsum.photos/seed/bigdata-17/300/450",
      redirectUrl: "/courses/big-data"
    },
    
    // Business (3 courses)
    {
      id: 18,
      title: "Digital Marketing 101",
      category: "Business",
      rating: "4.5/5",
      students: "9.2K Students",
      image: "https://picsum.photos/seed/marketing-18/300/450",
      redirectUrl: "/courses/digital-marketing"
    },
    {
      id: 19,
      title: "Entrepreneurship Basics",
      category: "Business",
      rating: "4.7/5",
      students: "7.1K Students",
      image: "https://picsum.photos/seed/entrepreneur-19/300/450",
      redirectUrl: "/courses/entrepreneurship"
    },
    {
      id: 20,
      title: "Financial Planning",
      category: "Business",
      rating: "4.6/5",
      students: "6.3K Students",
      image: "https://picsum.photos/seed/finance-20/300/450",
      redirectUrl: "/courses/financial-planning"
    }
  ];

  const categories = ['All', 'Development', 'Design', 'Data Science', 'Business'];
  
  const filteredCourses = activeFilter === 'All' 
    ? allCourses 
    : allCourses.filter(course => course.category === activeFilter);

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
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-amber-800 hover:bg-amber-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Filter Status */}
        {activeFilter !== 'All' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-center"
          >
            <p className="text-amber-700">
              Showing {filteredCourses.length} {activeFilter.toLowerCase()} courses
            </p>
          </motion.div>
        )}

        {/* Courses Grid - 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
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

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h3 className="text-xl text-amber-800 mb-2">
              No courses found in this category
            </h3>
            <button 
              onClick={() => setActiveFilter('All')}
              className="text-amber-600 hover:underline"
            >
              View all courses
            </button>
          </motion.div>
        )}

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